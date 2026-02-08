import React, { useEffect } from 'react';

const KilledOverlay = () => {
    useEffect(() => {
        sessionStorage.clear();
    })
    return (
        <div className="fixed inset-0 bg-black text-terminal font-mono flex flex-col items-center justify-center z-50 p-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">SIGKILL SIGNAL RECEIVED</h1>
            <p className="text-xl md:text-2xl mb-8">Host process has been stopped forcefully.</p>
            <p className="text-terminal text-sm">Please reload the page to restart the website.</p>
        </div>
    );
};

export default KilledOverlay;
