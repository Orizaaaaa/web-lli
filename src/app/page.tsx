import ButtonPrimary from "./components/elements/buttonPrimary";
import Home from "./organism/home";
import NewEvents from "./organism/newEvent";
import News from "./organism/news";


export default function LandingPage() {
  return (
    <main>
      <Home />
      <News />
      <NewEvents />
    </main>
  );
}
