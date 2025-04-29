import { useEffect, useState, useRef } from 'react'
import useValidation from "./useValidation";
const useInput = (initialValue ,validations)=>{
    const [value, setValue] = useState(initialValue);
    const [dirty, setDirty] = useState(false);

    const onChange = (e)=>{
        setValue(e.target.value)
    }

    const valid = useValidation(value, validations)

    const onBlur = (e)=>{
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        ...valid,
        dirty,
    }
}

export default useInput