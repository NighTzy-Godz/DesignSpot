import about_bg from "../../assets/img/about_bg.jpg";
import "../../assets/css/about.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="about_container">
          <div className="img">
            <img src={about_bg} alt="" />
          </div>
          <div className="text">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
