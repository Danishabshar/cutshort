import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Page1 from './component/Page1';
import FIRST from './component/pg1';
import Second from './component/Pg2';
import Third from './component/pg3';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
        <Route  path="/" element={<FIRST/>} ></Route>
        <Route path="/p1"  element={<Second/>}></Route>
        <Route  path="/p2"   element={<Third/>}  ></Route>
       </Routes>

     </BrowserRouter>



    </div>
  );
}

export default App;
