import React, { useState } from 'react';


type Question = {
  id: string;
  question: string;
  answer: string;
};

const AccordionComponent: React.FC = () => {
  const [accordionData] = useState<Question[]>([
    { id: 'one', question: ' How will FDI impact global economic development by 2025? ', answer: 'FDI is expected to reshape the global economic landscape significantly by 2025. It will foster economic interdependence, enhance global trade, and drive technology and expertise transfer. As the world becomes more interconnected, FDI will play a crucial role in stimulating economic growth, driving innovation, and encouraging international collaboration. Participating in AIM Congress 2025 will provide valuable insights into these trends and facilitate networking opportunities with key stakeholders, enhancing your ability to leverage FDI effectively. ' },
    { id: 'two', question: 'What are the main benefits of FDI for emerging markets? ', answer: 'FDI brings capital, technology, and management know-how to emerging markets, which boosts local industry standards, creates jobs, and increases productivity. It enhances competitiveness by integrating these markets into global supply chains, allowing local businesses to access international markets and compete globally. Additionally, FDI helps diversify economies, making them more resilient to economic shocks. AIM Congress 2025 will showcase successful FDI strategies and provide a platform for emerging markets to connect with investors, maximizing the benefits of foreign investment. ' },
    { id: 'three', question: ' How does FDI contribute to social development? ', answer: 'FDI promotes social development by facilitating the transfer of best practices in corporate governance, environmental sustainability, and social responsibility. Companies investing abroad often bring high standards in these areas, which can lead to improvements in local business practices and contribute to broader social progress. AIM Congress 2025 will highlight successful case studies and initiatives where FDI has driven social development, offering attendees valuable lessons and inspiration to apply in their own contexts. ' },
    { id: 'four', question: 'What emerging trends are shaping the FDI landscape?', answer: 'Key trends influencing FDI include digital transformation, the shift towards green and sustainable investments, and the rise of new economic powers. Digitalization is driving investment in sectors like fintech and e-commerce, while sustainability is guiding investments towards renewable energy and clean technologies. Geopolitical dynamics are also influencing FDI as countries use it for economic diplomacy and to build strategic partnerships. AIM Congress 2025 will address these emerging trends, providing attendees with cutting-edge insights and opportunities to align their FDI strategies with the latest developments in the global market. ' }
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
