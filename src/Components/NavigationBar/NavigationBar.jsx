import {NavLink, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/authSlice";
import LoadingBar from "react-redux-loading-bar";

const NavigationBar = () => {
    const user = useSelector((state) => state.auth.user)
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const dispatch = useDispatch()

    const logoutHandler = () => {
        localStorage.removeItem("token")
        dispatch(authActions.logout())
    }

    const activeLink = ({isActive}) => {
        return isActive ? "nav-link active" : "nav-link "
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <LoadingBar style={{backgroundColor: 'red', height: "5px"}}/>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/courses/">پلتفرم آموزشی</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={activeLink}
                                    to="/courses/"
                                >
                                    دوره های آموزشی</NavLink>
                            </li>
                            {
                                isLoggedIn ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                className={activeLink}
                                                to="/auth/account"
                                            >
                                                سلام, {user.first_name}
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <span
                                                className="nav-link"
                                                onClick={logoutHandler}
                                            >
                                                خروج
                                            </span>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink
                                                className={activeLink}
                                                to="/auth/login"
                                            >
                                                ورود
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink
                                                className={activeLink}
                                                to="/auth/register"
                                            >
                                                ثبت نام
                                            </NavLink>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;