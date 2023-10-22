// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import MAIN from './contents/main'
import AccordionBarYDP from './contents/accordion_bar_ydp';
import AccordionBar2 from './contents/accordion_bar2';
import YDPYUDONG from './contents/yeongdeungpo_yudong';
import YDPALCO from './contents/yeongdeungpo_alco';
import YDPINFRA from './contents/yeongdeungpo_infra';
import YDPAFTER from './contents/yeongdeungpo_afterwork';
import YDPPOLICE from './contents/yeongdeungpo_police';
import YDPPREDICT from './contents/yeongdeungpo_predict';

function App() {

  const [opened, setOpened] = useState(false);

  return (
  <div className="App">
    <BrowserRouter>
      <div className="ml20">  
        <h3><a href={`/`}>title</a></h3>
        <AccordionBarYDP title="폭력(영등포구)" opened={opened}/>
        <AccordionBar2 title="절도(강서구)"/>
        <AccordionBar2 title="성폭력(강남구)"/>
        <AccordionBar2 title="5대범죄(강동구)"/>
        <AccordionBar2 title="서울폭력위험도지도"/>
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
        </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
