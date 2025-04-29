import "./../App.css"
import { useEffect, useState, useRef } from 'react'

const SimpleForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [confirmDirty, setConfirmDirty] = useState(false);
    const [emailError, setEmailError] = useState("email can`t be empty...");
    const [passwordError, setPasswordError] = useState("password can`t be empty...");
    const [confirmError, setConfirmError] = useState("password confirmation can`t be empty...");
    const [formValid, setFormValid] = useState(false);

    useEffect(()=>{
        if(emailError || passwordError || confirmError){
    
        }
        else{
            setFormValid(true);
        }
    }, [emailError, passwordError, confirmError])
    
    const emailHandler = (e)=>{
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())){
            setEmailError("Invalid email");
        }
        else{
            setEmailError("");
        }
    }
    
    const passwordHandler = (e)=>{
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length >18){
            setPasswordError("Invalid password length");
        }
        else{
            setPasswordError("");
        }
    }
    
    const confirmHandler = (e)=>{
        setConfirm(e.target.value)
        if(e.target.value !== password){
            setConfirmError("Passwords are different");
        }
        else{
            setConfirmError("");
        }
    }

    const blurHandler = (e)=>{
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            case 'confirmation':
                setConfirmDirty(true);
                break;
        }
    }
    const inputRef = useRef(null);
        useEffect(() => {
            inputRef.current.focus();
        }, []);

    
    return ( 
        <div className='form-wrapper'>
            <form>
                <h1>Standart form</h1>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <input ref={inputRef} onChange={(e)=>{emailHandler(e)}} value={email} onBlur={(e)=>blurHandler(e)} name='email' type="text" placeholder='enter your email...'/>
                {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                <input onChange={(e)=>{passwordHandler(e)}} value={password} name='password' onBlur={(e)=>blurHandler(e)} type="password" placeholder='enter your password...'/>
                {(confirmDirty && confirmError) && <div style={{color: 'red'}}>{confirmError}</div>}
                <input onChange={(e)=>{confirmHandler(e)}} value={confirm} name='confirmation' onBlur={(e)=>blurHandler(e)} type="password" placeholder='confirm your password...'/>
                <button disabled={!formValid} type='submit'>Registration</button>
            </form>
        </div>
    );
}
export default SimpleForm;