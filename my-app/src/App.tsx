import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Section from './components/Main/Section';
import FormPrimary from './components/Main/FormPrimary';
import StepChanger from './components/Footer/StepChanger';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <div className="main__container">
        <Section />
        <FormPrimary />
        </div>
      </main>
      <footer>
        <StepChanger />
      </footer>
    </div>
  );
}

export default App;
