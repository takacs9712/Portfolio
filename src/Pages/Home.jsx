import Sidenav from "../components/Sidenav";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Languages from "../components/Languages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
