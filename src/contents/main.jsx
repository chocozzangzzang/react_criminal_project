import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function main() {
  return (
    <div className='charts'>
      <div className='tableau_container'>
      <iframe
        width="100%"
        height="100%"
        src="https://public.tableau.com/views/total_16963303018100/sheet42_1?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
        title="main_dashboard"
        scrolling="no">
        </iframe>
      </div>

    </div>
  )
}

export default main;