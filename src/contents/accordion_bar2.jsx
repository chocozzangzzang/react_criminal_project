import React from 'react';
import { useState } from "react";


function Accordion_bar2(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggling = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`accordion ${isOpen ? 'open' : ''}`}>
            <div className='accordion-header' onClick={toggling}>
                {props.title}
            </div>
            {
                isOpen && (
                    <div className='content_center_align'>
                        <h6>서울위험도지도</h6>
                    </div>
                )
            }
        </div>
    );

}

export default Accordion_bar2;