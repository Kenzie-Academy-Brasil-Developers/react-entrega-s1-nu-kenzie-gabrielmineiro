import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import "./App.css";

function App() {
  const [listTransactions, setlistTransactions] = useState([]);

  return (
    <>
      <header>
        <img src="./assets/NuKenzie.png" alt="" />
      </header>
      <div className="container">
        <div className="formulario">
          <Form lista={listTransactions} setlista={setlistTransactions} />
        </div>
        ;
      </div>
    </>
  );
}

export default App;
