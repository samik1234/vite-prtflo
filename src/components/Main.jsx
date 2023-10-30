
import { FaTwitter, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Main = () => {

    // Function to open the Twitter profile
    const openTwitter = () => {
        window.open("https://twitter.com/your_twitter_username", "_blank");
    };

    // Function to open the GitHub profile
    const openGithub = () => {
        window.open("https://github.com/samik1234", "_blank");
    };




    // Function to open the LinkedIn profile
    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/samikshawankha/", "_blank");
    };




    // Function to open the email client with a predefined email address
    const openEmail = () => {
        const email = "samikshawankhade11@gmail.com"; // Replace with your email address
        const subject = "Hello from your website"; // Customize the email subject
        const body = "Hello Samiksha, I visited your website and wanted to get in touch."; // Customize the email body
        window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    };






    return (
        <div id="main">

            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src="/main.jpg" alt=" " />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I&apos;m Samiksha Wankhade</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I&apos;m a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                1000,
                                'Tech Enthusiast',
                                2000,
                                'UI/UX Designer',
                                2000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h2>

                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <FaTwitter onClick={openTwitter} className="cursor-pointer" size={20} />
                        <FaGithub onClick={openGithub} className="cursor-pointer" size={20} />
                        <FaLinkedinIn onClick={openLinkedIn} className="cursor-pointer" size={20} />
                        <a href={`mailto:your.email@example.com`} className="cursor-pointer" onClick={openEmail}>
                            <FaEnvelope size={20} style={{ marginRight: '5px' }} /> {/* Add the envelope icon here */}
                            <span className="text-gray-800" style={{ fontSize: 20 }}></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
