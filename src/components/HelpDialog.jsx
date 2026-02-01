import React from 'react';

const HelpDialog = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-40 p-10" onClick={onClose}>
            <div className="bg-black border double-dashed-border p-10 max-w-md w-full shadow-[0_0_20px_rgba(34,197,94,0.3)]" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-mono text-terminal font-bold">Shortcuts</h2>
                </div>

                <div className="space-y-4 font-mono text-gray-300">
                    <div className="flex justify-between pb-2">
                        <span>Navigation</span>
                        <span className="text-terminal font-bold">j / k</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Side Navigation</span>
                        <span className="text-terminal font-bold">h / l</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Kill Site</span>
                        <span className="text-terminal font-bold">Ctrl + C</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Launch Game</span>
                        <span className="text-terminal font-bold">Shift + G</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Show Help</span>
                        <span className="text-terminal font-bold">?</span>
                    </div>
                </div>

                <div className="mt-8 text-center text-xs text-terminal">
                    Press <span className="bg-terminal text-black px-2 py-1 rounded-lg font-bold">ESC</span> to close
                </div>
            </div>
        </div>
    );
};

export default HelpDialog;
