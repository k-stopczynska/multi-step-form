import React, { useContext } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
//import Section from './components/Main/Section';
import FormPrimary from './components/Main/FormPrimary';
import ThankYouCard from './components/Main/ThankYouCard';
import StepChanger from './components/Footer/StepChanger';
import PageContext from './contexts/page-context';

function App() {
  const pageCtx = useContext(PageContext);
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="main__container">
        {pageCtx ? <FormPrimary /> : <ThankYouCard />}
        </div>
      </main>
      <footer>
        {pageCtx && <StepChanger />}
      </footer>
    </div>
  );
}

export default App;
