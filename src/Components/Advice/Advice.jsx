import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styles from './style.module.css';
export default function Advice() {
    const [userAdvice, setUserAdvice]= useState();
   
    useEffect(()=>{
        getAdvice();
    },[]);
    async function getAdvice()
    {
        let {data} = await axios.get("https://api.adviceslip.com/advice");
        setUserAdvice(data)
        console.log(userAdvice);
    }
  return (
    <>
    {userAdvice? <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <div className='d-flex justify-content-center align-items-center vh-100 overflow-hidden'>
                <div className={`${styles.advice} rounded text-center py-5 px-2 position-relative fs-3`}>
                    <h6>ADVICE #{userAdvice.slip.id}</h6>
                    <p className= 'text-white'>
                        <i className="fa-solid fa-quote-left"></i>
                        {userAdvice.slip.advice}
                        <i className="fa-solid fa-quote-right"></i>
                    </p>
                    <div className='text-white d-flex align-items-center justify-content-around'>
                        <div className={styles.divider}></div>
                        <i className="fa-solid fa-quote-left"></i>
                        <div className={styles.divider}></div>
                    </div>
                    <div 
                        className={`${styles.dice} rounded-circle d-flex align-items-center justify-content-center position-absolute`}
                        onClick={getAdvice}>
                        <i className="fa-solid fa-dice-five"></i>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
    </>: 
    <>
        <div className={styles.spinner}>
            <div className={styles.loading}>
                <div className={styles.arc}></div>
                <div className={styles.arc}></div>
                <div className={styles.arc}></div>
            </div>
        </div>
    </>}
    </>
  )
}
