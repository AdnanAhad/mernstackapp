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
import Userplaces from "./places/pages/Userplaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";

function App() {
  console.log("hello this is test");
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/:userId/places" element={<Userplaces />} />
          <Route path="/users" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
