import Item from "./components/Item";
import Cart from "./components/Cart"
import "./App.css";

const App = () => {
  
  return (
    <div className="App">
      <Item name="Macbook Pro" price={10000}/>
      <Item name="Mobile" price={2300}/>
      <Item name="pendrive" price={400}/>
      <Cart/>
    </div>
  );
};

export default App;
