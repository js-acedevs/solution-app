// react
import { useState, useLayoutEffect, useCallback } from 'react';

// inteface
import { WindowSize } from './useWindowSize.types';

export const useWindowSize = (): WindowSize => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    // callback handlers
    const handleResize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    // effect
    useLayoutEffect(() => {
        // Bind listener
        window.addEventListener('resize', handleResize);
        // initial call
        handleResize();
        // remove listener
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return windowSize;
};
