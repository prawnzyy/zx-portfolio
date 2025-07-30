import CustomSection from "@/components/CustomSection";
import HomePic from "../assets/images/home_about.jpg";
import Timeline from "@/components/ui/timeline";
import { Separator } from "@/components/ui/separator"
import NUS from "@/assets/nus_logo.jpg";
import UW from "@/assets/uwaterloo_logo.jpg";
import HC from "@/assets/hc_logo.jpg"
function AboutPage() {
    const education = [
        {
            school: "National University of Singapore",
            program: "Bachelor of Computing in Computer Science",
            period: "Aug 2022 - Aug 2026",
            grade: "4.72 / 5",
            logo: NUS,
        },
        {
            school: "University of Waterloo",
            program: "Student Exchange Program, Computer Science",
            period: "Aug 2024 - Dec 2024",
            description: "Studied 1 Semester, took courses such as algorithms, computer networks and software engineering",
            logo: UW,
        },
        {
            school: "Hwa Chong Institution",
            program: "GCE A Levels",
            period: "Feb 2018 - Nov 2019",
            grade: "87.5 / 90",
            logo: HC,
        },
    ]

    function scrollWithPadding(id:string, offset = 20) {
        const target = document.getElementById(id);
        const targetPosition = Number(target?.getBoundingClientRect().top) - offset + window.scrollY;
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    }
    return (
        <div className="flex flex-col">
            <CustomSection>
                <div className='w-full sm:w-1/2 order-1 sm:order-2'>
                    <img src={HomePic} alt="About me" className="max-h-[350px] justify-self-center"/>
                </div>
                <div className="w-full sm:w-1/2 order-2 sm:order-1 m-auto">
                    Once again, I am Zi Xiang, an aspiring software engineer currently studying computer science. This website's main intention is just a way to showcase myself, but also as a form of personal blog
                    to see how far I have come and the things I have done over the years. Click the buttons below to be directed to the various sections
                    <br></br>
                    <button className="btn btn-hover-blue mt-2 me-2" onClick={
                        () => scrollWithPadding('education')
                        }>Education</button>
                    <button className="btn btn-hover-blue mt-2" onClick={
                        () => scrollWithPadding('experiences')
                        }>Experiences</button>
                </div>
            </CustomSection>
            <CustomSection id="experiences">
                <div className="flex flex-col w-full">
                    <h3 className="text-center w-full font-bold underline text-xl">Experiences</h3>
                    <Timeline timelineObjs={[
                        {
                            title : "Software Developer (Intern)", 
                            company : "National University of Singapore Graduate School", 
                            period : "January 2025 - July 2025", 
                            description : "Maintained and Developed the Graduate School's (NUSGS) website. Developed a simplified section based webpage generator for admin use. Aided in the development of the student portal, which is meant for all NUS graduate student use",
                            technologies: ["JavaScript", "PHP", "MySQL", "Wordpress", "JSON Web Token (JWT)"]
                        }, 
                        {
                            title : "Instructor (Intern)", 
                            company : "Nullspace Robotics", 
                            period : "December 2021 - June 2022", 
                            description : "Taught robotics and basic coding such as Python and Arduino at the centers and under MOE's GEP program. Assisted in the development of the Python Curriculum that is being taught.",
                        }
                    ]} />
                </div>
            </CustomSection>
            <CustomSection id="education">
                <div className="flex flex-col w-full">
                    <h3 className="text-center w-full font-bold underline text-xl">Education</h3>
                    <div className="py-6 md:py-12 max-w-screen-sm mx-auto">
                    {education.map(({school, program, period, grade, description, logo}, index) => (
                        <>
                        { index >= 1 && <Separator className="my-5"></Separator>}
                        <div className="flex flex-row gap-4">
                            <div>
                                <img src={ logo } width={60}></img>
                            </div>
                            <div className="flex flex-col text-start">
                                <div className="font-bold text-lg">{ school }</div>
                                <div>{ program }</div>
                                <div className="text-gray-500">{ period }</div>
                                { grade && <div>Grade: { grade }</div>}
                                { description && <div className="mt-4">{ description }</div>}
                            </div>
                        </div>
                        </>
                    ))}
                    </div>
                </div>
            </CustomSection>
        </div>
    );
}

export default AboutPage