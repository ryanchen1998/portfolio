import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
