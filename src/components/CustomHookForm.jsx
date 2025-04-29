import "./../App.css"
import { useEffect, useState, useRef } from 'react'
import useInput from "./../custom hooks/useInput.js"

const CustomHookForm = () => {
    const emailCustom = useInput('', {isEmpty: true, minLength: 8, maxLength: 38, isEmail: true})
    const passwordCustom = useInput('', {isEmpty: true, minLength: 8, maxLength: 18})
    const confirmCustom = useInput('', {isEmpty: true, minLength: 8, maxLength: 18})


    return ( 
        <div className='form-wrapper'>
            <form>
                <h1>Custom hook form</h1>

                {(emailCustom.dirty && emailCustom.isEmpty) && <div style={{color: 'red'}}>Email can`t be empty</div>}
                {(emailCustom.dirty && (emailCustom.minLengthError || emailCustom.maxLengthError)) && <div style={{color: 'red'}}>Invalid email length</div>}
                {(emailCustom.dirty && emailCustom.emailError) && <div style={{color: 'red'}}>Invalid email format</div>}
                <input onChange={e => emailCustom.onChange(e)} value={emailCustom.value} onBlur={e => emailCustom.onBlur(e)} name='email' type="text" placeholder='enter your email...'/>
                
                {(passwordCustom.dirty && passwordCustom.isEmpty) && <div style={{color: 'red'}}>Password can`t be empty</div>}
                {(passwordCustom.dirty && (passwordCustom.minLengthError || passwordCustom.maxLengthError)) && <div style={{color: 'red'}}>Invalid password length</div>}
                
                <input onChange={e => passwordCustom.onChange(e)} value={passwordCustom.value} name='password' onBlur={e => passwordCustom.onBlur(e)} type="password" placeholder='enter your password...'/>
                
                {(confirmCustom.dirty && confirmCustom.isEmpty) && <div style={{color: 'red'}}>Confirm your password!</div>}
                {(confirmCustom.dirty && (confirmCustom.minLengthError || confirmCustom.maxLengthError)) && <div style={{color: 'red'}}>Invalid confirmation password</div>}
                
                <input onChange={e => confirmCustom.onChange(e)} value={confirmCustom.value} name='confirmation' onBlur={e => confirmCustom.onBlur(e)} type="password" placeholder='confirm your password...'/>
                <button disabled={emailCustom.formValid && passwordCustom.formValid && confirmCustom.formValid} type='submit'>Registration</button>
            </form>
        </div>
    );
}
export default CustomHookForm;