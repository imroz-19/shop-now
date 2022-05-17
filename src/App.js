import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Header from './common/Header.tsx';


function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
  
}

const Shop = () => {
  return(
    <div>Shop</div>
  )
}

export default App;
