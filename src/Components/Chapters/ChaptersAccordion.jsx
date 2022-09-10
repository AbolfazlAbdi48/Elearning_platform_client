import { Link } from "react-router-dom";

const ChaptersAccordion = ({ chapter, getChapterContent, chapterDetail }) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={`chapter-${chapter?.id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target={`#chapter-collapse-${chapter?.id}`} aria-expanded="false"
                        aria-controls={`chapter-collapse-${chapter?.id}`}
                        onClick={() => getChapterContent(chapter?.id)}>
                        {chapter?.title}
                    </button>
                </h2>
                <div
                    id={`chapter-collapse-${chapter?.id}`} className="accordion-collapse collapse"
                    aria-labelledby={`chapter-${chapter?.id}`}
                    data-bs-parent="#accordionExample"
                >
                    {
                        chapterDetail?.contents ? (
                            <div className="accordion-body">
                                درباره فصل: {chapterDetail?.description}
                                <h4>محتوای فصل:</h4>
                                <div className="card">
                                    <div className="card-body">
                                        {
                                            chapterDetail?.contents?.length > 0 ?
                                                chapterDetail?.contents?.map(content => (
                                                    <Link key={content.id} to="">{content.title}</Link>
                                                ))
                                                : (<p>محتوایی آپلود نشده</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : undefined
                    }
                </div>
            </div>
        </>
    )
}

export default ChaptersAccordion;