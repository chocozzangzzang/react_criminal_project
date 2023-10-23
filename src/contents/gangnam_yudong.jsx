import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangnam_yudong() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/1_16980303586540/5?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="ydp_yudong"
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default gangnam_yudong;