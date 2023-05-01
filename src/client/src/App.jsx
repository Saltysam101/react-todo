import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome.page.jsx";
import SignupPage from "./pages/signup.page.jsx";
import LoginPage from "./pages/login.page.jsx";
import './styles/global.css';
function App() {
  

  return (
    <Router>
     <Routes>
      <Route path="/" exact Component={WelcomePage}/>
      <Route path="/register" Component={SignupPage} />
      <Route path="/login" Component={LoginPage} />
     </Routes>
    </Router>
  );
}

export default App;
