import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { Consultant, Booking, Course, Cart, Coupon } from '@/app/Types/types';

type GeneralState = {
  consultant: Consultant | null;
  consultants: Consultant[];

  booking: Booking | null;
  bookings: Booking[]; 

  course: Course | null;
  courses: Course[];

  cartId: string | null;
  cart: Cart[];

  couponId: string | null;
  coupons: Coupon[];

  setConsultant: (consultant: Consultant) => void
  setConsultants: (consultants: Consultant[]) => void

  setBooking: (booking: Booking) => void
  setBookings: (bookings: Booking[]) => void

  setCourse: (course: Course) => void
  setCourses: (courses: Course[]) => void

  setCartId: (cartId: string | undefined) => void
  setCart: (cart: Cart[]) => void

  setCouponId: (couponId: string | undefined) => void
  setCoupons: (coupons: Coupon[]) => void

  getConsultantById: (id: number) => Consultant | undefined;

  clearAll: () => void,
}

export const genralStore = create<GeneralState>() (
  persist(
    (set, get) => ({
      consultant: null,
      consultants: [],

      booking: null,
      bookings: [],

      course: null,
      courses: [],

      cartId: null,
      cart: [],

      couponId: null,
      coupons: [],

      setBooking: (booking) => set({booking}),
      setBookings: (bookings) => set({bookings}),

      setConsultant: (consultant) => set({consultant}),
      setConsultants: (consultants) => set({consultants}),

      setCourse: (course) => set({course}),
      setCourses: (courses) => set({courses}),

      setCartId: (cartId) => set({cartId}),
      setCart: (cart) => set({cart}),

      setCouponId: (couponId) => set({couponId}),
      setCoupons: (coupons) => set({coupons}),

      getConsultantById: (id) => get().consultants.find((c) => c.id === id),
      
      clearAll: () => {
      set({
        consultant: null, consultants: [], 
        booking: null, bookings: [], 
        course: null, courses: [], 
        cartId: null, cart: [],
        couponId: null, coupons: [],
      }); 
      localStorage.removeItem('general-storage'); // Remove persisted state
      }
    }),
    {
      name: 'general-storage', // Key in localStorage
    }
  )
)