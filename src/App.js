import "./App.css";
import Body from "./Body/Body";
import Sidebar from "./SideBar/Sidebar";
import Header from "./Header/Header";
function App() {
  return (
    <div className="main-container">
      <div>
        <Header />
      </div>
      <div className="sidebar-body-container">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
