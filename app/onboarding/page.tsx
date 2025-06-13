'use client';
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import OnboardingBody from "../components/OnboardingBody";
 
const Onboarding = () => {
    return (
        <div>
            <OnboardingBody />
        </div>
    )
}

export default Onboarding