import React from "react";
import styles from "./Inputs.module.css";

const Inputs = () => (
    <>
        <input className={styles.input1} placeholder="Введите текст..." />
        <input className={styles.input2} type="password" placeholder="Пароль..." />
        <input className={styles.input3} type="email" placeholder="Email..." />
    </>
);

export default Inputs;
