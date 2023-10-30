import WorkItem from "./WorkItem";


const data = [

    {
        year: 2023,
        title: 'Frontend Developer',
        duration: '1 Year',
        details:"Developed user-friendly and responsive websites for 10+ clients using HTML, CSS, JavaScript, and React. Optimized website performance and speed through code optimization and image compression I have worked on projects ranging from small business websites to large-scale enterprise applications. My experience includes developing responsive designs, creating custom components, optimizing performance, and ensuring cross-browser compatibility.Troubleshot and debugged issues related to front-end development. Stayed up-to-date with the latest web development trends and technologies.Provided technical support and guidance to clients and team members."
    },
    
    {
        year: 2022,
        title: 'Internship',
        duration: "6 Month",
        details: "My experience includes developing responsive designs, creating custom components, optimizing performance, and ensuring cross-browser compatibility. I am also experienced in debugging issues and resolving them quickly. Developed responsive designs to ensure a seamless user experience on various devices. Collaborated effectively as part of a team to achieve project goals."
    }
]

const Work = () => {

    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
               <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
            ))}
       
        </div>
    )
}


export default Work
