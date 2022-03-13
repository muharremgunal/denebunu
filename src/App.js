import "./App.css";
import Review from "./components/Review";
import Category from "./components/Category";
import Products from "./components/Products";

function App() {
  return (
    <div className="container-sm">
      <div className="navbar">
        <img src="/Denebunu.png" alt="logo" className="logo" />
        <h3>DENEBUNU APP</h3>
      </div>
      <div className="content">
        <div className="header">
          <Products />
          <Review />
        </div>
        <Category />
      </div>
    </div>
  );
}

export default App;
