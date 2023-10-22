import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function yeongdeungpo_predict() {
  return (
    <div className='maps'>
        <iframe
            className='left_map_margin'
            src="./htmls/yeongdeungpo_map1_predict1.html"
            title="ydp_predict"
            scrolling="no">
        </iframe>
        <iframe
        className='right_map_margin'
            src="./htmls/yeongdeungpo_map2_real1.html"
            title="ydp_real"
            scrolling="no">
        </iframe>
    </div>
  );
}

export default yeongdeungpo_predict;