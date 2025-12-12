import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
          <HeroSection></HeroSection>
      </main>
      <footer>
        this is footer
      </footer>
    </div>
  );
}
