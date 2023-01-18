import React from 'react';
import {useEffect, useState, useRef} from 'react';

export function useInterval(callback, delay) {

  const fn = useRef(callback);

  useEffect(() => {
    fn.current = callback;
  }, [callback]);
  
  useEffect(() => {
     
     const startInterval = setInterval(() => {fn.current()}, delay);
     if(delay === null || delay === undefined) return clearInterval(startInterval);
     return () => clearInterval(startInterval);
  }, [delay]);
  
}

