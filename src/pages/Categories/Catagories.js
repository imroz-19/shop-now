import './Catagories.scss';


const HomePage = ({catagories}) => {
  return(
    catagories.map(({title, id, imageUrl}) => {
      return (
        <div className="category-container" key={id}>
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
          <div className="category-body-container">
            <h3>{title}</h3>
            <p>Shop now</p>
          </div>
        </div>
      )
    })
  )
};

export default HomePage;