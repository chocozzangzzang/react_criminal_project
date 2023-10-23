import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangnam_predict() {
  return (
    <div className='maps'>
        <iframe
            className='left_map_margin'
            src="./htmls/gangnam_map1_predict1.html"
            title="ydp_predict"
            scrolling="no">
        </iframe>
        <iframe
        className='right_map_margin'
            src="./htmls/gangnam_map2_real1.html"
            title="ydp_real"
            scrolling="no">
        </iframe>
    </div>
  );
}

export default gangnam_predict;