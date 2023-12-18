import './HomeStyles.css';
import titleImage from '../images/landing_photo.png'
import githubLogo from '../images/github.png'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
      <h1>Welcome to Team Cartographer!</h1>
        <img src={titleImage} alt="Title" className="landingImage"/>
      </header>
      
      <div align='center'>

        <div className="projects-heading">
          <img src={githubLogo} alt='Github Logo' className='github-logo'/>
          <h1>Our Projects</h1>
        </div>

        <div className="adc-header">
          <a href="https://github.com/Team-Cartographer/cartographerADC23"><b>NASA App Development Challenge</b></a>
          <p>Won Top 3 Nationwide, and Presented App at Johnson Space Center</p>
        </div>
        <br/>
        <br/>
        <h1><i>more coming soon...</i></h1>

      </div>

    </div>
  );
}

export default Home;
