import React, { useState } from 'react';


type Question = {
  id: string;
  question: string;
  answer: string;
};

const AccordionComponent: React.FC = () => {
  const [accordionData] = useState<Question[]>([
    { id: 'one', question: 'Question 1', answer: 'This is the dummy answer to Question 1.' },
    { id: 'two', question: 'Question 2', answer: 'This is the dummy answer to Question 2.' },
    { id: 'three', question: 'Question 3', answer: 'This is the dummy answer to Question 3.' },
  ]);

  return (
    <div className="accordion" id="accordionExample">
      {accordionData.map((item, index) => (
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
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
