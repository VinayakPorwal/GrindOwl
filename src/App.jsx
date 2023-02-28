import { useState, useEffect, useContext, createContext } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
// import Home from "./components/Home";
import Team from "./components/Team";
import Project from "./components/project";
// import Footer from "./components/Footer";
import Weather from "./components/projects/weather";
import Login from "./components/login";
import Member from "./components/member";
import Profile from "./components/profile";
import Signup from "./components/signup";
import Post from "./components/Post";
import HomePage from "./components/HomePage";
import ImageClassifier from "./components/projects/ImageClassifier";

export const UserContext = createContext();
function App() {
  const [user, setUser] = useState();
  const [mode, setMode] = useState("lightbulb");
  var [bgcolor, setBgcolor] = useState("#252525");
  var [Pcolor, setPcolor] = useState("white");
  var [SecondaryColor, setSecondaryColor] = useState("#111111");
  var [token, setToken] = useState(0);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    Wallet: "",
    Bio: "",
  });

  useEffect(async () => {
    setUser(sessionStorage.getItem("Loggedin"));
    if (user) {
      console.log("Loggedin");
    }
  }, [user]);

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    // document.getElementById("teamimg").style.width = '-5 + "%"';
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        setToken,
        token,
        user,
        myFunction,
        bgcolor,
        Pcolor,
        SecondaryColor,
      }}
    >
      <BrowserRouter>
        <div
          style={{ position: "fixed", top: "0px", width: "100vw", zIndex: "2" }}
        >
          <Navbar
            user={user}
            setUser={setUser}
            bgcolor={bgcolor}
            setBgcolor={setBgcolor}
            Pcolor={Pcolor}
            setPcolor={setPcolor}
            setSecondaryColor={setSecondaryColor}
            SecondaryColor={SecondaryColor}
            mode={mode}
            setMode={setMode}
          />
        </div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            path="/signup"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/post" element={<Post />} />
          <Route path="/team" element={<Team />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<ImageClassifier />} />
        </Routes>

        {/* <Footer /> */}
        <Member />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
