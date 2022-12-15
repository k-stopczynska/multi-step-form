import React, { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
//import Section from './components/Main/Section';
import FormPrimary from './components/Main/FormPrimary';
import ThankYouCard from './components/Main/ThankYouCard';

//import PageContext from './contexts/page-context';

function App() {
  
  //const pageCtx = useContext(PageContext);
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="main__container">
     <FormPrimary />
        </div>
      </main>
    </div>
  );
}

export default App;
