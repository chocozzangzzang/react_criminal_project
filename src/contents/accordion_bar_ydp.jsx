import React from 'react';
import { useState } from "react";
import "../App.css";
import "./accordion_bar.css";

// 영등포, 강동구 con
function Accordion_bar_ydp(props) {
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
                        <h6><a className="no_dash text-muted" href={`/ydp_alco`}>주점수비교</a></h6>
                        <h6><a className="no_dash text-muted" href={`/ydp_infra`}>보안인프라비교</a></h6>
                        <h6><a className="no_dash text-muted" href={`/ydp_yudong`}>유동인구필터링</a></h6>
                        <h6><a className="no_dash text-muted" href={`/ydp_afterwork`}>유입인구</a></h6>
                        <h6><a className="no_dash text-muted" href={`/ydp_police`}>경찰관수비교</a></h6>
                    </div>
                )
            }
        </div>
    );

}

export default Accordion_bar_ydp;