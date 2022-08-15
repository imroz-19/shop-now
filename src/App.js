import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Header from './common/Header.tsx';
import SignIn from './pages/Authentication/Sign-in.tsx';

function App() {

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign-in" component={SignIn} />
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
