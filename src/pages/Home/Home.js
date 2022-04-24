import Card from '../../components/Card/Card';
import './Home.scss';


const HomePage = ({catagories}) => {
  return(
    <div className="catagories-wrapper">
      <Card catagories={catagories} />
    </div>
  )
};

export default HomePage;