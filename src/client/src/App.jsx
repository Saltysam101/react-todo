import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome.page.jsx";
import SignupPage from "./pages/signup.page.jsx";
import LoginPage from "./pages/login.page.jsx";
import TodoPage from "./pages/todo.page.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";
import './styles/global.css';
function App() {
  

  return (
    <Router>
     <Routes>
      <Route path="/" exact Component={WelcomePage}/>
      <Route path="/register" Component={SignupPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/todo" Component={ProtectedRoute} >
        <Route path="/todo" Component={TodoPage} />
      </Route>
     </Routes>
    </Router>
  );
}

export default App;
