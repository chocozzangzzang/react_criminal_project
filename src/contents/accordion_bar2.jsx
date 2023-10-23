import React from 'react';
import { useState } from "react";
import '../App.css';

// 위험도 지도부분
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
                        <h6><a className="no_dash text-mute" href={`/seoul_predict`}>서울위험도지도</a></h6>
                        <h6><a className="no_dash text-mute" href={`/ydp_predict`}>영등포위험도지도</a></h6>
                        <h6><a className="no_dash text-mute" href={`/gd_predict`}>강동위험도지도</a></h6>
                        <h6><a className="no_dash text-mute" href={`/gs_predict`}>강서위험도지도</a></h6>
                        <h6><a className="no_dash text-mute" href={`/gn_predict`}>강남위험도지도</a></h6>
                    </div>
                )
            }
        </div>
    );

}

export default Accordion_bar2;