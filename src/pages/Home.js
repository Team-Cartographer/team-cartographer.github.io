import './HomeStyles.css';
import titleImage from '../images/landing_photo.png'
import githubLogo from '../images/github.png'

export default function Home() {
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

        <div className="project-section">
          <a href="https://github.com/Team-Cartographer/cartographerADC23"><b>NASA App Development Challenge</b></a>
          <p>Won Top 3 Nationwide, and Presented App at Johnson Space Center</p>
        </div>
        <br/><br/>
        <div className="project-section">
          <a href="https://github.com/Team-Cartographer/Space-Apps-2023-Data"><b>NASA Space Apps Challenge</b></a>
          <p>Global Nominee, Top 500 Worldwide out of 5000+ Teams</p>
        </div>
        <br/><br/>
        <div className="project-section">
          <a href="https://github.com/Team-Cartographer/Kibo-RPC"><b>JAXA Kibo Robot Programming Challenge</b></a>
          <p>Top 10 Nationwide</p>
        </div>
        <br/>
        <br/>
        <h1><i>more coming soon...</i></h1>

      </div>

    </div>
  );
}
