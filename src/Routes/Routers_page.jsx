import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import Sidebar_ from '../Components/Sidebar_';
import Home from '../Page/Home';
import Floor_plan from '../Page/Floor_plan';
import Photo_edit from '../Page/Photo_edit';
import Su from '../Page/Su';
import All from '../Page/All';
import Floor_edit from '../Page/Floor_edit';
import Photo_edit_edit from '../Page/Photo_edit_edit';
import Web from '../Page/Web';
import Cad from '../Page/Cad';
import SarmD from '../Page/SarmD';
import Su_ from '../Page/Su_';
import Holiday from '../Page/Holiday';
import Summary_report from '../Page/Summary_report';

function Routers_page() {
  return (
    <BrowserRouter>
      <div className="app">
       
        <Sidebar_ /> 
    <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/floor_plan" element={<Floor_plan />} />
          <Route path="/photo_edit" element={<Photo_edit />} />
          <Route path="/su" element={<Su />} />
          <Route path="/all" element={<All />} />
          <Route path="/floor_edit" element={<Floor_edit />} />
          <Route path="/photo_edit_edit" element={<Photo_edit_edit />} />
          <Route path="/web" element={<Web />} />
          <Route path="/cad" element={<Cad />} />
          <Route path="/3d" element={<SarmD />} />
          <Route path="/su_" element={<Su_ />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/sum" element={<Summary_report />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Routers_page;
