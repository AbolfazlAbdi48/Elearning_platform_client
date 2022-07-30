import {Route, Routes, Navigate} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Courses from "./Pages/Courses/Courses";
import Course from "./Pages/Courses/Course";

const App = () => {
    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Navigate to="/courses/"/>}/>
                <Route path="/courses/" element={<Courses/>}/>
                <Route path="/courses/:courseId/:slug" element={<Course/>}/>
            </Routes>
        </>
    )
}

export default App;