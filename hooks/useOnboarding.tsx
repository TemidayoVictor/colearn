'use client';
import React, {useState, useRef} from "react";
import { showErrorToast, showSuccessToast } from "@/utils/toastTypes";
import { authStore } from "@/zustand/authStore";
import { instructorStore } from "@/zustand/instructorStore";
import { 
    verify_otp, 
    resend_otp, 
    select_account, 
    submit_details, 
    add_preferences, 
    submit_professional_details,
    submit_experiences, 
    edit_details,
    edit_name,
    edit_professional_details,
    add_experiences,
    edit_experience,
    delete_experience,
} from "@/services/onboarding";
import { utilitiesStore } from "@/zustand/utilitiesStore";
import { courseStore } from "@/zustand/courseStore";
import { useRouter } from 'next/navigation';
import { useLogout } from "./useLogout";

export const useOnboarding = () => {
    const router = useRouter();
    const user = authStore((state) => state.user);
    const userId = user?.id;
    const userType = user?.type;

    const [selected, setSelected] = useState<string | null>(null);
    const [buttonLoader, setButtonLoader] = useState<boolean>(false);
    const [newUpdate, setNewUpdate] = useState<string>('reset');
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>("");
    const [dialCode, setDialCode] = useState<number | null>();
    const countries = utilitiesStore((state) => state.countries);
    const languages = utilitiesStore((state) => state.languages);
    const categories = utilitiesStore((state) => state.categories);

    const currentExperience = instructorStore((state) => state.experience);
    const currentExperienceId = currentExperience?.id;

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const [formData, setFormData] = useState<{
        profilePhoto: File | null;
        gender: string;
        country: string;
        phone: string;
        country_phone_code: number;
        country_iso: string;
        country_iso3: string;
      }>({
        profilePhoto: null,
        gender: '',
        country: '',
        phone: '',
        country_phone_code: 0,
        country_iso: '',
        country_iso3: '',
    });

    const [formData2, setFormData2] = useState<{
        title: string;
        headline: string;
        category: string;
        bio: string;
        linkedin: string | undefined;
        youtube: string | undefined;
        twitter: string | undefined;
        website: string | undefined;
      }>({
        title: '',
        headline: '',
        category: '',
        bio: '',
        linkedin: '',
        youtube: '',
        twitter: '',
        website: '',
    });

    const [experiences, setExperiences] = useState([
        {
          title: '',
          organization: '',
          description: '',
          start_date: '',
          end_date: '',
          currently_working: false,
        },
    ]);

    const [experience, setExperience] = useState<{
        id: number | null,
        title: string;
        organization: string;
        description: string;
        start_date: string;
        end_date: string;
        currently_working: boolean;
      }>({
        id: 0,
        title: '',
        organization: '',
        description: '',
        start_date: '',
        end_date: '',
        currently_working: false,
    });

    const [errors, setErrors] = useState({
        profilePhoto: false,
        gender: false,
        languages: false,
        country: false,
        phone:false
    });

    const [errors2, setErrors2] = useState({
        title: false,
        headline: false,
        category: false,
        bio: false,
    });

    const [expErrors, setExpErrors] = useState(
        experiences.map(() => ({
          title: false,
          organization: false,
          description: false,
          start_date: false,
          end_date: false,
        }))
    );

    const [experienceErrors, setExperienceErrors] = useState({
        title: false,
        organization: false,
        description: false,
        start_date: false,
        end_date: false,
    });

    const [editNameData, setEditNameData] = useState<{
        first_name: string;
        last_name: string;
      }>({
        first_name: '',
        last_name: '',
    });

    const [editNameError, setEditNameError] = useState({
        first_name: false,
        last_name: false,
    });

    const initialSelected: any = [];
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>(initialSelected);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData2((prev) => ({ ...prev, [name]: value }));
        setErrors2((prev) => ({ ...prev, [name]: false }));
    };

    const handleExperienceChange = (index: number, field: string, value: any) => {
        setExperiences((prev) =>
          prev.map((exp, idx) =>
            idx === index ? { ...exp, [field]: value } : exp
          )
        );
    };

    const handleExpChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setExperience((prev) => ({ ...prev, [name]: value }));
        setExperienceErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleEditName = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditNameData((prev) => ({ ...prev, [name]: value }));
        setEditNameError((prev) => ({ ...prev, [name]: false }));
    };

    const addExperience = () => {
        setExperiences((prev) => [
            ...prev,
            {
              title: '',
              organization: '',
              description: '',
              start_date: '',
              end_date: '',
              currently_working: false,
            },
        ])
    }

    const removeExperience = (index: number) => {
        setExperiences((prev) => prev.filter((_, idx) => idx !== index));
        setExpErrors((prev) => prev.filter((_, idx) => idx !== index)); 
    };

    const handleSelect = (id: string) => {
        setSelected(prev => (prev === id ? null : id));
    };

    const inputLength = 6;
    const [otp, setOtp] = useState<string[]>(Array(inputLength).fill(''));
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleChange = (value: string, index: number) => {
        if (!/^\d*$/.test(value)) return; // Allow only digits
    
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    
        if (value && index < inputLength - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputsRef.current[index - 1]?.focus();
        }
    };

    function maskEmail(email: string): string {
        const [username, domain] = email.split("@");
        if (username.length <= 3) {
          return `${username[0]}***@${domain}`;
        }
      
        const visiblePart = (username ?? "").slice(0, 4);
        const maskedPart = "*".repeat(username.length - 4);
        return `${visiblePart}${maskedPart}@${domain ?? "domain"}`;
    }

    const handleSubjectChange = (selected: string[]) => {
        console.log('Selected Subjects:', selected);
    };

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click(); // triggers hidden input
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
          const imageUrl = URL.createObjectURL(file);
          setPreview(imageUrl);

            setFormData((prev) => ({
                ...prev,
                profilePhoto: file
            }));
        }
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.target.value;
        setSelectedCountryCode(name);
      
        const selectedCountry = countries?.find((c) => c.name === name);
        if (selectedCountry) {
          setDialCode(selectedCountry.phonecode);
          setFormData((prev) => ({ ...prev, 
            country: selectedCountry.name,
            country_phone_code: selectedCountry.phonecode,
            country_iso: selectedCountry.iso,
            country_iso3: selectedCountry.iso3,    
        }));
          setErrors((prev) => ({ ...prev, country: false }));
        } else {
          setDialCode(0); // fallback in case no match is found
        }
    };

    const validateExperiences = () => {
        const newErrors = experiences.map((exp) => ({
          title: exp.title.trim() === '',
          organization: exp.organization.trim() === '',
          description: exp.description.trim() === '',
          start_date: exp.start_date.trim() === '',
          end_date: !exp.currently_working && exp.end_date.trim() === '',
        }));
      
        setExpErrors(newErrors);
      
        // Return true if all experiences are valid
        return newErrors.every((errorObj) =>
          Object.values(errorObj).every((fieldError) => fieldError === false)
        );
      };

    const submitOtp = async () => {
        const isOtpComplete = otp.every(digit => digit.trim() !== '');

        if (!isOtpComplete) {
            showErrorToast('Please enter the full 6-digit OTP');
            return;
        }

        const otpValue = Number(otp.join(''));

        // check if otp is correct
        setButtonLoader(true);
        try {
            const response = await verify_otp(otpValue, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }

    }

    const resendOtp = async () => {
        setButtonLoader(true);
        try {
            const response = await resend_otp(userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const submitUser = async() => {
        if (selected == null) {
            showErrorToast('Please select an account type');
            return;
        }

        setButtonLoader(true);
        try {
            const response = await select_account(userId, selected);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
        
    }

    const submitDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            profilePhoto: formData.profilePhoto === null,
            gender: formData.gender.trim() === '',
            languages: selectedItems.length === 0,
            country: formData.country.trim() === '',
            phone:  formData.phone.trim() === '',
        };
      
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        else {
            // submit
            setButtonLoader(true);
            try {
                const response = await submit_details(formData, selectedItems, userId);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    setNewUpdate('set');
                } 

                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
            }
        }
    }

    const editDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            profilePhoto: false,
            gender: formData.gender.trim() === '',
            languages: selectedItems.length === 0,
            country: formData.country.trim() === '',
            phone:  formData.phone.trim() === '',
        };
      
        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        else {
            // submit
            setButtonLoader(true);
            try {
                const response = await edit_details(formData, selectedItems, userId);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    courseStore.getState().setNewUpdate('set');
                } 

                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
            }
        }
    }

    const editName = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            first_name: editNameData.first_name.trim() === '',
            last_name: editNameData.last_name.trim() === '',
        };
      
        setEditNameError(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all fields');
            return;
        }

        else {
            // submit
            setButtonLoader(true);
            try {
                const response = await edit_name(editNameData, userId);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    courseStore.getState().setNewUpdate('set');
                } 

                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
            }
        }
    }

    const addPreferences = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setButtonLoader(true);
        try {
            const response = await add_preferences(selectedSubjects, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                router.push(`/${userType}s/dashboard`);
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const editPreferences = async (e: React.FormEvent) => {
        e.preventDefault();

        setButtonLoader(true);
        try {
            const response = await add_preferences(selectedSubjects, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const submitProfessionalDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            title: formData2.title === '',
            headline: formData2.headline.trim() === '',
            category: formData2.category === '',
            bio: formData2.bio === '',
        };
      
        setErrors2(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        else {
            // submit
            setButtonLoader(true);
            try {
                const response = await submit_professional_details(formData2, userId);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    setNewUpdate('set');
                } 

                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
            }
        }
    }

    const editProfessionalDetails = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors = {
            title: formData2.title === '',
            headline: formData2.headline.trim() === '',
            category: formData2.category === '',
            bio: formData2.bio === '',
        };
      
        setErrors2(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        else {
            // submit
            setButtonLoader(true);
            try {
                const response = await edit_professional_details(formData2, userId);
                if (response.success) {
                    setButtonLoader(false)
                    showSuccessToast(response.message)
                    courseStore.getState().setNewUpdate('set');
                } 

                else {
                    setButtonLoader(false)
                    showErrorToast(response.message)
                    console.log(response)
                }
            }

            catch (err: any) {
                console.log(err)
                setButtonLoader(false)
                showErrorToast('Unexpected error occurred');
            }
        }
    }

    const submitExperiences = async () => {
        if (!validateExperiences()) {
                showErrorToast('Please fill in all fields');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await submit_experiences(experiences, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const addExperiences = async () => {
        if (!validateExperiences()) {
                showErrorToast('Please fill in all fields');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await add_experiences(experiences, userId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const editExperience = async () => {
        const newErrors = {
            title: experience.title.trim() === '',
            organization: experience.organization.trim() === '',
            description: experience.description.trim() === '',
            start_date: experience.start_date.trim() === '',
            end_date: !experience.currently_working && experience.end_date.trim() === '',
        };

        setExperienceErrors(newErrors);

        const hasError = Object.values(newErrors).some(Boolean);

        if (hasError) {
            showErrorToast('Please fill in all required fields');
            return;
        }

        // submit
        setButtonLoader(true);
        try {
            const response = await edit_experience(experience);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const deleteExperience = async () => {
        // submit
        setButtonLoader(true);
        try {
            const response = await delete_experience(currentExperienceId);
            if (response.success) {
                setButtonLoader(false)
                showSuccessToast(response.message)
                courseStore.getState().setNewUpdate('set');
            } 

            else {
                setButtonLoader(false)
                showErrorToast(response.message)
                console.log(response)
            }
        }

        catch (err: any) {
            console.log(err)
            setButtonLoader(false)
            showErrorToast('Unexpected error occurred');
        }
    }

    const {logoutHook} = useLogout();

    const handleLogout = () => {
        logoutHook(setLoading)
    }
      
    return {
        handleSelect,
        otp,
        handleChange,
        handleInputChange,
        formData,
        setFormData,
        formData2,
        setFormData2,
        errors,
        errors2,
        handleKeyDown,
        maskEmail,
        inputsRef,
        submitOtp,
        selected,
        buttonLoader,
        newUpdate,
        setNewUpdate,
        resendOtp,
        submitUser,
        handleSubjectChange,
        handleClick,
        handleFileChange,
        preview,
        fileInputRef,
        countries,
        dialCode,
        handleCountryChange,
        languages,
        submitDetails,
        selectedItems,
        setSelectedItems,
        addPreferences,
        selectedSubjects, 
        setSelectedSubjects,
        categories,
        handleInputChange2,
        submitProfessionalDetails,
        experiences,
        handleExperienceChange,
        addExperience,
        submitExperiences,
        removeExperience,
        loading, 
        setLoading,
        handleLogout,
        editDetails,
        editName,
        editNameData, 
        setEditNameData,
        editNameError,
        handleEditName,
        editProfessionalDetails,
        addExperiences,
        editPreferences,
        editExperience,
        setExperience,
        experience,
        handleExpChange,
        deleteExperience
    }
}