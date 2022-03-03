// react
import { useRef, useEffect, DependencyList } from 'react';

export const useMountEffect = (callback: () => void, deps?: DependencyList): void => {
    // ref
    const isMounterRef = useRef(false);

    // effect
    useEffect(() => {
        // check if mounted
        if (!isMounterRef.current) {
            callback();
            isMounterRef.current = true;
        }
    }, [callback, deps]);
};
