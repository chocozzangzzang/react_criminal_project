import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function yeongdeungpo_alco() {
  return (
    <div className='charts'>
      <div className='tableau_container'>
      <iframe
        width="100%"
        height="100%"
            src="https://public.tableau.com/views/total_16963303018100/sheet46_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="ydp_alco"
            scrolling="no">
        </iframe>
      </div>
    </div>
  )
}

export default yeongdeungpo_alco;