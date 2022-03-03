// react
import { useRef, useEffect } from 'react';

export const useWhyDidYouUpdate = (name: string, props: Record<string, unknown>): void => {
    // store props in ref
    const prevProps = useRef<Record<string, unknown>>({});

    useEffect(() => {
        if (prevProps.current) {
            // Get all keys from previous and current props
            const allKeys = Object.keys({ ...prevProps.current, ...props });
            // Use this object to keep track of changed props
            const changes: Record<string, unknown> = {};
            // Iterate through keys
            allKeys.forEach((key) => {
                // If previous is different from current
                if (prevProps.current[key] !== props[key]) {
                    // Add to changes
                    changes[key] = {
                        from: prevProps.current[key],
                        to: props[key],
                    };
                }
            });
            // If changes not empty then output to console
            if (Object.keys(changes).length) {
                console.warn('[why-did-you-update]', name, changes);
            }
        }
        // Finally update prevProps with current props for next hook call
        prevProps.current = props;
    });
};
