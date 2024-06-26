import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Cv from './components/CvPage';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Demo from './components/Demo';
import DemoPage from './components/Demo/demoPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
         {/* index表示初始page标记吗 */}
        <Route index element={<Home />}></Route>
        <Route path='cv' element={<Cv />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='Demo' element={<Demo />}></Route>
        <Route path='Demo/DemoPage/:demoName' element={<DemoPage />}></Route>
        <Route path='*' element={<NoPage />}></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App;