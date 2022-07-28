import Form from "./components/Form";
import { useState } from "react";
import List from "./components/List";

import Vazio from "./components/Vazio";
import "./App.css";

function App() {
  const [listTransactions, setlistTransactions] = useState([]);

  return (
    <>
      <header>
        <img src="https://i.ibb.co/zhGjHCn/NuKenzie.png" alt="" />
        <button>Início</button>
      </header>
      <div className="container">
        <Form lista={listTransactions} setlista={setlistTransactions} />
        {listTransactions.length === 0 ? (
          <Vazio />
        ) : (
          <List lista={listTransactions} setLista={setlistTransactions} />
        )}
      </div>
    </>
  );
}

export default App;
