import React from "react";
import styles from '../UserData/UserData.module.scss';
import { PropTypes } from "prop-types";

const UserData = ({
    setUserWeight,
    userWeight, 
    userHeight,
    setUserHeight,
    checkBmi}) => {

    return(
    <div className={styles.userDataWrapper}>
        <div className={styles.weight}>
            <div className={styles.iconData}>
                <img className={styles.wieghtIcon} alt="icon" src="https://cdn-icons-png.flaticon.com/512/822/822133.png"/>
            </div>
            <input
                type="text"
                className={styles.inputUser}
                placeholder="kg"
                value={userWeight}
                onChange={(e) => setUserWeight(e.target.value)}
                maxLength={3}
            >
            </input>
        </div>
        <div className={styles.weight}>
            <div className={styles.iconData}>
                <img className={styles.wieghtIcon} alt="icon" src="https://cdn-icons-png.flaticon.com/512/7404/7404126.png"/>
            </div>
            <input 
                type="text"
                className={styles.inputUser}
                placeholder="cm"
                value={userHeight}
                onChange={(e) => setUserHeight(e.target.value)}
                maxLength={4}
            >
            </input>
        </div>
        <div className={styles.btnWrapper}>
            <button 
                type="button" 
                className={styles.btnResult}
                onClick={checkBmi}
                >
                Policz
            </button>
        </div>
    </div>
    )
}

UserData.propTypes = {
    setUserWeight: PropTypes.func,
    userWeight: PropTypes.string, 
    userHeight: PropTypes.string,
    setUserHeight: PropTypes.func,
    checkBmi: PropTypes.func
};

export default UserData;