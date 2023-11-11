import Navbar from "../features/Navbar/Navbar";
import Home from "../features/Home/Home";
import About from "../features/About/About";
import Skills from "../features/Skills/Skills";
import Projects from "../features/Projects/Projects";
import Footer from "../features/Footer/Footer";
import useGetUserDetails from "../features/Data/useGetUserDetails";
import Loader from "../ui/Loader";


function AppLayout() {
  const { isFetching } = useGetUserDetails()
  if (isFetching) {
    return <Loader />
  }
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default AppLayout;
