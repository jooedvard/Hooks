import React from 'react';
import { useState, useRef, useEffect } from 'react';

export function useStateWithHistory(initialState) {
  
    const [history, setHistory] = useState([initialState]);
    const [active, setActive] = useState(0);
    const [currentValue, setValue] = useState(history[active]);

    useEffect(() => {
        setValue(history[active]);
    }, [active])

    const setValueAndHistory = (value) => {
        let newHistory = [...history, value];
        setValue(value);
        setHistory(newHistory);
        setActive(active => active + 1);
    }

    const goBack = () => {
        if (active > 0) {
            setActive(active => active - 1);
        }

    }

    const goForward = () => {
        if (active != history.length-1) {
            setActive(active => active + 1);
        }
    }

    return [currentValue, setValueAndHistory, goBack, goForward, history]
}


