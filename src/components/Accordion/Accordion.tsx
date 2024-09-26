interface AccordionProps {
    children: React.ReactNode;
    title: string;
    id: string | number;
}

function Accordion({children, id, title}: AccordionProps) {
    return(
        <div className="accordion accordion-flush border-bottom"
             id={`accordion-flush-${id}`}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed bg-light" type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#flush-collapseOne-${id}`}
                            aria-expanded="false"
                            aria-controls={`flush-collapseOne-${id}}`}>
                        {title}
                    </button>
                </h2>
                <div id={`flush-collapseOne-${id}`}
                     className="accordion-collapse collapse"
                     aria-labelledby="flush-headingOne">
                    <div className="accordion-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion;
