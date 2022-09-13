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
                                <h4 className="my-2">محتوای فصل:</h4>
                                <div className="card">
                                    <div className="card-body">
                                        {
                                            chapterDetail?.contents?.length > 0 ?
                                                chapterDetail?.contents?.map(content => (
                                                    <div
                                                        key={content.id}
                                                        className="d-flex justify-content-between align-items-center
                                                         flex-column flex-sm-row border-bottom pb-3 mb-3"
                                                    >
                                                        <p>
                                                            <strong>{content.title} </strong>
                                                            - <small>{content.description}</small>
                                                        </p>
                                                        <span>
                                                            00:20:13
                                                            <i className="fas fa-clock ms-1"></i>
                                                        </span>
                                                    </div>
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