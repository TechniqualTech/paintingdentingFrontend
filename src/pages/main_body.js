import React, { useEffect } from 'react'
import Entrybody from '../components/entrypoint/entrybody'
import Services from './services'
import Contact_card from '../components/contact_card'
import Projects from './projects'
import OurStory from './ourstory'
import Freeappoint from '../components/freeappoint'

//routign library
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Main_body() {
  return (
    <>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Entrybody />} />
          <Route path="/service" element={<Services />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/ourstory/formpage" element={<Freeappoint />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  )
}
