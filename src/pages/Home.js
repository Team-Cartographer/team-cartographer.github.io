import './HomeStyles.css';
import titleImage from '../images/landing_photo.png'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={titleImage} alt="Title" className="landingImage"/>
        <p>
          Welcome to Team Cartographer
        </p>
      </header>
    </div>
  );
}

export default Home;
