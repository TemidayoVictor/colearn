'use client';
import React, { useEffect, useRef } from "react";

interface CircularProgressBarProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    backgroundColor?: string;
  }

const CircularProgressBar = ({percentage, size = 110, strokeWidth = 15, color = "#00B8FF", backgroundColor = "#eee"}:CircularProgressBarProps ) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const circleRef = useRef<SVGCircleElement | null>(null);

    useEffect(() => {
        const offset = circumference - (percentage / 100) * circumference;
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset = offset.toString();
        }
    }, [percentage, circumference]);
    
    return (
        <div style={{ position: "relative", width: size, height: size }}>
            <svg width={size} height={size}>
                
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={backgroundColor}
                    strokeWidth={strokeWidth}
                />
                
                <circle
                    ref={circleRef}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    // strokeLinecap="round" --- to make the stroke end rounded
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    style={{
                        transition: "stroke-dashoffset 1.5s ease",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
            </svg>

            <div
                style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "1.2rem",
                fontWeight: "bold",
                }}
            >
                {percentage}%
            </div>
        </div>
    )
}

export default CircularProgressBar;