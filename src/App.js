// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import MAIN from './contents/main'
import AccordionBarYDP from './contents/accordion_bar_ydp';
import AccordionBarGN from './contents/accordion_bar_gangnam';
import AccordionBarGD from './contents/accordion_bar_gangdong';
import AccordionBarGS from './contents/accordion_bar_gangseo';
import AccordionBar2 from './contents/accordion_bar2';
import YDPYUDONG from './contents/yeongdeungpo_yudong';
import YDPALCO from './contents/yeongdeungpo_alco';
import YDPINFRA from './contents/yeongdeungpo_infra';
import YDPAFTER from './contents/yeongdeungpo_afterwork';
import YDPPOLICE from './contents/yeongdeungpo_police';
import YDPPREDICT from './contents/yeongdeungpo_predict';
import GDYUDONG from './contents/gangdong_yudong';
import GDALCO from './contents/gangdong_alco';
import GDINFRA from './contents/gangdong_infra';
import GDAFTER from './contents/gangdong_afterwork';
import GDPOLICE from './contents/gangdong_police';
import GDPREDICT from './contents/gangdong_predict';
import GSYUDONG from './contents/gangseo_yudong';
import GSALCO from './contents/gangseo_alco';
import GSINFRA from './contents/gangseo_infra';
import GSAFTER from './contents/gangseo_afterwork';
import GSPOLICE from './contents/gangseo_police';
import GSPREDICT from './contents/gangseo_predict';
import GNYUDONG from './contents/gangnam_yudong';
import GNALCO from './contents/gangnam_alco';
import GNINFRA from './contents/gangnam_infra';
import GNAFTER from './contents/gangnam_afterwork';
import GNPOLICE from './contents/gangnam_police';
import GNPREDICT from './contents/gangnam_predict';
import SEOULPREDICT from './contents/seoul_predict';
// import Accordion_bar2 from './contents/accordion_bar2';

function App() {

  return (
  <div className="App">
    <BrowserRouter>
      <div className="ml20">  
        <h3><a href={`/`} className='no_dash_title'>SmartSafety</a></h3>
        <div className="accordions ">
          <AccordionBarYDP title="폭력(영등포구)"/>
          <AccordionBarGS title="절도(강서구)"/>
          <AccordionBarGN title="성폭력(강남구)"/>
          <AccordionBarGD title="5대범죄(강동구)"/>
          <AccordionBar2 title="위험도지도"/>
        </div>
      </div>
      <div>
        <Routes>
            <Route path='/' element={<MAIN />}></Route>
            <Route path='/ydp_yudong' element={<YDPYUDONG/>}></Route>
            <Route path='/ydp_alco' element={<YDPALCO/>}></Route>
            <Route path='/ydp_infra' element={<YDPINFRA />}></Route>
            <Route path='/ydp_afterwork' element={<YDPAFTER />}></Route>
            <Route path='/ydp_police' element={<YDPPOLICE />}></Route>
            <Route path='/ydp_predict' element={<YDPPREDICT />}></Route>
            <Route path='/gd_yudong' element={<GDYUDONG/>}></Route>
            <Route path='/gd_alco' element={<GDALCO/>}></Route>
            <Route path='/gd_infra' element={<GDINFRA />}></Route>
            <Route path='/gd_afterwork' element={<GDAFTER />}></Route>
            <Route path='/gd_police' element={<GDPOLICE />}></Route>
            <Route path='/gd_predict' element={<GDPREDICT />}></Route>
            <Route path='/gs_yudong' element={<GSYUDONG/>}></Route>
            <Route path='/gs_alco' element={<GSALCO/>}></Route>
            <Route path='/gs_infra' element={<GSINFRA />}></Route>
            <Route path='/gs_afterwork' element={<GSAFTER />}></Route>
            <Route path='/gs_police' element={<GSPOLICE />}></Route>
            <Route path='/gs_predict' element={<GSPREDICT />}></Route>
            <Route path='/gn_yudong' element={<GNYUDONG/>}></Route>
            <Route path='/gn_alco' element={<GNALCO/>}></Route>
            <Route path='/gn_infra' element={<GNINFRA />}></Route>
            <Route path='/gn_afterwork' element={<GNAFTER />}></Route>
            <Route path='/gn_police' element={<GNPOLICE />}></Route>
            <Route path='/gn_predict' element={<GNPREDICT />}></Route>
            <Route path='/seoul_predict' element={<SEOULPREDICT />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
