import { useState, useRef, useEffect } from 'react';

const FAQAnswer = ({ isExpanded, children }) => {
    const ref = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    
    useEffect(() => {
        if (ref.current) {
            setContentHeight(1.5 * ref.current.clientHeight);
        }
    }, [children]);
    
    return (
        <div className="Answer" style={{ height: isExpanded ? contentHeight : 0 }}>
            <div ref={ref}>
                {children}
            </div>
        </div>
        );
    };

export default FAQAnswer