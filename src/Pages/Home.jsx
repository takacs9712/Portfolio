import Sidenav from "../components/Sidenav";
import Main from "../components/Main";
import About from "../components/About";
import Projects from "../components/Projects";
import Languages from "../components/Languages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { SubjectProvider } from "../components/SubjectContext";

const Home = () => {
  return (
    <SubjectProvider>
      <Sidenav />
      <Main />
      <About />
      <Projects />
      <Languages />
      <Contact />
      <Footer />
    </SubjectProvider>
  );
};

export default Home;
