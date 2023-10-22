import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function yeongdeungpo_infra() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/total_16963303018100/sheet43?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="ydp_infra"
            width="1400"
            height="700"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default yeongdeungpo_infra;