import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StudyPrograms from "./Components/StudyPrograms";
import EnglishCoursesSection from "./Components/EnglishCoursesSection";
import EnglishCoursesHero from "./Components/EnglishCoursesHero";
import TrySomethink from "./Components/TrySomethink";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
          
          <StudyPrograms></StudyPrograms>
          <section>
            <EnglishCoursesSection></EnglishCoursesSection>
          </section>
          <section>
            <EnglishCoursesHero></EnglishCoursesHero>
          </section>
          <section>
            <TrySomethink></TrySomethink>
          </section>
      </main>
      <footer>
        this is footer
      </footer>
    </div>
  );
}
