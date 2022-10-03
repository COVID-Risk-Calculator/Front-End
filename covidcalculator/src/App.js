import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewEvent from "./Components/NewEvent";
import SavedEvents from "./Components/SavedEvents";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='new/' element={<NewEvent/>} />
                <Route path='saved/' element={<SavedEvents/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
