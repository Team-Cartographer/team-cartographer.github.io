import "./AboutStyles.css";
import imageOne from "../images/public_presentation.png"
import imageTwo from "../images/presentation.png"

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Team Cartographer</h1>

      <p>
      Team Cartographer is a group of high school and college students driven to apply knowledge in the STEM field and inspire future generations. 
      </p>

      <p>
      The team was initially established in 2022 by two Anaheim high schoolers, who, motivated by a previous engineering competition, sought out another opportunity in computer science, recruiting other students who shared the same passions. As such, Team Cartographer began its first competition participating in the 2023 NASA App Development Challenge, where they distinguished themselves as one of the top three finalists countrywide. 
      </p>

      <p>
      Since then, Team Cartographer has gone on to place highly both in national and global rankings  in the JAXA-NASA Kibo Robot Programming Challenge and NASA Space Apps Challenge. Most recently, the team received an invitation to the Johnson Space Center in the Spring of 2024, to test and present their Augmented Reality spacesuit technology for future spaceflight needs. 
      </p>

      <p>
      Beyond their accolades, Team Cartographer actively engages with their community through outreach to schools in the Orange County area as well as FIRST Robotics League, aiming to educate and cultivate a love for STEM. These achievements serve as a testament to Team Cartographer’s commitment to pushing the boundaries of innovation in science and technology through collaboration. 
      </p>

      <p>
        Interested in working with us? Contact us at <a href='mailto:teamcartographer@gmail.com' className="contactLink"><i>teamcartographer@gmail.com</i></a>
      </p>

      <div className="image-container">
        <img src={imageOne} alt="presentation" className />
        <img src={imageTwo} alt="presentation2" />
      </div>
    </div>
  );
}
