import React from "react";
import styles from '../Home/Home.module.scss';
import CalculatorBmi from "../CalculatorBmi/CalculatorBmi";

const Home = () => {
    return(
        <div className={styles.homeWrapper}>
            <CalculatorBmi/>
        </div>
    )
}

export default Home;