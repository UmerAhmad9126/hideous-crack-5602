import Navbar from './Components/Navbar';
import LandingTopSection from './Components/LandingTopSection';
// import { Login } from './Components/Login';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login></Login> */}
      <LandingTopSection />
      <Footer />
    </div>
  );
}

export default App;
