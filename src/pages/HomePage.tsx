import { Link } from 'react-router';
import CustomSection from '../components/CustomSection';
import HomePic from '../assets/images/home_about.jpg';
import TravelPic from '../assets/images/home_travel.jpg';
import ProjectPic from '../assets/images/home_projects.jpg';

function HomePage() {
    return (
        <div className="flex flex-col">
            <CustomSection>
                <div className='w-full sm:w-1/2 order-1 sm:order-2'>
                    <img src={HomePic} alt="About me" className="max-h-[350px] justify-self-center"/>
                </div>
                <div className="w-full sm:w-1/2 order-2 sm:order-1 m-auto">
                    Hi, I am Seah Zi Xiang, and welcome to my website. This is a simple website where I share more about myself, such as my experiences and education. I have also included my past projects, as well as my travels (in the form of blogs), here. Click the button below to find out more.
                    <br></br>
                    <Link to="/about" className="btn btn-hover-blue mt-2">About Me!</Link>
                </div>
            </CustomSection>
                
            <CustomSection>
                <div className='w-full sm:w-1/2'>
                    <img src={ProjectPic} alt="Create a Webpage" className="max-h-[350px] justify-self-center"/>
                </div>
                <div className="w-full sm:w-1/2 m-auto">
                    As a Computer Science Student, I have done quite a few projects, be it for school modules or as part of my internship. I have selected a few more notable ones and they are being showcased. Click the button below to find out more.
                    <br></br>
                    <Link to="/projects" className="btn btn-hover-blue mt-2">My projects!</Link>
                </div>
            </CustomSection>

            <CustomSection>
                <div className='w-full sm:w-1/2 order-1 sm:order-2'>
                    <img src={TravelPic} alt="Lake Ashi" className="max-h-[350px] justify-self-center"/>
                </div>
                <div className="w-full sm:w-1/2 order-2 sm:order-1 m-auto">
                    I have traveled quite a bit in the past few years, especially during my Student Exchange Program (SEP), where I had to take a full semester of school in a foreign country. I have collated some of my travels and dislayed them in the form of blogs.
                    <br></br>
                    <Link to="/travels" className="btn btn-hover-blue mt-2">My travels!</Link>
                </div>
            </CustomSection>
        </div>
    );
}

export default HomePage