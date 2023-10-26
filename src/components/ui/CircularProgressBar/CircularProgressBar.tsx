import styles from "./circularProgressBar.module.css";

import React, { ReactNode } from 'react';

interface ContainerProps {
  title: string;
  rating: number
}

const CircularProgressBar : React.FC<ContainerProps> = ({ title, rating }) => {
    const customStyles :any = {
        '--progress': `${rating*3.6}deg`,
    };
    return (
        <div className="text-center gap-4">
            <div
                className={`${styles.progressBar} flex text-base lg:text-xl`}
                data-progress={`${rating}%`}
                style={customStyles}
            />
            <p className="px-4 pt-4 text-xl">{title}</p>
        </div>

    )
};

export default CircularProgressBar;
