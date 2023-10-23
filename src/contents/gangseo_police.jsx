import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangseo_police() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/_cctv/__3?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="gd_police"
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default gangseo_police;