import React from 'react';

export function useWindowSize() {
  const [size, setsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    setsize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    let listener = window.onresize = () => {
      setsize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    return () => window.removeEventListener("resize", listener);
  }, []);

  return size;

}
