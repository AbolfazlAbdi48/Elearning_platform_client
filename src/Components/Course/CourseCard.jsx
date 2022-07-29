import {Link} from "react-router-dom";

const CourseCard = ({course}) => {
    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <h5 className="card-header">اسم دوره</h5>
                <div className="card-body">
                    <p className="card-text">توضیحات</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">مدرس:</li>
                        <li className="list-group-item">تعداد فصل ها:</li>
                        <li className="list-group-item">قیمت:</li>
                    </ul>
                    <div>
                        <Link to="#" className="badge bg-success my-2">طراحی</Link>
                    </div>
                    <Link to="#" className="btn btn-primary">اطلاعات بیشتر</Link>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;