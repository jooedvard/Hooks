import React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';

export function useMap(initialValue) {
         const [map, SetValues] = useState(new Map(initialValue));

    const set = useCallback(
        (key, value) => {
            map.set(key, value);
            SetValues(map);
        }, []
    );

    const del = useCallback(
        (key) => {
            map.delete(key);
            SetValues(map);
        },[]
    );

    const clear = useCallback(
        (key) => {
            map.clear();
            SetValues(map);
        },[]
    );


    return {
        map,
        set,
        delete: del, 
        clear
    }
}

