import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/home/home.jsx";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Home />
            <Footer myvar={2+2}></Footer>
        </div>
    );
}

export default App;
