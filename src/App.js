import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  console.log("hello this is test");
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
