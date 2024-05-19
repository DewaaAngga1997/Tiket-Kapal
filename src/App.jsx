import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <h1 className="text-3xl font-bold text-red-400 underline">
        Hello world!
      </h1>
    </>
  );
}
