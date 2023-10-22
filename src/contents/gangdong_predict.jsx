import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function gangdong_predict() {
  return (
    <div className='maps'>
        <iframe
            className='left_map_margin'
            src="./htmls/gangdong_map1_predict1.html"
            title="gd_predict"
            scrolling="no">
        </iframe>
        <iframe
            className='right_map_margin'
            src="./htmls/gangdong_map2_real1.html"
            title="gd_real"
            scrolling="no">
        </iframe>
    </div>
  );
}

export default gangdong_predict;