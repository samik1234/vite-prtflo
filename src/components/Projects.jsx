import ProjectItem from "./ProjectItem";
import Notion from "../assets/items/notion.jpeg";
import Messenger from "../assets/items/msg.jpeg";
import Rent from "../assets/items/rent.jpeg";
import Dalle from "../assets/items/dalle.jpeg";
import Netflix from "../assets/items/ntflx.jpeg";
import Youtube from "../assets/items/yt.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 text-base font-normal text-stone-500">

        After building these projects, I gained valuable skills and experience that have shaped me into a proficient developer. Working on these projects allowed me to strengthen my knowledge of web technologies, improve my problem-solving abilities, and enhance my coding skills.
        I learned the importance of clean and maintainable code, effective project management, and collaborating with a team. These experiences have been instrumental in my journey towards becoming a well-rounded developer, and I am excited to continue learning and growing in this dynamic field.
      </p>


      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={Notion} title="Notion Clone" liveLink="https://e-motion.vercel.app" />
        <ProjectItem img={Rent} title="Rent-airbnb Clone" liveLink="https://rent-air-kappa.vercel.app" />
        <ProjectItem img={Messenger} title="Messenger Clone" liveLink="https://messenger-cl.vercel.app" />
        <ProjectItem img={Dalle} title="DALL-E Clone" liveLink="https://sam-dalle-clone-2.netlify.app" />
        <ProjectItem img={Netflix} title="Netflix Clone" liveLink="https://netflix-cl-nine.vercel.app" />
        <ProjectItem img={Youtube} title="Youtube Clone" liveLink="https://sammedia-yt-clone.netlify.app" />
      </div>
    </div>
  );
};

export default Projects;
