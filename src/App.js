/** @format */
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/layout/dashboard";
import { Helmet } from "react-helmet";

// Lazy load the components
const Home = lazy(() => import("./Pages/home"));
const Sayaarat = lazy(() => import("./Pages/Sayaarat"));
const Alriyad = lazy(() => import("./Pages/alriyad"));
const Hadayiq = lazy(() => import("./Pages/hadayiq"));
const Masabih = lazy(() => import("./Pages/masabih"));
const Madakhil = lazy(() => import("./Pages/madakhil"));
const Likasan = lazy(() => import("./Pages/likasan"));
const SawatirAlriyad = lazy(() => import("./Pages/sawatirAlriyad"));
const Madaris = lazy(() => import("./Pages/madaris"));
const Aswaq = lazy(() => import("./Pages/aswaq"));
const Masajid = lazy(() => import("./Pages/masajid"));
const Qumash = lazy(() => import("./Pages/qumash"));
const Shinku = lazy(() => import("./Pages/shinku"));
const Hadid = lazy(() => import("./Pages/hadid"));
const Qumash1 = lazy(() => import("./Pages/qumash1"));
const Bilastik = lazy(() => import("./Pages/bilastik"));
const Likasan1 = lazy(() => import("./Pages/likasan1"));
const Masabih1 = lazy(() => import("./Pages/masabih1"));
const HanajirAlriyad = lazy(() => import("./Pages/hanajirAlriyad"));
const JalasatWaburjulat = lazy(() => import("./Pages/jalasatWaburjulat"));
const ShubukAlriyad = lazy(() => import("./Pages/shubukAlriyad"));
const BiutShaer = lazy(() => import("./Pages/biutShaer"));
const AitasilBina = lazy(() => import("./Pages/aitasilBina"));
const Almazid = lazy(() => import("./Pages/almazid"));
const ManatiqAlsueudia = lazy(() => import("./Pages/manatiqAlsueudia"));
const WasawatirFiAlriyad = lazy(() => import("./Pages/wasawatirFiAlriyad"));

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Helmet>
          <title>Tents</title>
          <meta
            name='description'
            content='Explore our wide range of tents, including khiyam, muzala, and muzalat. Perfect for your next adventure.'
          />
          <meta
            name='keywords'
            content='tent, tents, khiyam, muzala, muzalat, الخيام, camping, outdoor, adventure'
          />
          <meta
            property='og:title'
            content='Top Quality Tents '
          />
          <meta
            property='og:description'
            content='Explore our wide range of tents, including khiyam, muzala, and muzalat. Perfect for your next adventure.'
          />
          <meta
            property='og:image'
            content='https://tents-f9b9d.web.app/images/slider1.jpg'
          />
          <meta
            property='og:url'
            content='https://tents-f9b9d.web.app/'
          />
          <meta
            name='twitter:card'
            content='https://tents-f9b9d.web.app/images/slider1.jp'
          />
        </Helmet>
        <Dashboard>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/alqasim'
                element={<Alriyad />}
              />
              <Route
                path='/alqasim/sayaarat'
                element={<Sayaarat />}
              />
              <Route
                path='/alqasim/hadayiq'
                element={<Hadayiq />}
              />
              <Route
                path='/alqasim/masabih'
                element={<Masabih />}
              />
              <Route
                path='/alqasim/madakhil'
                element={<Madakhil />}
              />
              <Route
                path='/alqasim/likasan'
                element={<Likasan />}
              />
              <Route
                path='/alqasim/madaris'
                element={<Madaris />}
              />
              <Route
                path='/alqasim/aswaq'
                element={<Aswaq />}
              />
              <Route
                path='/alqasim/masajid'
                element={<Masajid />}
              />
              <Route
                path='/alqasim/qumash'
                element={<Qumash />}
              />
              <Route
                path='/alqasim/shinku'
                element={<Shinku />}
              />
              <Route
                path='/sawatiralqasim'
                element={<SawatirAlriyad />}
              />
              <Route
                path='/sawatiralqasim/hadid'
                element={<Hadid />}
              />
              <Route
                path='/sawatiralqasim/qumash1'
                element={<Qumash1 />}
              />
              <Route
                path='/sawatiralqasim/bilastik'
                element={<Bilastik />}
              />
              <Route
                path='/sawatiralqasim/likasan1'
                element={<Likasan1 />}
              />
              <Route
                path='/sawatiralqasim/masabih1'
                element={<Masabih1 />}
              />
              <Route
                path='/manatiqalsueudia'
                element={<ManatiqAlsueudia />}
              />
              <Route
                path='/hanajiralqasim'
                element={<HanajirAlriyad />}
              />
              <Route
                path='/jalasatwaburjulat'
                element={<JalasatWaburjulat />}
              />
              <Route
                path='/shubukalqasim'
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
                path='/wasawatirfialqasim'
                element={<WasawatirFiAlriyad />}
              />
            </Routes>
          </Suspense>
        </Dashboard>
      </BrowserRouter>
    </div>
  );
}

export default App;
