import React from 'react';
import  {useEffect, useState} from 'react';


export function useLocalStorage(key, initialValue) {

  
    const isThereValueAtKey = (key) => {
        if (localStorage.getItem(key) != null) {
            return true
        }
        return false;
    }

    const [value, setValue] = useState(isThereValueAtKey(key) ? JSON.parse(localStorage.getItem(key)) : initialValue);

    useEffect(() => {
        if (!isThereValueAtKey(key)) {
            localStorage.setItem(key, JSON.stringify(initialValue));
        }

        // console.log(localStorage)
    }, []);

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value));
        // console.log(localStorage)
    }, [value]);

    return [value, setValue];

}


