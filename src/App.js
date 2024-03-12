import Home from './componet/Home';
import Header from './componet/Header';
// import Sliderbar from './componet/Sliders';
import ActionAreaCard from './componet/Product';
import CoffeeCard from './componet/Price';
import MyCard from './componet/Team';
import Activity from './componet/About';
import RecipeReviewCard from './componet/Review';
import Footer from './componet/footer';
import './App.css';



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





function App() {
  return (
    <div className="App"> 
<Router>
<Header />
  <Switch>
    <Route exact path="/">
          <Home/>
    </Route>


    <Route  path="/product">
          <ActionAreaCard/>
    </Route>

    <Route  path="/product">
          <ActionAreaCard/>
    </Route>


    <Route  path="/price">
          <CoffeeCard/>
    </Route>

    <Route  path="/team">
          <MyCard/>
    </Route>


    <Route  path="/about">
          <Activity/>
    </Route>


    <Route  path="/review">
          <RecipeReviewCard/>
    </Route>

  </Switch>
  <Footer/>
</Router>

           
    </div>
  );
}

export default App;
