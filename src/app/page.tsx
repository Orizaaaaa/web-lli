import ButtonPrimary from "./components/elements/buttonPrimary";
import About from "./organism/about";
import Footer from "./organism/footer";
import Galery from "./organism/galery";
import Home from "./organism/home";
import NewEvents from "./organism/newEvent";
import News from "./organism/news";


export default function LandingPage() {
  return (
    <main>
      <Home />
      <News />
      <NewEvents />
      <Galery />
      <About />
      <Footer />
    </main>
  );
}
