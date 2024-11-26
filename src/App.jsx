import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";
import Appbar from "./Appbar.jsx";
import AddCourse from "./AddCourse.jsx";

function App() {

  // it is beeter to write comments outside return curly braces makes sure comments do not break the
  // jsx syntax
    return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"}}
        >
        {/* two write comments inside return you have to turn use curly braces so it is treated as javascript
    anything inside double curly braces is object for example the style style has a json of attributes    
    jsx requires braces to embeded*/}
            <Router>
                <Appbar />
                <Routes>
                    <Route path={"/addcourse"} element={
                        <AddCourse />} />
                    <Route path={"/signin"} element={<Signin />} />
                    <Route path={"/signup"} element={<Signup />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;