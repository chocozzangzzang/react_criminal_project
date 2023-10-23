import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangseo_infra() {
  return (
    <div className='charts'>
        <iframe
            src="https://public.tableau.com/views/_cctv/_cctv_light_bell?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="gd_infra"
            width="100%"
            height="100%"
            scrolling="no">
        </iframe>
    </div>
  )
}

export default gangseo_infra;