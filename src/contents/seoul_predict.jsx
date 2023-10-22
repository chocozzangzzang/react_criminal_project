import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function seoul_predict() {
  return (
    <div className='maps'>
        <iframe
            className='left_map_margin'
            src="./htmls/all_predict.html"
            title="ydp_predict"
            scrolling="no">
        </iframe>
        <iframe
          className='right_map_margin'
            src="./htmls/all_real.html"
            title="ydp_real"
            scrolling="no">
        </iframe>
    </div>
  );
}

export default seoul_predict;