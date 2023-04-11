import Dashboard from "../../components/Home/Dashboard/Dashboard";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/Header/Header";
import Hero from "../../components/Home/Hero/Hero";
import Partners from "../../components/Home/Partners/Partners";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Dashboard />
      <Footer />
    </>
  );
}

export default Home;
