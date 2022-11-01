import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import Header from "@components/Header";

import { Route, Routes} from 'react-router-dom';
import s from  './App.module.css';
import NodeFoundPage from "../NotFoundPage";

const App = () => {
  return (
      <><div className={s.wrapper}>
          <Header/>
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/people' element={<PeoplePage />}/>
              <Route path='*'  element={<NodeFoundPage />}/>
              <Route path='/not-found'  element={<NodeFoundPage />}/>

          </Routes>
      </div>
      </>
  )
}



export default App;


