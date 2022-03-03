// web vitals
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler): Promise<void> | null => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        return import('web-vitals')
            .then(
                ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => (
                    getCLS(onPerfEntry),
                    getFID(onPerfEntry),
                    getFCP(onPerfEntry),
                    getLCP(onPerfEntry),
                    getTTFB(onPerfEntry)
                )
            )
            .catch((error) => console.error(error));
    }
    return null;
};

export default reportWebVitals;
