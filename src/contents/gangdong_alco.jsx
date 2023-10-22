import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangdong_alco() {
  return (
    <div className='charts'>
      <div className='tableau_container'>
      <iframe
        width="100%"
        height="100%"
            src="https://public.tableau.com/views/3_16970162261640/5_1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            title="gd_alco"
            scrolling="no">
        </iframe>
      </div>
    </div>
  )
}

export default gangdong_alco;