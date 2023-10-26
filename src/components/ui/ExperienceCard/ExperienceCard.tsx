import styles from "./experienceCard.module.css";
import React, { ReactNode } from 'react';

interface ContainerProps {
    count: string;
    label: string
}

const ExperienceCard : React.FC<ContainerProps> = ({ count, label }) => {
    return (
        <div className="about-card border-2 border-slate-400 rounded-md p-5">
            <div className="flex text-teal-600">
                <p className="text-5xl font-extrabold mx-4">
                    {count}
                </p>
                <p className="text-4xl font-semibold -mx-3">
                    +
                </p>
            </div>
            <div className="flex mx-4">
                <p className={`${styles.label} text-sm font-light uppercase pl-11`}>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard
