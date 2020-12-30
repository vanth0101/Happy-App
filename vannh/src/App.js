import Header from './components/header.js';
import Footer from './components/footer.js';
import Menu from './components/commonMenu.js';
import LoginForm from './components/loginForm.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="main flex">
        <Menu/>
        <LoginForm/>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
