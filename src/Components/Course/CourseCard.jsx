import {Link} from "react-router-dom";

const CourseCard = ({course}) => {
    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <h5 className="card-header">{course.title}</h5>
                <div className="card-body">
                    <p className="card-text">{course.description}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">مدرس: {course.owner_name}</li>
                        <li className="list-group-item">تعداد فصل ها: {course.chapters_count} فصل</li>
                        <li className="list-group-item">قیمت: {course.price.toLocaleString()} تومان</li>
                    </ul>
                    <div>
                        {
                            course.subjects.map(subject => (
                                <Link
                                    key={subject.id}
                                    to={`/subjects/${subject.id}`}
                                    className="badge bg-success m-2">
                                    {subject.title}
                                </Link>
                            ))
                        }
                    </div>
                    <Link
                        to={`/courses/${course.id}/${course.slug}`}
                        className="btn btn-primary"
                    >
                        اطلاعات بیشتر
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;