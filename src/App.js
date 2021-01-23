
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profiles from './components/Profile/Profiles';
import Mypost from './components/Profile/Myposts/post/Mypost';


const App = () => {
  return (<div className="app-wrapper">
    <Header />
    <Navbar />
    <Profiles />
</div>);   
}

export default App;
