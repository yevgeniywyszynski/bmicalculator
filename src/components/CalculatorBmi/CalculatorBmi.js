import React, { useState } from "react";
import Profile from "../Profile/Profile";
import styles from './CalculatorBmi.module.scss';
import Result from "../Result/Result";
import UserData from "../UserData/UserData";

const CalculatorBmi = () => {

    const [userWeight, setUserWeight] = useState('')
    const [userHeight, setUserHeight] = useState('')
    const [userBmi, setUserBmi] = useState(0)
    const [sexProfile, setSexProfile] = useState('')

    const checkBmi = () => {
        if(isNaN(userWeight) || isNaN(userHeight) || userWeight.length === 0 || userHeight.length === 0){
            alert('wpisujemy poprawnie dane, wage w kg i wzrost cm')
            setUserHeight('')
            setUserWeight('')
            setUserBmi('')
        }

        let BMI = Math.floor(Number(userWeight)/(Number(userHeight)*Number(userHeight)))

        if(sexProfile == 'male'){
            if(BMI < 18.5){
                setUserBmi(`${BMI} Niedowaga`)
            } else if(BMI >= 18.5 && BMI <=24.9){ // BMI 24.95
                setUserBmi(`${BMI} Norma`)
            } else if (BMI >= 25 && BMI <=29.9){
                setUserBmi(`${BMI} Nadwaga`)
            } else if(BMI > 30){
                setUserBmi(`${BMI} Otyłość`)
            }
        }
        if(sexProfile == 'female'){
            if(BMI < 18.6){
                setUserBmi(`${BMI} Niedowaga`)
            } else if(BMI >= 18.6 && BMI <=25){ // BMI 24.95
                setUserBmi(`${BMI} Norma`)
            } else if (BMI >= 26 && BMI <=30.9){
                setUserBmi(`${BMI} Nadwaga`)
            } else if(BMI>31){
                setUserBmi(`${BMI} Otyłość`)
            }
        }
    }

    return(
        <div className={styles.pageWrapper}>
            <div className={styles.calculatorWrapper}>
                <div className={styles.calculator}>
                    <p className={styles.title}>Policz swój BMI</p>
                </div>
                <Profile 
                    setUserBmi={setUserBmi}
                    setUserHeight={setUserHeight}
                    setUserWeight={setUserWeight}
                    setSexProfile={setSexProfile}
                />
                <UserData 
                    checkBmi={checkBmi}
                    userHeight={userHeight}
                    setUserHeight={setUserHeight}
                    userWeight={userWeight}
                    setUserWeight={setUserWeight}
                />
                {userBmi ? <Result checkBmi={checkBmi} userBmi={userBmi} /> : null}
            </div>
        </div>
    )
}

export default CalculatorBmi