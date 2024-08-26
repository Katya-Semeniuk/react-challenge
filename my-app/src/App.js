import css from './App.module.css';
import HTTPPost from './components/HTTPPost';
import NavBarForm from './components/NavBarForm';
import ContentAPI from './components/ContentAPI';



function App() {
  return (
    <div >
   <NavBarForm/>
  <HTTPPost/>
  <ContentAPI/>
    </div>
  );
}

export default App;