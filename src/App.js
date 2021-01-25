
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profiles from './components/Profile/Profiles';
import Mypost from './components/Profile/Myposts/post/Mypost';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Router } from 'react-router-dom';


const App = () => {
  return ( <BrowserRouter>
  <div className="app-wrapper">
    <Header />
    <Navbar />
    <div className="app-wrapper-content">
    <Route path="/dialogs"  component={Dialogs} />
    <Route path="/profiles" component= {Profiles} />
    </div>
    </div>
    </BrowserRouter>
    
   );   
}

export default App;
