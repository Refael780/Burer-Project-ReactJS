
//				The Burger  Project.
//General  : The program demonstrat a build burger System.
//
//Input   :  A Burger with Dynemic element .
//Process  : The program init with empty Burger and let User 
////         buid is own fav burger
////         the goal of is proj is to practice on react freamwork
//------------------------------------------------------ 
// Programmer : Refael Huri 
// Date       : 17.11.2019 
//------------------------------------------------------     

///App.js: This file is the Root of The app
/// its conrain the layout of the App
/// and the StateFull component- BuildBurgers 
//--------------------------------------------
import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder /> {/*StateFull containers}*/}
        </Layout>
      </div>
    );
  }
}

export default App;
