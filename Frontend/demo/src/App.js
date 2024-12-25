import Home from './Components/Home';
import About from './Components/About';
import Contribute from './Components/Contribute';
import Materials from './Components/Materials';
import Navbar from './Components/Navbar';

const App = () => {
    return(
       <div>
           <Navbar />
           <Home />
           <About />
           <Materials />
           <Contribute />
       </div>
    )
}
export default App;