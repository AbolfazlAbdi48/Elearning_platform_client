import {useSelector} from "react-redux";

const Profile = () => {
    const {user, isLoggedIn} = useSelector((state) => state.auth)

    if (!isLoggedIn) {
        return null
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <h4>{user.first_name} خوش آمدی</h4>
                    <hr/>
                    <h6>نام: {user.first_name}</h6>
                    <h6>نام خانوادگی: {user.last_name}</h6>
                    <h6>ایمیل: {user.email}</h6>
                </div>
            </div>
        </div>
    )
}

export default Profile;