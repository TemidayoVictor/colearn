'use client';
import React, { useState, useEffect } from 'react';
import { useConsultant } from '@/hooks/useConsultant';
import { useOnboarding } from '@/hooks/useOnboarding';
import Image from 'next/image';
import ButtonLoader from '../buttonLoader';
import { useAuthConsultant } from '@/hooks/useAuth';
import {useRouter} from 'next/navigation';
import { courseStore } from '@/zustand/courseStore';
import { consultantStore } from '@/zustand/consultantStore';
import Loader from '../Loader';


const SetAvailabilityBody = () => {
  const router = useRouter(); 
  const [loading, setLoading] = useState<boolean>(true);

  const newUpdate = courseStore((state) => state.newUpdate);

  const defaultSlots = [
    { day: "Monday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
    { day: "Tuesday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
    { day: "Wednesday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
    { day: "Thursday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
    { day: "Friday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
    { day: "Saturday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
    { day: "Sunday", enabled: false, start_time: "", end_time: "", id: "", consultant_id: 0 },
  ];

  const savedSlots  = consultantStore((state) => state.slots) || defaultSlots;

  const {
    timeOptions,
    slots,
    setSlots,
    toggleDay,
    handleTimeChange,
    setAvailability,
    buttonLoader,
  } = useConsultant();

  const { 
    selected, 
    handleSelect 
  } = useOnboarding();

  useEffect(() => {
    setLoading(true);
    const init = async () => {
      await useAuthConsultant(router); 
      const merged = defaultSlots.map((defaultSlot) => {
        const match = savedSlots.find(
          (s: any) => s.day === defaultSlot.day
        );

        if (match) {
          return {
            ...defaultSlot,
            enabled: match.enabled,
            start_time: match.start_time,
            end_time: match.end_time,
            id: match.id,
            consultant_id: match.consultant_id || 0,
          };
        }

        return defaultSlot;
      });

      setSlots(merged);

      courseStore.getState().setNewUpdate('reset');
      setLoading(false);
    };
    init();

  }, [newUpdate]);

  if (loading)  return <Loader />

  return (
    <div>
      
      <div>
        <h2 className="title-2">Set Type and Availability</h2>
        <p className="color-grey-text text-[.8rem]">Select your service type</p>
      </div>

      <div className="mt-4">
          <div className="mt-[1em]">
            <div
                className={`onboarding-select two cursor-pointer ${selected == 'free' ? 'active' : ''}`}
                onClick={() => handleSelect('free')}
            >
                <div className="custom-checkbox-wrapper">
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={selected === 'free'}
                    onChange={() => handleSelect('free')}
                />
                </div>
                <p className="font-semibold">Free Consulting Services</p>
            </div>

            <div
                className={`onboarding-select two cursor-pointer ${selected == 'paid' ? 'active' : ''}`}
                onClick={() => handleSelect('paid')}
            >
                <div className="custom-checkbox-wrapper">
                <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={selected === 'paid'}
                    onChange={() => handleSelect('paid')}
                />
                </div>
                <p className="font-semibold">Paid Consulting Services</p>
            </div>
          </div>
          {
            selected === 'paid' &&
            <div className="">
              <div className="mt-4">
                <label htmlFor="" className="text-[.9rem] font-semibold">Rate per Hour<span className="text-red-500">*</span> </label>
                <div className="flex items-center gap-1">
                    <span className="upload-course-input flex-1 font-bold">$</span>
                    <input 
                      type="number" 
                      className={`upload-course-input`} 
                      name="price"
                      value=""
                      placeholder="Rate per hour" 
                    />
                </div>
              </div>
            </div>
          }

          <div className="mt-4">
            <h2 className='title-3'>Week Hours</h2>
            <p className="color-grey-text text-[.8rem]">Select the days and times you are available for consultations.</p>
          </div>
      </div>

      <div className='mt-4 availability-container'>
        {
          slots.map((slot, index) => (
            <div key={index} className="availability">
              <input
                type="checkbox"
                id={`day-${index}`}
                checked={slot.enabled}
                onChange={() => toggleDay(index)}
              />
              <label htmlFor={`day-${index}`} className="w-24 font-semibold">{slot.day}</label>

              {!slot.enabled ? (
                <span className="unavailable">Unavailable</span>
              ) : (
                <>
                  <select
                    value={slot.start_time}
                    onChange={(e) => handleTimeChange(index, "start_time", e.target.value)}
                    className="availability-select"
                  >
                    <option value="">Start Time</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>

                  <select
                    value={slot.end_time}
                    onChange={(e) => handleTimeChange(index, "end_time", e.target.value)}
                    className="availability-select"
                  >
                    <option value="">End Time</option>
                    {timeOptions.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </>
              )}
            </div>
          ))
        }
      </div>
      <button className="flex items-center justify-center gap-2 btn btn-primary-fill w-full mt-4" onClick={setAvailability}>
        {
            buttonLoader ? (
                <ButtonLoader content="Creating Course . . ." />
            ) : 
            
            (
                <div className="bt-btn two">
                    <span>Create Course</span>
                    <span>
                        <Image
                            aria-hidden
                            src="/assets/images/arrow-right.png"
                            alt="Colearn Logo"
                            width={12}
                            height={12}
                            className="object-contain"
                        />
                    </span>
                </div>                                        
            )
        }
      </button>
    </div>
  );
    
}

export default SetAvailabilityBody