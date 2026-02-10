import React, { useEffect } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <Services />
        </div>
    );
};

export default ServicesPage;
