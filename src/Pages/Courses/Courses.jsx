import {useState, useEffect} from "react";
import {getCourses} from "../../Services/courseServices";
import CourseCard from "../../Components/Course/CourseCard";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: coursesData} = await getCourses()
                setCourses(coursesData)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mb-4 fw-bold">دوره های ما</h2>
                    </div>
                    {
                        courses.map(course => (
                            <CourseCard key={course.id} course={course}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Courses;