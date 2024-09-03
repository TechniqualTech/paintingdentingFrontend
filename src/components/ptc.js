import React, { useState } from 'react';

export default function Ptc() {
  const [childDivs, setChildDivs] = useState([
    <div>Child 1</div>,
    <div>Child 2</div>,
    <div>Child 3</div>,
    <div>Child 4</div>,
    <div>Child 5</div>,
    <div>Child 6</div>,
    <div>Child 7</div>,
    <div>Child 8</div>,
    <div>Child 9</div>,
    <div>Child 10</div>,
    <div>Child 11</div>,
    <div>Child 12</div>,
    <div>Child 13</div>,
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [divsPerPage, setDivsPerPage] = useState(4);

  const indexOfLastDiv = currentPage * divsPerPage;
  const indexOfFirstDiv = indexOfLastDiv - divsPerPage;
  const currentDivs = childDivs.slice(indexOfFirstDiv, indexOfLastDiv);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentDivs.map((div, index) => (
        <div key={index}>{div}</div>
      ))}
      <div>
        <button onClick={() => paginate(1)}>1</button>
        <button onClick={() => paginate(2)}>2</button>
        <button onClick={() => paginate(3)}>3 </button>

        {/* Add more page buttons as needed */}
      </div>
    </div>
  );
}