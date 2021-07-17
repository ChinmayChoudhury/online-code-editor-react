import {useEffect, useState} from 'react'


const PREFIXKEY = 'online-code-editor-chinmay-'
export default function useLocalCode(key, initValue) {
    const finalKey = PREFIXKEY + key

    const [val, setVal] = useState(()=>{
        const jsonCode = localStorage.getItem(finalKey)

        if (jsonCode!= null) return JSON.parse(jsonCode)
        if (typeof initValue === 'function'){
            return initValue()
        }else{
            return initValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(finalKey, JSON.stringify(val))
    }, [finalKey, val])
    return (
       [val, setVal]
    )
}
