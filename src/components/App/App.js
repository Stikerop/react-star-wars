import PeoplePage from "../PeoplePage/PeoplePage/PeoplePage";
import HomePage from "../HomePage/HomePage";
import Header from "../Header/Header";


import {Route, Routes} from 'react-router-dom';
import  s from './App.module.css';
import NodeFoundPage from "../NotFoundPage/NodeFoundPage";

const App = () => {
    return (
        <div className={s.wrapper}
        >
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/people' element={<PeoplePage/>}/>
                <Route path='*' element={<NodeFoundPage/>}/>
                <Route path='/not-found' element={<NodeFoundPage/>}/>

            </Routes>
        </div>

    )
}


export default App;


