import React from 'react';
import { useState } from "react";
import "../App.css";
import "./accordion_bar.css";


function Accordion_bar_gd(props) {
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
                        <h6><a className="no_dash" href={`/gd_alco`}>주점수비교</a></h6>
                        <h6><a className="no_dash" href={`/gd_infra`}>보안인프라비교</a></h6>
                        <h6><a className="no_dash" href={`/gd_yudong`}>유동인구필터링</a></h6>
                        <h6><a className="no_dash" href={`/gd_afterwork`}>유입인구</a></h6>
                        <h6><a className="no_dash" href={`/gd_police`}>경찰관수비교</a></h6>
                    </div>
                )
            }
        </div>
    );

}

export default Accordion_bar_gd;