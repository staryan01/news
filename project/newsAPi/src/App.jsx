
import './App.css'
import GetApi from './components/GetApi'
import { Routes, Route} from 'react-router-dom';

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/getTimeStories' element={<GetApi />}/>
     </Routes>
      
    </>
  )
}

export default App
