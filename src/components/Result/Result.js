import React from "react";
import styles from './Result.module.scss';
import { PropTypes } from "prop-types";

const Result = ({userBmi}) => {
    
    return(
    <div className={styles.bmiWrapper}>
        <p className={styles.res}>Twoj BMI wynosi {userBmi}</p>
    </div> 
    )
}

Result.propTypes = {
    userBmi: PropTypes.string,
};

export default Result;