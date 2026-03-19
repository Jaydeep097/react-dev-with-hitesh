import Item from "./components/Item";
import { Cart } from "./components/Cart";

import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <Item name="Macbook Pro"  price = {10000} />
      <Item name="Pendrive"  price = {1030} />
      <Item name="Mouse"  price = {13450} />
      <Cart />
    </div>
  );
};

export default App;
