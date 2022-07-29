import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getCourse} from "../../Services/courseServices";
import ChaptersAccordion from "../../Components/Chapters/ChaptersAccordion";

const Course = () => {
    const [course, setCourse] = useState([])

    const {id: courseId} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: courseData} = await getCourse(parseInt(courseId))
                setCourse(courseData)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{course.title}</h1>
                    </div>
                    <hr/>
                    <div className="col-md-12 my-3">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">سربرگ</th>
                                <th scope="col">اطلاعات</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">نام مدرس:</th>
                                <td>{course.owner_name}</td>
                            </tr>
                            <tr>
                                <th scope="row">قیمت:</th>
                                <td>{course.price}</td>
                            </tr>
                            <tr>
                                <th scope="row">موضوعات:</th>
                                <td>
                                    {
                                        course.subjects?.map(subject => (
                                            <Link
                                                key={subject.id}
                                                to={`/subjects/${subject.id}`}
                                                className="badge bg-success m-1"
                                            >
                                                {subject.title}
                                            </Link>
                                        ))
                                    }
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-12">
                        <h1>فصل ها</h1>
                    </div>
                    <div className="col-md-12 my-3">
                        <div className="accordion" id="accordionExample">
                            {
                                course.chapters?.map((c) => (
                                    <ChaptersAccordion key={c.id} chapter={c}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course;