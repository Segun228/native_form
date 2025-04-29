import { useEffect, useState, useRef } from 'react'

const useValidation = (value, validations)=> {
    const [isEmpty, setEmpty] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);


    useEffect(()=>{
        for (const validation in validations){
        switch(validation){
            case 'minLength':
                value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                break;
            case 'isEmpty':
                value ? setEmpty(false) : setEmpty(true);
                break;
            case 'maxLength':
                value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                break;
            case 'isEmail':
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                emailRegex.test(value) ? setEmailError(false) : setEmailError(true);
                break;
        }
    }
    }, [value])


    const [inputValid, setInputValid] = useState(false)
    const [formValid, setFormValid] = useState(false);

    useEffect(()=>{
        if(isEmpty ||
            minLengthError ||
            maxLengthError ||
            emailError ||
            isEmpty ||
            minLengthError ||
            maxLengthError ||
            isEmpty ||
            minLengthError ||
            maxLengthError){
                setInputValid(false)
            }
        else{
            setInputValid(false)
        }
    }, 
    [isEmpty, 
    minLengthError, 
    maxLengthError, 
    emailError,
    isEmpty,
    minLengthError,
    maxLengthError,
    isEmpty,
    minLengthError,
    maxLengthError])


    return {
    isEmpty,
    minLengthError,
    maxLengthError,
    emailError,
    formValid,
    inputValid,
    }
}

export default useValidation