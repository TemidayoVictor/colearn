import axiosInstanceWeb from "@/utils/web";
import { showErrorToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { instructorStore } from "@/zustand/instructorStore";
import { consultantStore } from "@/zustand/consultantStore";
import { useRouter } from "next/navigation";

export const useAuth = async (router: ReturnType<typeof useRouter>) => {
  const { setUser, setStudent, setInstructor } = authStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user");
    if (response.status === 200) {
      const { user, student, instructor } = response.data;
      setUser(user);

      if (user.type === "student" && student) {
        setStudent(student);
      }

      if (user.type === "instructor" && instructor) {
        setInstructor(instructor);
      }

      // redirect user to dashboard page if they are already registered and have completed their profile
      if(user.type != "Inactive" && user.profile_progress == "completed") {
        router.push(`/${user.type}s/dashboard`);
      }

    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};

export const checkAuth = async (router: ReturnType<typeof useRouter>) => {
  const { setUser, setStudent, setInstructor } = authStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user");
    if (response.status === 200) {
      const { user, student, instructor } = response.data;
      setUser(user);

      if (user.type === "student" && student) {
        setStudent(student);
      }

      if (user.type === "instructor" && instructor) {
        setInstructor(instructor);
      }

      return

    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};

export const useAuthInstructors = async (router: ReturnType<typeof useRouter>) => {
  const { setUser, setInstructor } = authStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user");
    if (response.status === 200) {
      const { user, instructor } = response.data;

      if (user.type === "instructor" && instructor) {
          setUser(user);
          setInstructor(instructor);
      }

      else {
          showErrorToast("Unauthorized User");
          router.push("/authentication/login");
      }
      
    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};


export const useAuthBecomeConsultant = async (router: ReturnType<typeof useRouter>) => {
  const { setUser, setInstructor } = authStore.getState();
  const { setSchools, setCerts } = instructorStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user-instructor");
    console.log(response)
    if (response.status === 200) {
      const { user, instructor } = response.data;
      if (user.type === "instructor" && instructor) {
        setUser(user);
        setInstructor(instructor);
        setSchools(instructor.schools);
        setCerts(instructor.certifications);
      }

      else {
        showErrorToast("Unauthorized User");
        router.push("/authentication/login");
      }
      
    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};

export const useAuthConsultant = async (router: ReturnType<typeof useRouter>) => {
  const { setUser, setConsultant } = authStore.getState();
  const { setSlots } = consultantStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user-instructor");
    if (response.status === 200) {
      const { user, instructor } = response.data;
      if (user.type === "instructor" && instructor.consultant_active === 1) {
        setUser(user);
        setConsultant(instructor.consultant);
        setSlots(instructor.consultant.slots);
      }

      else {
        showErrorToast("Unauthorized User");
        router.push("/authentication/login");
      }
      
    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};

export const useAuthStudent = async (router: ReturnType<typeof useRouter>) => {
  const { setUser, setStudent } = authStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user-student");
    if (response.status === 200) {
      const { user, student } = response.data;
      if (user.type === "student" && student) {
        setUser(user);
        setStudent(student);
      }

      else {
        showErrorToast("Unauthorized User");
        router.push("/authentication/login");
      }
      
    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};

export const useAuthAdmin = async (router: ReturnType<typeof useRouter>) => {
  const { setUser } = authStore.getState();

  try {
    const response = await axiosInstanceWeb.get("/user");
    if (response.status === 200) {
      const { user } = response.data;

      if (user.type === "admin") {
        setUser(user);
      }

      else {
        showErrorToast("Unauthorized User");
        router.push("/authentication/login");
      }
      
    } else {
      showErrorToast("Session Expired. Please Log in");
      router.push("/authentication/login");
    }
  } catch (error) {
    console.log(error);
    router.push("/authentication/login");
  }
};