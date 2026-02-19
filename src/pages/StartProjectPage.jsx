import React, { useEffect } from 'react';
import StartProject from '../components/StartProject';

const StartProjectPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20">
            <StartProject />
        </div>
    );
};

export default StartProjectPage;
