import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangseo_afterwork() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/_cctv/__2?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="gd_afterwork"
            width="1400"
            height="700"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default gangseo_afterwork;