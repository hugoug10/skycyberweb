import React, { useState, useEffect } from 'react';

const ContentProtection = () => {
    const [toast, setToast] = useState({ show: false, x: 0, y: 0, centered: false });

    const showToast = (e, isKeyboard = false) => {
        if (isKeyboard) {
            setToast({ show: true, x: 0, y: 0, centered: true });
        } else {
            setToast({ show: true, x: e.pageX, y: e.pageY, centered: false });
        }

        setTimeout(() => {
            setToast(prev => ({ ...prev, show: false }));
        }, 2000);
    };

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
            showToast(e);
        };

        const handleKeyDown = (e) => {
            const ctrlOrMeta = e.ctrlKey || e.metaKey;

            // F12
            if (e.keyCode === 123) {
                e.preventDefault();
                showToast(e, true);
                return;
            }

            if (ctrlOrMeta) {
                const blockedKeys = [
                    85, // U (View Source)
                    73, // I (Inspect)
                    74, // J (Console)
                    67, // C (Copy)
                    83, // S (Save)
                    80, // P (Print)
                    65, // A (Select All)
                    86, // V (Paste)
                    88  // X (Cut)
                ];

                if (blockedKeys.includes(e.keyCode)) {
                    e.preventDefault();
                    showToast(e, true);
                }
            }
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (!toast.show) return null;

    const style = toast.centered
        ? {
            position: 'fixed',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        }
        : {
            position: 'absolute',
            left: `${toast.x}px`,
            top: `${toast.y - 40}px`,
            transform: 'translateX(-50%)',
        };

    return (
        <div
            style={{
                ...style,
                zIndex: 10000,
                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                color: 'var(--color-neon-cyan)',
                border: '1px solid var(--color-neon-cyan)',
                padding: '10px 20px',
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                pointerEvents: 'none',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(0, 243, 255, 0.3)',
                transition: 'opacity 0.3s ease',
                opacity: toast.show ? 1 : 0,
            }}
        >
            Código privado
        </div>
    );
};

export default ContentProtection;
