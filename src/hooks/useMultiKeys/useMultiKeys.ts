// react
import { useState, useLayoutEffect, useCallback } from 'react';

// intefaces
import { MultiKeysHookReturns } from './useMultiKeys.types';

export const useMultiKeys = (keys: string[]): MultiKeysHookReturns => {
    // local state
    const [keysPressed, setKeyPressed] = useState<Set<string>>(() => new Set([]));

    // callback handlers
    const handleKeyUp = useCallback(({ key }: KeyboardEvent) => {
        setKeyPressed((prev) => {
            const update = new Set(prev);
            update.delete(key);
            return update;
        });
    }, []);

    const handleKeyDown = useCallback(({ key }: KeyboardEvent) => {
        setKeyPressed((prev) => {
            const update = new Set(prev);
            update.add(key);
            return update;
        });
    }, []);

    // helpers
    const calculateMatch = useCallback(() => {
        const required = new Set(keys);
        keysPressed.forEach((k) => required.delete(k));
        return required.size === 0;
    }, [keys, keysPressed]);

    // effect
    useLayoutEffect(() => {
        // bind listeners
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            // remove on unmount
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp, handleKeyDown]);

    return {
        keysPressed,
        matches: calculateMatch(),
    };
};
