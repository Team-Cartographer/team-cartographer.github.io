import './HomeStyles.css';
import titleImage from '../images/landing_photo.png'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <h1>Welcome to the Team Cartographer Website</h1>
        <img src={titleImage} alt="Title" className="landingImage"/>
      </header>
    </div>
  );
}

export default Home;
