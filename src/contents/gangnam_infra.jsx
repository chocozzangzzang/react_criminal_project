import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangnam_infra() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/1_16980303586540/3?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="ydp_infra"
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default gangnam_infra;