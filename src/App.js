import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner";


import { useState, useEffect } from "react";


import { toast } from "react-toastify";
import { apiUrl } from "./data";


const Home = lazy(() => import("./components/Home"))
const Movie = lazy(() => import("./components/Movie"))

const App = () => {


  const [shows, setShows] = useState(null);

  async function fetchData() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setShows(output);
    }
    catch (error) {
      toast.error("Network Error");
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />} >
          <Routes>


            <Route path="/" element={<Home shows={shows} />} ></Route>
            <Route path="/movie" element={<Movie shows={shows} />}></Route>

          </Routes>
        </Suspense>

      </BrowserRouter>
    </>
  );


};

export default App;
