import React, { createContext, useState, useEffect } from 'react';

export const DeviceTypeContext = createContext();

export const getDeviceType = () => {
    const width = window.innerWidth;

    return {
        isMobile: width <= 668,
        isTablet: width > 668 && width <= 912,
        isMiniDesktop: width > 912 && width <= 1280,
        isDesktop: width > 1280
    };
};

export const DeviceTypeProvider = ({ children }) => {
    const [deviceType, setDeviceType] = useState(getDeviceType());

    const handleResize = () => setDeviceType(getDeviceType());

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <DeviceTypeContext.Provider value={deviceType}>
            {children}
        </DeviceTypeContext.Provider>
    );
};
