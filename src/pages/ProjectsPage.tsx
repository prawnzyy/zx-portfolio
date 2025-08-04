import CustomSection from "@/components/CustomSection";
import ProjectPic from "@/assets/images/home_projects.jpg"
import ProjectPic2 from "@/assets/images/projects/webpage-generator-1.jpg"
import ProjectPic3 from "@/assets/images/projects/webpage-generator-2.jpg"

import PortalPic from "@/assets/images/projects/student-profile.jpg"

import OrbitalPic from "@/assets/images/projects/we-believe.png"
import OrbitalPic2 from "@/assets/images/projects/orbital.png"

import BakingBread from "@/assets/images/projects/bakingbreadUi.png"
import BBLogo from "@/assets/images/projects/bb.png"

import { File } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Badge } from "@/components/ui/badge";
import PictureCarousel from "@/components/PictureCarousel";
import { MarkGithubIcon } from "@primer/octicons-react";

function ProjectsPage() {
    return (
        <div className="flex flex-col">
        <CustomSection>
            <div className='w-full sm:w-1/2 order-1 sm:order-2'>
                <img src={ProjectPic} alt="About me" className="max-h-[350px] justify-self-center"/>
            </div>
            <div className="w-full sm:w-1/2 order-2 sm:order-1 m-auto">
                While this website is technically also one of the projects that I have worked on, there are also a few others that I have done over the past few years, be it for school work or for
                internships. Click on the various cards below for more information
                <br></br>
            </div>
        </CustomSection>
        <CustomSection>
            <div>
                <div className="underline font-bold mb-6 text-2xl">My Projects</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-bold text-lg mb-2">Webpage Generator</CardTitle>
                            <CardDescription><img src={ProjectPic}></img></CardDescription>
                        </CardHeader>
                        <CardContent className="mb-3">
                            <p>Designed and created when I was interning under National University of Singapore Graduate School (NUSGS). Was designed with ease of use in mind and to alleviate development team's load for menial tasks</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="btn btn-hover-blue mt-3">Find out more!</button>
                                </DialogTrigger>
                                <DialogContent className="flex flex-col max-h-[90vh]">
                                    <DialogHeader className="shrink-0 border-b px-4 py-3">
                                    <DialogTitle>Webpage Generator</DialogTitle>
                                    </DialogHeader>
                                    <div className="overflow-y-auto px-4 py-3 grow">
                                        The webpage generator was one of the projects that I worked on while working at the National University of Singapore Graduate School (NUSGS). The main use of this product was for the various admins to not only be able to create their own webpages on the website for their own team's use, but also be able to update them
                                        whenever without having to go through us. This also significantly reduces the development team's workload, allowing us to focus on actual development more rather than constantly having to update and maintain. 
                                        <br></br><br></br>
                                        The system was designed to be very modularised, where users would add content in section by section, where they could then choose one of the various templates provided such as Cards or Banner. Once they have chosen their template, they would be able to input the relevant information and then display it.
                                        <br></br><br></br>
                                        Along with the webpage generator itself, a dashboard also had to be made to allow higher admins to be able to approve changes or hide the page if needed. 
                                    </div>
                                    <DialogFooter className="shrink-0 border-t px-4 py-3 flex justify-end gap-2">
                                        <PictureCarousel images={[ProjectPic, ProjectPic2, ProjectPic3]}></PictureCarousel>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                        <CardFooter className="gap-3 flex flex-row flex-wrap">
                            {
                                ['JavaScript', 'PHP', "MySQL", 'Wordpress'].map((tech) => {
                                    return(
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-full"
                                        >
                                        {tech}
                                    </Badge>
                                )})
                            }
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-bold text-lg mb-2">Student Profile Portal</CardTitle>
                            <CardDescription><img src={PortalPic}></img></CardDescription>
                        </CardHeader>
                        <CardContent className="mb-3">
                            <p>Aided in the development of this portal when interning at NUSGS. The main use of this project was for Graduate students to have a platform for them to better showcase their achievements and research. It is also intended for employers to be able to reach out to these students</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="btn btn-hover-blue mt-3">Find out more!</button>
                                </DialogTrigger>
                                <DialogContent className="flex flex-col max-h-[90vh]">
                                    <DialogHeader className="shrink-0 border-b px-4 py-3">
                                    <DialogTitle>Student Profile Portal</DialogTitle>
                                    </DialogHeader>
                                    <div className="overflow-y-auto px-4 py-3 grow">
                                        This Student Portal Project was the main project / product that I was working out throughout my time at NUSGS. The Student Portal was suppose to serve 2 purposes
                                        <br></br><br></br>
                                        1. A platform for graduate level students to showcase their profile and portfolio with aspects such as achievements, research and experiences
                                        <br></br><br></br>
                                        2. A place for employers to look for potential employees with the relevant skills/personnel that they are looking for
                                        <br></br><br></br>
                                        In the main dashboard, logged in users are able to search for students based on a variety of filters such as research topic. Users are also able to "like" the students and have a way to better track students that stand out to them. A messaging system has also been
                                        implemented for the various users to be able to reach out to students.
                                    </div>
                                    <DialogFooter className="shrink-0 border-t px-4 py-3 flex justify-end gap-2">
                                        <PictureCarousel images={[PortalPic]}></PictureCarousel>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                        <CardFooter className="gap-3 flex flex-row flex-wrap">
                            {
                                ['JavaScript', 'PHP', "MySQL", 'Wordpress', 'JWT'].map((tech) => {
                                    return(
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-full"
                                        >
                                        {tech}
                                    </Badge>
                                )})
                            }
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="relative font-bold text-lg mb-2 text-center mx-auto w-full self-center">Stock Tracker (WeBelieve)
                                <div className="absolute top-[-15px] right-[-15px]">
                                    <a style={{color: "black"}}className='cursor-pointer' target="_blank" href="https://github.com/prawnzyy/Orbital2023"><MarkGithubIcon size={20}/></a>
                                </div>
                            </CardTitle>
                            <CardDescription><img src={OrbitalPic}></img></CardDescription>
                        </CardHeader>
                        <CardContent className="mb-3">
                            <p>Developed a stock tracker and viewing mobile application as part of a school module. The main use was for people to have a central location to be able to discuss topics related to stocks and also have a way to keep track of them. Stock values are also looked up at real time using API</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="btn btn-hover-blue mt-3">Find out more!</button>
                                </DialogTrigger>
                                <DialogContent className="flex flex-col max-h-[90vh]">
                                    <DialogHeader className="shrink-0 border-b px-4 py-3">
                                    <DialogTitle>Stock Tracker (WeBelieve)</DialogTitle>
                                    </DialogHeader>
                                    <div className="overflow-y-auto px-4 py-3 grow">
                                        As an introduction to proper software engineering, me and my partner made a stock tracking mobile application to not only get ourselves more familiar with programming and proper software engineering methodologies, but also as a fun project to work on. We tried going with a different language framework and language to gain more
                                        experience and have more exposure.
                                    </div>
                                    <DialogFooter className="shrink-0 border-t px-4 py-3 flex justify-end gap-2">
                                        <PictureCarousel images={[OrbitalPic, OrbitalPic2]}></PictureCarousel>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                        <CardFooter className="gap-3 flex flex-row flex-wrap">
                            {
                                ['Flutter', 'Firebase', "Dart"].map((tech) => {
                                    return(
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-full"
                                        >
                                        {tech}
                                    </Badge>
                                )})
                            }
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="relative font-bold text-lg mb-2 text-center mx-auto w-full self-center">[Ba]king [Br]ead
                                <div className="absolute top-[-15px] right-[-15px]">
                                    <a style={{color: "black"}}className='cursor-pointer' target="_blank" href="https://github.com/AY2324S1-CS2103T-F10-3/tp"><MarkGithubIcon size={20}/></a>
                                </div>
                            </CardTitle>
                            <CardDescription><img src={BakingBread}></img></CardDescription>
                        </CardHeader>
                        <CardContent className="mb-3">
                            <p>A simple java project made by 5 students. It is made as part of our introduction to software engineering module where we learnt basic concepts such as SOLID.</p>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <button className="btn btn-hover-blue mt-3">Find out more!</button>
                                </DialogTrigger>
                                <DialogContent className="flex flex-col max-h-[90vh]">
                                    <DialogHeader className="shrink-0 border-b px-4 py-3">
                                    <DialogTitle>[Ba]king [Br]ead</DialogTitle>
                                    </DialogHeader>
                                    <div className="overflow-y-auto px-4 py-3 grow">
                                        Made as part of our introduction to software engineering module, it was a way for us to not only learn basic software engineering principles, but also get us used to working in a team setting.
                                        <br></br><br></br>
                                        While the project could have morphed into many other possibilities, we decided to attempt a recipe and ingredient storage system as someone on our team was an avid baker and thus the name [Ba]king [Br]ead as well.
                                        <br></br>
                                        <a className="btn btn-hover-blue self-center my-3" target="_blank" href="https://ay2324s1-cs2103t-f10-3.github.io/tp/"><File className="inline me-2"></File>Documentation</a>
                                    </div>
                                    <DialogFooter className="shrink-0 border-t px-4 py-3 flex justify-end gap-2">
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </CardContent>
                        <CardFooter className="gap-3 flex flex-row flex-wrap">
                            {
                                ['Java', 'JUnit', 'JavaFx'].map((tech) => {
                                    return(
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-full"
                                        >
                                        {tech}
                                    </Badge>
                                )})
                            }
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="relative font-bold text-lg mb-2 text-center mx-auto w-full self-center">Bumblebee Autonomous System (Website Developer)
                            </CardTitle>
                            <CardDescription><img src={BBLogo}></img></CardDescription>
                        </CardHeader>
                        <CardContent className="mb-3">
                            <p>While in school, I was also Bumblebee Autonomous System's Website Developer and Maintainer, an extra curricular activity (CCA) in NUS. My job was to design a new page for each competition featuring various aspects of the robot being used and showcased at the competition. Developed the pages from <span className="font-bold">2024-2025</span></p>
                            <a className="btn btn-hover-yellow my-3" target="_blank" href="https://bumblebee.sg/">Head to Website!</a>
                        </CardContent>
                        <CardFooter className="gap-3 flex flex-row flex-wrap">
                            {
                                ['JavaScript', 'Hugo', 'ROS 2'].map((tech) => {
                                    return(
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-full"
                                        >
                                        {tech}
                                    </Badge>
                                )})
                            }
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </CustomSection>
        </div>
    );
}

export default ProjectsPage