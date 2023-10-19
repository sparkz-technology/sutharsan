import Navbar from "../features/Navbar/Navbar";
import Home from "../features/Home/Home";
import About from "../features/About/About";
import Skills from "../features/Skills/Skills";
import Projects from "../features/Projects/Projects";
import Contact from "../features/Contact/Contact";
import Footer from "../features/Footer/Footer";
import useGetUserDetails from "../features/Data/useGetUserDetails";

function AppLayout() {
  const { isFetching } = useGetUserDetails()
  if (isFetching) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default AppLayout;
