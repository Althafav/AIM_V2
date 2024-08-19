import React, { useState } from 'react';

type AccordionItem = {
  id: string;
  heading: string;
  content: string;
};

type AccordionProps = {
  data: AccordionItem[];
};

const AccordionComponent: React.FC<AccordionProps> = ({ data }) => {


  return (
    <div className="accordion" id="accordionExample">
      {data.map((item: any, index: number) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? 'true' : 'false'}
              aria-controls={`collapse${item.id}`}
            >
              {item.heading}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
