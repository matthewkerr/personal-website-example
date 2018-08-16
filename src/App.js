import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Post from './components/Blog/Post/Post';
import Home from './containers/Pages/Home';
import Work from './containers/Pages/Work';
import About from './containers/Pages/About';
import Contact from './containers/Pages/Contact';
import Wrapper from './hoc/Wrapper';
import H1Z1 from './containers/Pages/Work/H1z1';
import Planetside2 from './containers/Pages/Work/Planetside2';
import Landmark from './containers/Pages/Work/Landmark';
import CloneWars from './containers/Pages/Work/CloneWars';
import FreeRealms from './containers/Pages/Work/FreeRealms';
import JudyAlbrecht from './containers/Pages/Work/JudyAlbrecht';
import FoodWithFrances from './containers/Pages/Work/FoodWithFrances';
import AdventureHydro from './containers/Pages/Work/AdventureHydro';

import './App.css';

class App extends Component {
  render() {
    return (
        <Wrapper>
            <Navbar class='navbar navbar-expand-lg navbar-light fixed-top' />
            <Switch>
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/h1z1" component={H1Z1} />
              <Route path="/landmark" component={Landmark} />
              <Route path="/clonewars" component={CloneWars} />
              <Route path="/freerealms" component={FreeRealms} />
              <Route path="/judyalbrecht" component={JudyAlbrecht} />
              <Route path="/foodwithfrances" component={FoodWithFrances} />
              <Route path="/adventurehydro" component={AdventureHydro} />
              <Route path="/planetside2" component={Planetside2} />
              <Route path="/Blog" component={Blog} />
              <Route path="/post/:slug" component={Post} />
              <Route path="/" component={Home} />
            </Switch>
        </Wrapper>
    );
  }
}

export default App;
