import { useState } from 'react';
import Contact from './component/contact';
import Fooldal from './component/fooldal';

import './App.css';

function App() {
  const [site, setSite] = useState(0);
  const [dropDownState, setDropDownState] = useState("none");
  const page = site === 0 ? <Fooldal handleButton={setPage}/> : <Contact />;

  const ButtonAlert = site === 0 ? "Kapcsolat" : "Főoldal";

  function setPage(x) {
    setSite(x);
  }


  function buttonHeaderHandler(){
    setSite(site === 0 ? 1 : 0)
  }

  function dropDown() {
    if(dropDownState==="none"){
      setDropDownState("flex");
    }else{
      setDropDownState("none");
    }
    
  }
  return (
    <div className="App">

       <header className="header">
      
        <div className="header-rout">
     
          <div className="logo">Profifahaz.hu</div>

          <ul className="menu">
            <li className="menu-p" onClick={() => setPage(0)}>Főoldal</li>
            <li className="menu-p" onClick={() => setPage(1)}>Kapcsolat</li>
          </ul>

          <div className="dropdownMenu">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAUUlEQVR4nO3YgQnAQAzDQI3ezdUlCt83OsgIBhFIkpygPguHI3AEjsARzIw9SZJQxv8OjsAROILT+V3GJ0nyJVcedI7AETgCR3B6pGV8knCzFysxbeBnpwXzAAAAAElFTkSuQmCC" className='ddImage' onClick={dropDown} alt="DropDown Image"/>
            <div className="items" style={{display:dropDownState}}>
              <div className="ddItem" onClick={() => setPage(0)}>Főoldal</div>
              <div className="ddItem" onClick={() => setPage(1)}>Kapcsolat</div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="header-main">

            <h1 className="title">KÖNNYŰSZERKEZETES HÁZÉPÍTÉS</h1>
            <div className='line'></div>
            <p className="description">
            Minden ami a családi ház kivitelezéséhez szükséges!
            </p>
            <button className="buttonHeader" onClick={buttonHeaderHandler}>{ButtonAlert}</button>

          </div>

     
        </div>

      </header>

      <main>
        {page}
      </main>
    </div>
  );
}

export default App;
