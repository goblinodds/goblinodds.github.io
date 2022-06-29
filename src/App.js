import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Video from './pages/Video';
import Illustration from './pages/Illustration';
import StoryGen from './pages/StoryGen';
// import ReadingSpeed from './pages/ReadingSpeed';
// https://reactrouter.com/docs/en/v6/getting-started/overview
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* tells us to render only 1 route at a time */}
        {/* all routes in our app */}
        <Routes>
          <Route>
            {/* / is "home," exact component is "just this route, not multiple" */}
            {/* component is what you want to render when someone accesses this route */}
            <Route path='/' element={<Home />}/>
          </Route>
          <Route>
            <Route path='/video' element={<Video />}/>
          </Route>
          <Route>
            <Route path='/illustration' element={<Illustration />}/>
          </Route>
          <Route>
            <Route path='/storyGen' element={<StoryGen />}/>
          </Route>
          {/* <Route>
            <Route path='/readingSpeed' element={<ReadingSpeed />}/>
          </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}