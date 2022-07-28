import {Route, Routes, Navigate} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const App = () => {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Navigate to="/courses/" />} />
            </Routes>
        </>
    )
}

export default App;