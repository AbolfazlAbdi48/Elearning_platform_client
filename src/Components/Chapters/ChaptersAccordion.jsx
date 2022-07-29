import {Link} from "react-router-dom";

const ChaptersAccordion = ({chapter}) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`chapter-${chapter.id}`}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target={`collapse-${chapter.id}`} aria-expanded="true"
                        aria-controls={`collapse-${chapter.id}`}>
                    {chapter.title}
                </button>
            </h2>
            <div id={`collapse-${chapter.id}`} className="accordion-collapse collapse show"
                 aria-labelledby={`chapter-${chapter.id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h4>
                        دباره فصل: {chapter.description}
                    </h4>
                    <h4>محتوای فصل:</h4>
                    <div className="card">
                        <div className="card-body">
                            {
                                chapter.contents?.map(content => (
                                    <Link key={content.id} to="">{content.title}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChaptersAccordion;