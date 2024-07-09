import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Loader from './components/loader/Loader';
import Navbar from './components/navbar/Navbar';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';
import Page4 from './components/pages/Page4';
import Page5 from './components/pages/Page5';
import Page6 from './components/pages/Page6';
import Page7 from './components/pages/Page7';
import Page8 from './components/pages/Page8';
import Page9 from './components/pages/Page9';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => { 
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fakeDataFetch();
  }, []);
 
  return (
    <>
      {isLoading ? (<Loader/>) : (
        <div className='main-container'>
          <div className="mainContainer">
            <Navbar/>
            <Page1/>
          </div>
          <div className="page2Container">
            <Page2/>
          </div>
          <div className="page3Container">
            <Page3/>
          </div>
          <div className="page4Container">
            <Page4/>
          </div>
          <div className="page5Container">
            <Page5/>
          </div>
          <div className="page6Container">
            <Page6/>
          </div>
          <div className="page7Container">
            <Page7/>
          </div>
          <div className="page8Container">
            <Page8/>
          </div>
          <div className="page9Container">
            <Page9/>
          </div>
        </div>
      )}
    </>
  );
}

export default App
