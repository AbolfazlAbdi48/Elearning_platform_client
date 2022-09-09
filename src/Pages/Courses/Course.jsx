import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getChapter, getCourse } from "../../Services/courseServices";
import ChaptersAccordion from "../../Components/Chapters/ChaptersAccordion";
import { useDispatch, useSelector } from "react-redux";
import { courseFetch } from "../../store/courseSlice";

const Course = () => {
    const [chapter, setChapter] = useState([])
    const dispatch = useDispatch()
    const { courseId } = useParams()

    useEffect(() => {
        dispatch(courseFetch(parseInt(courseId)))
    }, [])

    const { item: course } = useSelector((state) => state.course)

    const getChapterContent = async (chapterId) => {
        try {
            const { data: chapterData } = await getChapter(chapterId)
            setChapter(chapterData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{course?.title}</h1>
                        <button className="btn btn-outline-primary my-2">
                            افزودن به سبد خرید
                        </button>
                    </div>
                    <hr />
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
                                    <td>{course?.owner_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">قیمت:</th>
                                    <td>{course?.price === 0 ? "رایگان" : course?.price}</td>
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