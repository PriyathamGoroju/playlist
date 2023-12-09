import "./App.css";
import Routers from "./common/Routers";
import { BrowserRouter } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UserStore from "./contexts/UserStore";
import { useState } from "react";


function App() {
  const [phoneNumber, setPhoneNumber] =useState("");
  const [songs, setSongs] = useState("");
  const [playSong, setPlaySong] = useState("");
    return (
        <div className="App">
            <BrowserRouter>
            <UserStore.Provider value={{phoneNumber, setPhoneNumber, songs, setSongs, playSong, setPlaySong}}>
                <Routers />
                </UserStore.Provider>
                <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
            </BrowserRouter>
        </div>
    );
}

export default App;
