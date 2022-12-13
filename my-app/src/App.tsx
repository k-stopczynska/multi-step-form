import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Section from './components/Main/Section';
import FormPrimary from './components/Main/FormPrimary';

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
    </div>
  );
}

export default App;
