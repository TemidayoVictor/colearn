import React, {useEffect} from "react";
import { useAdmin } from "@/hooks/useAdmin";
import { genralStore } from "@/zustand/generalStore";
import ButtonLoader from "../buttonLoader";

const PaymentHistorySettings = () => {
    const {
        buttonLoader,
        handleSettingsChange,
        settingsData,
        setSettingsData,
        updateGeneralSetting,
    } = useAdmin();

    const settings = genralStore((state) => state.generalSettings);

    useEffect(() => {
        const init = async () => {
            setSettingsData({
                course_percentage: settings?.course_percentage || 0,
                consultation_perentage: settings?.consultation_perentage || 0,
                minimum_withdrawal: settings?.minimum_withdrawal || 0,
            });
        };

        init();

    }, []);

    return (
        <div>
            <div className="res-flex items-center justify-between my-4">
                <h2 className="font-semibold">Revenue Settings</h2>
            </div>

            <div>
                
                <div className="input-box">
                    <label htmlFor="">Instructor Course Percentage<span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-1">
                        <input 
                            name="course_percentage"
                            type="number"
                            value={settingsData.course_percentage}
                            className="input-field flex-1" 
                            onChange = {handleSettingsChange}
                        />
                        <span className="input-field font-bold">%</span>
                    </div>
                </div>
                
                <div className="input-box">
                    <label htmlFor="">Consultant Fee Percentage<span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-1">
                        <input 
                            name="consultation_perentage"
                            type="number"
                            value={settingsData.consultation_perentage}
                            className="input-field flex-1" 
                            onChange = {handleSettingsChange}
                        />
                        <span className="input-field font-bold">%</span>
                    </div>
                </div>
                
                <div className="input-box">
                    <label htmlFor="">Minumum Amount Withdrawal<span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-1">
                        <span className="input-field font-bold">$</span>
                        <input 
                            name="minimum_withdrawal"
                            type="number"
                            value={settingsData.minimum_withdrawal}
                            className="input-field flex-1" 
                            onChange = {handleSettingsChange}
                        />
                    </div>
                </div>

                <button className="flex items-center justify-center gap-2 btn btn-success tw w-full" onClick={updateGeneralSetting}>
                    {
                        buttonLoader ? (
                            <ButtonLoader content="Please wait . . ." />
                        ) : 
                        
                        (
                            <div className="bt-btn two">
                                <span>Update</span>
                            </div>                                        
                        )
                    }
                </button>
            </div>
        </div>
    )
}

export default PaymentHistorySettings;