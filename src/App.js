import logo from "./logo.svg";
import "./App.css";
import { CContainer } from "@coreui/react";
import  CForm  from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CContainer className="form-div">
          < CForm />
        </CContainer>
      </header>
    </div>
  );
}

export default App;
