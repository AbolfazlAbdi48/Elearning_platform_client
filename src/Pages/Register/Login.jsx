import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFetch } from "../../store/authSlice";
import CenterLoader from "../../Components/Loding/CenterLoader";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLoginForm = (e) => {
        e.preventDefault()
        const data = { username, password }
        dispatch(loginFetch({ data, navigate }))
    }

    const { loading, errors } = useSelector((state) => state.auth)

    return (
        <>
            {loading && <CenterLoader />}
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 bg-white p-3 rounded-3 border text-center">
                        <h4 className="fw-bold">ورود به حساب</h4>
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
                                <div className="col-md-12 mb-1">
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
                                                    <li key={index} className="text-danger my-1">{error}</li>
                                                ))}
                                            </ul>
                                        ) : undefined
                                    }
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-outline-success w-100">ورود</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;