import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ChaptersAccordion from "../../Components/Chapters/ChaptersAccordion";
import { useDispatch, useSelector } from "react-redux";
import { chapterContentFetch, courseFetch } from "../../store/courseSlice";
import CenterLoader from "../../Components/Loding/CenterLoader";

const Course = () => {
    const dispatch = useDispatch()
    const { courseId } = useParams()

    useEffect(() => {
        dispatch(courseFetch(parseInt(courseId)))
    }, [])

    const getChapterContent = (chapterId) => {
        dispatch(chapterContentFetch(chapterId))
    }

    const { item: course, chapterData: chapter, loading } = useSelector((state) => state.course)

    return (
        <>
            {loading && <CenterLoader />}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{course?.title}</h1>
                    </div>
                    <hr />
                    <div className="col-md-12 my-3">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">نام مدرس:</th>
                                    <td>{course?.owner_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">قیمت:</th>
                                    <td>{course?.price === 0 ? "رایگان" : course?.price?.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <th scope="row">موضوعات:</th>
                                    <td>
                                        {
                                            course?.subjects?.map(subject => (
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
                    <div className="col-md-4 my-3">
                        <div className="border rounded p-2">
                            <button className="btn btn-outline-primary w-100">
                                <i className="fas fa-graduation-cap me-2"></i>
                                شرکت در دوره
                                </button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h1>فصل ها</h1>
                    </div>
                    <div className="col-md-12 my-3">
                        <div className="accordion" id="accordionExample">
                            {
                                course?.chapters?.map((c) => (
                                    <ChaptersAccordion
                                        key={c.id}
                                        chapter={c}
                                        getChapterContent={getChapterContent}
                                        chapterDetail={chapter}
                                    />
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