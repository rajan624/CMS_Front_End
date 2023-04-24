import homeClasses from "./home.module.css"
import buttonClasses from "../../Style/comman.module.css";
const Intro = ({ heading }) => {
  return (
    <div className={homeClasses.intro}>
      <h1>{heading ? `${heading}` : "We Protect The Environment"}</h1>
      <p>A Non Profit Organization fighting for climate change </p>
      <button className={buttonClasses.btnAct}>Our Work</button>
      <button className={buttonClasses.btn2}>Our Work</button>
    </div>
  );
};

export default Intro;
