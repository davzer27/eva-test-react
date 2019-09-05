import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = () => '';

const Index = Loadable({
  loader: () => import('./pages/index/index'),
  loading: Loading,
});
const Details = Loadable({
  loader: () => import('./pages/details/details'),
  loading: Loading,
});

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Index}/>
      <Route path="/details/:id" component={Details}/>
    </div>
  </BrowserRouter >
  );
}

export default App;
