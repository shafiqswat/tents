/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/home";
import Dashboard from "./Components/layout/dashboard";
import Sayaarat from "./Pages/Sayaarat";
import Alriyad from "./Pages/alriyad";
import Hadayiq from "./Pages/hadayiq";
import Masabih from "./Pages/masabih";
import Madakhil from "./Pages/madakhil";
import Likasan from "./Pages/likasan";
import SawatirAlriyad from "./Pages/sawatirAlriyad";
import Madaris from "./Pages/madaris";
import Aswaq from "./Pages/aswaq";
import Masajid from "./Pages/masajid";
import Qumash from "./Pages/qumash";
import Shinku from "./Pages/shinku";
import Hadid from "./Pages/hadid";
import Qumash1 from "./Pages/qumash1";
import Bilastik from "./Pages/bilastik";
import Likasan1 from "./Pages/likasan1";
import Masabih1 from "./Pages/masabih1";
import HanajirAlriyad from "./Pages/hanajirAlriyad";
import JalasatWaburjulat from "./Pages/jalasatWaburjulat";
import ShubukAlriyad from "./Pages/shubukAlriyad";
import BiutShaer from "./Pages/biutShaer";
import AitasilBina from "./Pages/aitasilBina";
import Almazid from "./Pages/almazid";
import ManatiqAlsueudia from "./Pages/manatiqAlsueudia";
import WasawatirFiAlriyad from "./Pages/wasawatirFiAlriyad";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/alriyad'
              element={<Alriyad />}
            />
            <Route
              path='/alriyad/sayaarat'
              element={<Sayaarat />}
            />
            <Route
              path='/alriyad/hadayiq'
              element={<Hadayiq />}
            />
            <Route
              path='/alriyad/masabih'
              element={<Masabih />}
            />
            <Route
              path='/alriyad/madakhil'
              element={<Madakhil />}
            />
            <Route
              path='/alriyad/likasan'
              element={<Likasan />}
            />
            <Route
              path='/alriyad/madaris'
              element={<Madaris />}
            />
            <Route
              path='/alriyad/aswaq'
              element={<Aswaq />}
            />
            <Route
              path='/alriyad/masajid'
              element={<Masajid />}
            />
            <Route
              path='/alriyad/qumash'
              element={<Qumash />}
            />
            <Route
              path='/alriyad/shinku'
              element={<Shinku />}
            />
            <Route
              path='/sawatiralriyad'
              element={<SawatirAlriyad />}
            />
            <Route
              path='/sawatiralriyad/hadid'
              element={<Hadid />}
            />
            <Route
              path='/sawatiralriyad/qumash1'
              element={<Qumash1 />}
            />
            <Route
              path='/sawatiralriyad/bilastik'
              element={<Bilastik />}
            />
            <Route
              path='/sawatiralriyad/likasan1'
              element={<Likasan1 />}
            />
            <Route
              path='/sawatiralriyad/masabih1'
              element={<Masabih1 />}
            />
            <Route
              path='/manatiqalsueudia'
              element={<ManatiqAlsueudia />}
            />
            <Route
              path='/hanajiralriyad'
              element={<HanajirAlriyad />}
            />
            <Route
              path='/jalasatwaburjulat'
              element={<JalasatWaburjulat />}
            />
            <Route
              path='/shubukalriyad'
              element={<ShubukAlriyad />}
            />
            <Route
              path='/biutshaer'
              element={<BiutShaer />}
            />
            <Route
              path='/aitasilbina'
              element={<AitasilBina />}
            />
            <Route
              path='/almazid'
              element={<Almazid />}
            />
            <Route
              path='/wasawatirfialriyad'
              element={<WasawatirFiAlriyad />}
            />
          </Routes>
        </Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
