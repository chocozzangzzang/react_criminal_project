import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function yeongdeungpo_predict() {
  return (
    <div className='maps'>
        <iframe
            className='left_map_margin'
            src="./htmls/yeongdeungpo_map3_predict2.html"
            title="ydp_predict"
            width="700"
            height="700"
            scrolling="no">
        </iframe>
        <iframe
            src="./htmls/yeongdeungpo_map4_real2.html"
            title="ydp_predict"
            width="700"
            height="700"
            scrolling="no">
        </iframe>
    </div>
  );
}

export default yeongdeungpo_predict;