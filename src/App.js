import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import './App.css'
import Profile from "./Component/Profile/Profile";
import Header from "./Component/Header/Header";
import Portfolio from "./Pages/Porfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className={'top_60'}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        <Grid item md={8} >
         <Router>
          <Header />
            <div className="main_content">
              <Routes>
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/" element={<Resume />}/>
              
            </Routes>
            </div>
            
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
