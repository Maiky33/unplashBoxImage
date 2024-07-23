
// import io from "socket.io-client";
// import axios from "axios";
import { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import RegisterPage from "./pages/ReagisterPage";
import HomeApp from "./pages/HomeApp";
import CollectionsPage from "./pages/CollectionPage"
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>  
      <BrowserRouter> 
        <Routes>  
          <Route path="/" element={<RegisterPage/>}/>

          <Route element={<ProtectedRoute/>}> 
            <Route path="/HomeApp" element={<HomeApp/>}/>
            <Route path="/Collections" element={<CollectionsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
