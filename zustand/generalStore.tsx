import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  User, 
  Consultant, 
  Booking, 
  Course, 
  Cart, 
  Coupon, 
  Enrollment, 
  Review, 
  Transaction, 
  Wallet,
  GeneralSettings, 
  Instructor,
  Dashboard,
  Student,
  Web,
  Blog,
  Category,
  FAQ,
} from '@/app/Types/types';

type GeneralState = {
  consultant: Consultant | null;
  consultants: Consultant[];

  user: User | null;
  users: User[];

  booking: Booking | null;
  bookings: Booking[]; 

  course: Course | null;
  courses: Course[];

  cartId: string | null;
  cart: Cart[];

  couponId: string | null;
  coupons: Coupon[];

  enrollment: Enrollment | null;
  enrollments: Enrollment[];

  review: Review | null;
  reviews: Review[];

  transaction: Transaction | null;
  transactions: Transaction[];

  withdrawal: Transaction | null;
  withdrawals: Transaction[];

  instructor: Instructor | null;
  instructors: Instructor[];

  student: Student | null;
  students: Student[];

  newEmail: string;

  wallet: Wallet | null;

  generalSettings: GeneralSettings | null;

  data: Dashboard |  null;

  web: Web | null;

  blog: Blog | null;
  blogs: Blog[];

  category: Category | null;
  categorys: Category[];

  faq: FAQ | null;
  faqs: FAQ[];

  setConsultant: (consultant: Consultant) => void
  setConsultants: (consultants: Consultant[]) => void

  setUser: (user: User) => void
  setUsers: (users: User[]) => void

  setBooking: (booking: Booking) => void
  setBookings: (bookings: Booking[]) => void

  setCourse: (course: Course) => void
  setCourses: (courses: Course[]) => void

  setCartId: (cartId: string | undefined) => void
  setCart: (cart: Cart[]) => void

  setCouponId: (couponId: string | undefined) => void
  setCoupons: (coupons: Coupon[]) => void

  setEnrollment: (enrollment: Enrollment) => void
  setEnrollments: (enrollments: Enrollment[]) => void

  setReview: (review: Review) => void
  setReviews: (reviews: Review[]) => void

  setTransaction: (transaction: Transaction) => void
  setTransactions: (transactions: Transaction[]) => void

  setWithdrawal: (withdrawal: Transaction) => void
  setWithdrawals: (withdrawals: Transaction[]) => void

  setInstructor: (instructor: Instructor) => void
  setInstructors: (instructors: Instructor[]) => void

  setStudent: (student: Student) => void
  setStudents: (students: Student[]) => void

  setNewEmail: (newEmail: string) => void

  setWallet: (wallet: Wallet | null) => void

  setGeneralSettings: (settings: GeneralSettings) => void;

  getConsultantById: (id: number) => Consultant | undefined;

  getCourseById: (id: number) => Course | undefined;

  getTutorById: (id: number) => Instructor | undefined;

  setData: (data: Dashboard | null) => void;

  setWeb: (web: Web | null) => void;

  setBlog: (blog: Blog) => void
  setBlogs: (blogs: Blog[]) => void

  setCategory: (category: Category) => void
  setCategorys: (categorys: Category[]) => void

  setFAQ: (faq: FAQ) => void
  setFAQs: (faqs: FAQ[]) => void

  clearAll: () => void,
  
}

export const genralStore = create<GeneralState>() (
  persist(
    (set, get) => ({
      consultant: null,
      consultants: [],

      user: null,
      users: [],

      booking: null,
      bookings: [],

      course: null,
      courses: [],

      cartId: null,
      cart: [],

      couponId: null,
      coupons: [],

      enrollment: null,
      enrollments: [],

      review: null,
      reviews: [],

      transaction: null,
      transactions: [],
      
      withdrawal: null,
      withdrawals: [],

      instructor: null,
      instructors: [],

      student: null,
      students: [],

      newEmail: '',

      wallet: null,

      generalSettings: null,

      data: null,

      web: null,

      blog: null,
      blogs: [],

      category: null,
      categorys: [],

      faq: null,
      faqs: [],

      setBooking: (booking) => set({booking}),
      setBookings: (bookings) => set({bookings}),

      setConsultant: (consultant) => set({consultant}),
      setConsultants: (consultants) => set({consultants}),

      setUser: (user) => set({user}),
      setUsers: (users) => set({users}),

      setCourse: (course) => set({course}),
      setCourses: (courses) => set({courses}),

      setCartId: (cartId) => set({cartId}),
      setCart: (cart) => set({cart}),

      setCouponId: (couponId) => set({couponId}),
      setCoupons: (coupons) => set({coupons}),

      setEnrollment: (enrollment) => set({enrollment}),
      setEnrollments: (enrollments) => set({enrollments}),

      setReview: (review) => set({review}),
      setReviews: (reviews) => set({reviews}),

      setTransaction: (transaction) => set({transaction}),
      setTransactions: (transactions) => set({transactions}),

      setWithdrawal: (withdrawal) => set({withdrawal}),
      setWithdrawals: (withdrawals) => set({withdrawals}),

      setInstructor: (instructor) => set({instructor}),
      setInstructors: (instructors) => set({instructors}),

      setStudent: (student) => set({student}),
      setStudents: (students) => set({students}),
      
      setNewEmail: (newEmail) => set({newEmail}),

      setWallet: (wallet) => set({wallet}),

      setGeneralSettings: (settings: GeneralSettings) => set({generalSettings: settings}),

      getConsultantById: (id) => get().consultants.find((c) => c.id === id),

      getCourseById: (id) => get().web?.courses?.find((c) => Number(c.id) === Number(id)),

      getTutorById: (id) => get().web?.instructors?.find((c) => Number(c.id) === Number(id)),

      setData: (data) => set({data}),

      setWeb: (web) => set({web}),

      setBlog: (blog) => set({blog}),
      setBlogs: (blogs) => set({blogs}),

      setCategory: (category) => set({category}),
      setCategorys: (categorys) => set({categorys}),

      setFAQ: (faq) => set({faq}),
      setFAQs: (faqs) => set({faqs}),
      
      clearAll: () => {
      set({
        consultant: null, consultants: [], 
        user: null, users: [],
        booking: null, bookings: [], 
        course: null, courses: [], 
        cartId: null, cart: [],
        couponId: null, coupons: [],
        enrollment: null, enrollments: [],
        review: null, reviews: [],
        transaction: null, transactions: [],
        withdrawal: null, withdrawals: [],
        instructor: null, instructors: [],
        student: null, students: [],
        newEmail: '',
        wallet: null,
        generalSettings: null,
        data: null,
        web: null,
        blog: null, blogs: [],
        category: null, categorys: [],
        faq: null, faqs: [],
      }); 

      localStorage.removeItem('general-storage'); // Remove persisted state
      }
    }),
    {
      name: 'general-storage', // Key in localStorage
    }
  )
)