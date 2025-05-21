import { useState, useRef, useEffect } from 'react';

const Test = ({ isExpanded, children }) => {
    const ref = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    
    useEffect(() => {
        if (ref.current) {
            setContentHeight(ref.current.clientHeight);
        }
    }, [children]);
    
    return (
        <div className="collapse" style={{ height: isExpanded ? contentHeight : 0 }}>
            <div ref={ref}>
                {children}
            </div>
        </div>
        );
    };

export default Test