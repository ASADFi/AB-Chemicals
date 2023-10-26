import styles from "./circularProgressBar.module.css";

import React, { ReactNode } from 'react';

interface ContainerProps {
  tittle: string;
}

const CircularProgressBar : React.FC<ContainerProps> = ({ tittle }) => (
 <div className={styles.progressBar}>{tittle}</div>
);

export default CircularProgressBar;
