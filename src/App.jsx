
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import WhyAttend from './components/WhyAttend';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Location from './components/Location';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#f2f2f1] min-h-screen">
      <Hero />
      <About />
      <Pillars />
      <WhyAttend />
      <Speakers />
      <Agenda />
      <Location />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
