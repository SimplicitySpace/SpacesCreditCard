import React, { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Hero from './Components/Hero/Hero';
import MyWork from './Components/My Work/MyWork';
import MyWorkList from './Components/My Work/MyWorkList';
import Skills from './Components/Skills/Skills';
import Blog from './Components/Blog/Blog';
import BlogList from './Components/Blog/BlogList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BlogContent from './Components/Blog/BlogContent';
import ScrollToTop from './Components/ScrollToTp/Scroll';
import Footer from './Components/Footer/Footer';

function App() {

  const [list, setlist] = useState(MyWorkList)
  const [blog, setBlog] = useState(BlogList)
  return (

    <Router>
      <Routes>
        <Route path='/' element={<>
          <div>
            <Navigation />
            <Hero />
            <MyWork list={list} />
            <Skills />

            <Blog list={blog} />
            <Footer />
          </div>
        </>} />

        <Route path='/blog/:id' element={

          <ScrollToTop>
            <div>
              <Navigation />
              <BlogContent lists={blog} />
              <Footer />
            </div>
          </ScrollToTop>
        } />
      </Routes>
    </Router>


  );
}

export default App;

