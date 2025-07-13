import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Upcoming from "./Upcoming";
import Moviepage from "./Moviepage";
import Searchform from "./Searchform";


var projectRoute = (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
         <Route path="popular" element={<Popular />} />
          <Route path="toprated" element={<Toprated />} />
           <Route path="upcoming" element={<Upcoming />} />
            <Route path="single-movie/:movieid" element={<Moviepage />} />
          <Route path="searchdata/:moviename" element={<Searchform />} />
        </Route>
      </Routes>
      </BrowserRouter>
)

export default projectRoute;