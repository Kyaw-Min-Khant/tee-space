import React, { useState } from 'react';

import img5 from '../HomeImg/Third/banner-5.png';
import img6 from '../HomeImg/Third/banner-6.png';
import img7 from '../HomeImg/Third/banner-7.png';
import img8 from '../HomeImg/Third/banner-8.png';
import { reuseableCss } from '../class';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(2);// Set the initial active accordion to the first one (id: 1)

  const handleAccordionClick = (id) => {
    setActiveAccordion(id);
  };

  const accordionData = [
    {
      id: 1,
      number: 'first',
      title: 'Premium quality custom t-shirts',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic, quaerat neque eaque accusantium',
      image: img5,
    },
    {
      id: 2,
      number: 'second',
      title: 'Easy to create & customize',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic, quaerat neque eaque accusantium',
      image: img6,
    },
    {
      id: 3,
      number: 'three',
      title: 'Thousands of free templates',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic, quaerat neque eaque accusantium',
      image: img7,
    },
    {
      id: 4,
      number: 'four',
      title: 'Free standard shipping',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo hic, quaerat neque eaque accusantium',
      image: img8,
    },
  ];

  const accordionItems = accordionData.map((item) => (
    <li key={item.id}>
      <input
        type="radio"
        id={item.number}
        name="accordion"
        checked={activeAccordion === item.id}
        onChange={() => handleAccordionClick(item.id)}
      />
      <label htmlFor={item.number}>{item.title}</label>
      <div className={`content-text`}>
        <h6 className={`${reuseableCss.p}`}>
          {item.description}
        </h6>
      </div>
    </li>
  ));

  return (
    <div className="pt-[5%] pb-[4%] w-full h-full flex flex-row-reverse items-center">
      <div className="p-0 lg:p-[15px] xl:container mx-auto flex flex-col-reverse sm:flex-col-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse items-center">
        <div className="p-0 sm:px-0 md:px-[10px] lg:px-[15px] xl:p-[5px] sm:[10px] md:p-[15px] lg:p-[15px] w-full sm:w-full md:w-[60%] lg:w-[60%] xl:w-[60%] h-full">
          <div className="">
            <div className="p-0 sm:pr-0 md:pr-[7%] lg:pr-[10%] xl:pr-[10%]">
              <img
                src={accordionData[activeAccordion - 1].image}
                className="w-[100%] h-auto"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="p-[15px] w-full sm:w-full md:w-[40%] lg:w-[40%] xl:w-[40%] h-full">
          <div className="">
            <ul className="custom-accordion">{accordionItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
