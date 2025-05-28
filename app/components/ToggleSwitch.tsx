import React from "react";

type ToggleSwitchProps = {
    isOn: boolean;
    handleToggle: () => void;
    label?: string;
    id: string;
};

const ToggleSwitch = ({isOn, handleToggle, label, id}: ToggleSwitchProps) => {
    return (
        <div>
            <div className="toggle-container">
                {
                    label && <span className="toggle-label">{label}</span>
                }

                <div className="toggle-switch">
                    <input
                        checked={isOn}
                        onChange={handleToggle}
                        className="toggle-checkbox"
                        id={id}
                        type="checkbox"
                    />
                    <label className="toggle-label-switch" htmlFor={id} />
                </div>
            </div>
        </div>
    )
}

export default ToggleSwitch;

