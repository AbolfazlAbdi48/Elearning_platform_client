import {Route, Routes, Navigate} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Courses from "./Pages/Courses/Courses";

const App = () => {
    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Navigate to="/courses/"/>}/>
                <Route path="/courses/" element={<Courses/>}/>
            </Routes>
        </>
    )
}

export default App;