import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import {
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
          <Navbar/>  
          <div className="container">
              <Switch>
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/heroes/:heroeId" component={HeroScreen} />
                <Route exact path="/dc" component={DcScreen} />
                {/* Sinocumple ninguna de las opciones manda a: */}
                <Redirect to="/marvel" />
              </Switch>
          </div>
        </>
    )
}
