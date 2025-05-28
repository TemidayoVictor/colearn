'use client';
import React, {useState} from "react";
import ToggleSwitch from "../ToggleSwitch";

const NotificationSettings = () => {
    const [toggles, setToggles] = useState<{[key: string]: boolean}>({
        general: false,
        enrollment: false,
        all: false,
        newsletter: false,
    });

    const handleToggle = (key: string) => {
        setToggles((prev) => ({
          ...prev,
          [key]: !prev[key],
        }));
    };
    return (
        <div>
            <div className="security-settings-cont">
                <h2 className="title-2">Notification Settings</h2>
                <p className="color-grey-text text-[.8rem]">Have control over your notifications</p>

                <div className="security-settings-body two">
                    <div className="notification-detail">
                        <div className="label">
                            <label htmlFor="">General Updates</label>
                        </div>
                        <div className="toggle">
                            <ToggleSwitch
                                isOn={toggles.general}
                                handleToggle={() => handleToggle('general')}
                                id="general-toggle"
                                
                            />
                        </div>
                    </div>

                    <div className="notification-detail">
                        <div className="label">                        
                            <label htmlFor="">Course enrollment Notification (In App)</label>
                        </div>
                        <ToggleSwitch
                            isOn={toggles.enrollment}
                            handleToggle={() => handleToggle('enrollment')}
                            id="enrollment-toggle"
                        />
                    </div>

                    <div className="notification-detail">
                        <div className="label">
                            <label htmlFor="">All Notifications</label>
                        </div>
                        <ToggleSwitch
                            isOn={toggles.all}
                            handleToggle={() => handleToggle('all')}
                            id="all-toggle"
                        />
                    </div>

                    <div className="notification-detail">
                        <div className="label">
                            <label htmlFor="">Newsletter</label>
                        </div>
                        <ToggleSwitch
                            isOn={toggles.newsletter}
                            handleToggle={() => handleToggle('newsletter')}
                            id="newsletter-toggle"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationSettings;