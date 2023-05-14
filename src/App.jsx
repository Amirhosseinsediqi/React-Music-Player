import { useState } from 'react'
import React from 'react'


// Style
import './App.css'
import './customize-progress-bar.css';


// Components
import Nav from './components/Nav'
import AudioPlayer from './components/AudioPlayer'

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Hover.css
import 'hover.css/css/hover-min.css';


function App() {

  return (
    <>
      <Nav />
      <AudioPlayer />
    </>
  )
}

export default App
