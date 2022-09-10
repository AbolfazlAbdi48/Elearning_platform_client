import { useSelector } from "react-redux";
import CourseCard from "../../Components/Course/CourseCard";
import CenterLoader from "../../Components/Loding/CenterLoader";

const Courses = () => {
    const { coursesList: courses, loading } = useSelector((state) => state.courses)

    return (
        <>
            {loading && <CenterLoader />}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mb-4 fw-bold">دوره های ما</h2>
                    </div>
                    {
                        courses.map(course => (
                            <CourseCard key={course.id} course={course} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Courses;