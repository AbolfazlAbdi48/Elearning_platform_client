import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../Services/courseServices";
import {useDispatch} from "react-redux";
import {authActions} from "../../store/authSlice";
import {hideLoading, showLoading} from "react-redux-loading-bar";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const reset = () => {
        setUsername("")
        setPassword("")
    }

    const handleLoginForm = async (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }

        try {
            console.log(user)
            const {status, data} = await loginUser(user)
            if (status === 200) {
                dispatch(showLoading())
                localStorage.setItem("token", data.key)
                reset()
                dispatch(authActions.login(data))
                navigate('/')
                dispatch(hideLoading())
            }
        } catch (err) {
            setErrors(err.response.data)
            dispatch(hideLoading())
        }
    }

    return (
        <div className="container my-5">
            <h2 className="fw-bold">ورود به حساب</h2>
            <form onSubmit={handleLoginForm} autoComplete="off">
                <div className="row">
                    <div className="col-md-12 my-2">
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => setUsername(e.target.value)}
                            placeholder="نام کاربری"
                        />
                    </div>
                    <div className="col-md-12 mb-2">
                        <input
                            type="password"
                            className="form-control"
                            onChange={e => setPassword(e.target.value)}
                            placeholder="رمز عبور"
                        />
                        {
                            errors ? (
                                <ul>
                                    {errors.non_field_errors?.map((error, index) => (
                                        <li key={index} className="text-danger">{error}</li>
                                    ))}
                                </ul>
                            ) : undefined
                        }
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-outline-success">ورود</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;