import PreloadSpinner from '../components/PreloadSpinner.jsx';
import Header from '../components/header/Header.jsx';
import Hero from '../components/Hero.jsx';

function LandingPage() {
  return (
    <div id='page' className='page'>
      <PreloadSpinner />
      <Header />
      <Hero />
    </div>
  )
}

export default LandingPage;
