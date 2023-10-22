import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangdong_yudong() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/3_16970162261640/4_1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="gd_yudong"
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default gangdong_yudong;