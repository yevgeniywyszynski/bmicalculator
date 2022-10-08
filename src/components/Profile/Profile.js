import React, { useState } from "react";
import styles from './Profile.module.scss';
import { PropTypes } from "prop-types";

const Profile = ({setSexProfile, setUserHeight, setUserWeight, setUserBmi}) => {
    const [active, setActive] = useState('')

    const handleClick = (event) => {
        setActive(event.target.id)
        if(event.target.id === '1'){
            setSexProfile('male')
            setUserHeight('')
            setUserWeight('')
            setUserBmi('')
        } else{
            setSexProfile('female')
            setUserWeight('')
            setUserHeight('')
            setUserBmi('')
        }
    }

    return(
    <div className={styles.maleWrapper}>

        <div onClick={(e) => handleClick(e)} className={active === "1" ? styles.sexActive : styles.sexNoActive}>
            <img id="1" className={styles.iconMan} alt="male" src="https://cdn-icons-png.flaticon.com/512/3048/3048127.png"></img>
        </div>

        <div onClick={(e) => handleClick(e)} className={active === "2" ? styles.sexActive : styles.sexNoActive}>
            <img id="2" className={styles.iconWoman} alt="female" src="https://cdn-icons-png.flaticon.com/512/3048/3048223.png"></img>
        </div>

    </div>
    )
}

Profile.propTypes = {
    setSexProfile: PropTypes.func,
    setUserHeight: PropTypes.func,
    setUserWeight: PropTypes.func,
    setUserBmi: PropTypes.func,
  };

export default Profile;