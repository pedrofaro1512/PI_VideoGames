import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./components/Navbar/Navbar";
import { Home, Landing, Detail, Form } from "./views";
import { Route } from "react-router-dom";
import axios from 'axios';

axios.defaults.baseURL= 'http://localhost:3001';

function App() {

  const location = useLocation();
  
  return (
    <div>
      {location.pathname !== "/" && <Navbar.Navbar />}

      <Route exact path="/" component={Landing} />

      <Route path="/home" component={Home} />

      <Route path="/detail/:id" component={Detail} />
      
      <Route path="/create" component={Form} />
      
    </div>
  );
}

export default App;
