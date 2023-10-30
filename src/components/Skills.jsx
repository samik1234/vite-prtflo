import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import JavaScript from "../Assets/javascript.png";
import ReactImg from "../Assets/react.png";
import Node from "../Assets/node.png";
import Tailwind from "../Assets/tailwind.png";
import Github from "../Assets/github.png";
import Nextjs from "../Assets/nextjs.png";
import Firebase from "../Assets/firebase.png";



const Skills = () => {
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-[#e4d8d8]">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Skills
      </h1>
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">

        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
          <p className="my-4">HTML</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={CSS} alt="css icon" />
          <p className="my-4">CSS</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img
            className="w-20 mx-auto"
            src={JavaScript}
            alt="javascript icon"
          />
          <p className="my-4">JavaScript</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={ReactImg} alt="react icon" />
          <p className="my-4">React js</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Github} alt="github icon" />
          <p className="my-4">GITHUB</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Node} alt="node icon" />
          <p className="my-4">Node Js</p>
          
        </div>

        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
          <p className="my-4">TAILWIND</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Nextjs} alt="nextjs icon" />
          <p className="my-4">NextJs 13</p>
        </div>
        <div className="shadow-md shadow-[#001b5e] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={Firebase} alt="nextjs icon" />
          <p className="my-4">Firebase</p>
        </div>
      </div>
    
    </div>

    
  );
};

export default Skills;
