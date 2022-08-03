import {Route, Routes, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Courses from "./Pages/Courses/Courses";
import Course from "./Pages/Courses/Course";
import {useEffect} from "react";
import {authActions} from "./store/authSlice";
import {getCurrentUser} from "./Services/courseServices";
import Login from "./Pages/Register/Login";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token")
            if (token) {
                try {
                    const user = await getCurrentUser(token)
                    if (user.status === 200) {
                        dispatch(authActions.login(user.data))
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        }

        fetchUser()
    }, [dispatch])

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    return (
        <>
            <NavigationBar/>
            <Routes>
                <Route path="/" element={<Navigate to="/courses/"/>}/>
                <Route path="/courses/" element={<Courses/>}/>
                <Route path="/courses/:courseId/:slug" element={<Course/>}/>
                {!isLoggedIn && <Route path="/auth/login" element={<Login/>}/>}
            </Routes>
        </>
    )
}

export default App;