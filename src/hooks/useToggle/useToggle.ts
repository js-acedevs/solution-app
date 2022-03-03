// react
import { useCallback, useState } from 'react';

export const useToggle = (initialState = false): [boolean, () => void] => {
    // local state
    const [isToggled, setIsToggled] = useState<boolean>(() => initialState);

    // handlers
    const handleToggle = useCallback((): void => setIsToggled((prev) => !prev), []);

    return [isToggled, handleToggle];
};
