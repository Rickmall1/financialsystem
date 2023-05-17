import Header from "./components/layout/Header/Header";
import Container from "./components/layout/Container/Container";
import Hero from "./components/pages/Home/Hero/Hero";
import Partners from "./components/pages/Home/Partners/Partners";
import Dashboard from "./components/pages/Home/Dashboard/Dashboard";
import Footer from "./components/layout/Footer/Footer";


function Home() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Partners />
        <Dashboard />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
