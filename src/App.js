import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="page-container">
      <NavbarComp/>
      <div className="content-wrap">

      </div>
      <Footer/>
    </div>
  );
}

export default App;
