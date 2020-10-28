import React, { useEffect, useState } from 'react';

const PrevNextBtn = (props) => {
    const { itemsPerPage, onPaginationChange, totalItems } = props;
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        const value = itemsPerPage * counter;
        onPaginationChange(value - itemsPerPage, value);
      }, [counter]);

      const numberOfBtn = Math.ceil(totalItems / itemsPerPage);
      const onButtonClick = (btn) =>{
          if(btn === "previous"){
              if(counter === 1){
                  setCounter(1)
              }else{
                  setCounter(counter - 1)
              }
          }
          else if(btn === "next"){
              if(counter === numberOfBtn){
                    setCounter(counter);
              }else{
                  setCounter(counter + 1)
              }
          }
      }
    return (
        <div className="d-flex justify-content-around">
             <nav aria-label="Page navigation example">
        <ul className="pagination" style={{ cursor: "pointer" }}>
          <li
            className="page-item page-link"
            onClick={() => onButtonClick("previous")}
          >
            Previous
          </li>
          {new Array(numberOfBtn).fill().map((element, index) => (
            <li
              className={`page-item ${index + 1 === counter ? "active" : null}`}
              key={index}
            >
              <a className="page-link" onClick={() => setCounter(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li
            className="page-item page-link"
            onClick={() => onButtonClick("next")}
          >
            Next
          </li>
        </ul>
      </nav>
      </div>
    );
};

export default PrevNextBtn;