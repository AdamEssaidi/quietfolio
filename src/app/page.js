import About from "./components/About";
import AdditionalDetails from "./components/AdditionalDetails";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";

export default function Home() {
    return (
        <main id="main-content" className="pb-4">
            <Profile />
            <About />
            <ProjectsList />
            <Experience />
            <TechLists />
            <Education />
            <AdditionalDetails />
        </main>
    );
}
