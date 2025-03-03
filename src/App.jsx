import NavBar from "./components/NavBar"
import Footer from "./components/footer"
import "./App.css"
import PerScholasLogo from "./components/PerScholasLogo";

function App() {

  return (
   <div>
    <NavBar />
    {/* this is a comment */}
    <hr />
    <PerScholasLogo />
    <hr />
    <h1>First React App</h1>
    <hr /> 

    <Footer />
   </div>
  );
}

export default App
