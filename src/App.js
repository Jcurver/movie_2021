import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";


function App(){
  return (
    <HashRouter>
      <Navigation/> 
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
      
      
    </HashRouter>
  );
}


// Navigation은 항상 라우터 안에 있어야 작동한다.
// 링크를 사용하고 싶다면 그것에 한해서는 모두 라우터 안에 넣어야 한다.

//BrowserRouter은 해쉬태그가 없다. HashRouter은 #/ 가 붙는다.
// BrowserRouter은 깃헙에서 다루기 좀 까다로워서 일단 해쉬라우터 쓰자.



export default App;