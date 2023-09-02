import React, { useState, useRef, useEffect } from "react";
import "./CarouselNum.css";
// css 1
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
// Cards
function CarouselNum({ valuesPage }) {
  const otherElementRef = useRef(null);
  const [num3, setNum3] = useState(2);
  const [num4, setNum4] = useState(3);
  const [num5, setNum5] = useState(4);
  const [num6, setNum6] = useState(5);
  const [num7, setNum7] = useState(6);
  const [num8, setNum8] = useState(7);
  const [num9, setNum9] = useState(8);
  const [num10, setNum10] = useState(9);
  const [num11, setNum11] = useState(10);
  const [selectedNum, setSelectedNum] = useState("a");
  const [selectedPage, setSelectedPage] = useState("1");
  const [numTrue, setNumTrue] = useState(true);
  const [numlp, setNumlp] = useState(null);
  const [numRefp, setNumRefp] = useState(7);
  const [numRefl, setNumRefl] = useState(6);

  useEffect(() => {
    if (otherElementRef.current && numlp === "l") {
      const values = parseFloat(otherElementRef.current.getAttribute("values"));
      // console.log(values);

      setNumRefl(values - 1);
      setNumRefp(values + 1);
    }
    if (otherElementRef.current && numlp === "p") {
      const values = parseFloat(otherElementRef.current.getAttribute("values"));
      setNumRefp(values + 1);
      setNumRefl(values - 1);
    }
  }, [numTrue]);
  //   console.log(selectedPage);

  function valuesNum(e) {
    const valNumlp = e.target.closest("div").getAttribute("values");
    if (valNumlp === "p") {
      if (selectedNum === "a" || selectedNum === "1") {
        var valNum = "2";
      } else if (selectedNum === "2") {
        var valNum = "3";
      } else if (selectedNum === "3") {
        var valNum = "4";
      } else if (selectedNum === "4") {
        var valNum = "5";
      } else if (selectedNum === "5") {
        var valNum = "6";
      } else if (selectedNum === "46") {
        var valNum = "47";
      } else if (selectedNum === "47") {
        var valNum = "48";
      } else if (selectedNum === "48") {
        var valNum = "49";
      } else if (selectedNum === "49") {
        var valNum = "50";
      } else if (selectedNum === "50") {
        var valNum = "50";
      } else {
        var valNum = numRefp.toString();
      }
    } else if (valNumlp === "l") {
      if (selectedNum === "a" || selectedNum === "1") {
        var valNum = "1";
      } else if (selectedNum === "5") {
        var valNum = "4";
      } else if (selectedNum === "4") {
        var valNum = "3";
      } else if (selectedNum === "3") {
        var valNum = "2";
      } else if (selectedNum === "2") {
        var valNum = "1";
      } else if (selectedNum === "50") {
        var valNum = "49";
      } else if (selectedNum === "49") {
        var valNum = "48";
      } else if (selectedNum === "48") {
        var valNum = "47";
      } else if (selectedNum === "47") {
        var valNum = "46";
      } else if (selectedNum === "46") {
        var valNum = "45";
      } else {
        var valNum = numRefl.toString();
      }
    } else {
      var valNum = e.target.closest("div").getAttribute("values");
      setNumRefl(valNum - 1);
      setNumRefp(+valNum + 1);
    }
    setSelectedNum(valNum.toString());
    setSelectedPage(valNum.toString());

    const element = document.getElementById("card-id");
    const element2 = document.getElementById("card2-id");
    const element3 = document.getElementById("card_num2");
    const element4 = document.getElementById("card_num3");
    if (valNum > 6 && valNum < 46) {
      setNum4(valNum - 3);
      setNum5(valNum - 2);
      setNum6(valNum - 1);
      setNum7(valNum);
      setNum8(+valNum + 1);
      setNum9(+valNum + 2);
      setNum10(+valNum + 3);
      setNum11(+valNum + 4);
      element.style.background = "rgba(101, 134, 188, 0.99)";
      element2.style.display = "none";
      element3.style.display = "flex";
      element4.style.display = "flex";
    } else if (valNum > 45) {
      element.style.background = "#2a2d34";
      element2.style.display = "none";
      element3.style.display = "flex";
    } else if (valNum < 6) {
      element.style.background = "#2a2d34";
    } else if (valNum === "6") {
      element.style.background = "rgba(101, 134, 188, 0.99)";
    }

    if (
      valNum === "50" ||
      valNum === "46" ||
      valNum === "47" ||
      valNum === "48" ||
      valNum === "49"
    ) {
      element4.style.display = "none";
      element2.style.display = "flex";
      setNum3(41);
      setNum4(42);
      setNum5(43);
      setNum6(44);
      setNum7(45);
      setNum8(46);
      setNum9(47);
      setNum10(48);
      setNum11(49);
    }
    if (
      valNum === "6" ||
      valNum === "5" ||
      valNum === "4" ||
      valNum === "3" ||
      valNum === "2" ||
      valNum === "1"
    ) {
      element2.style.display = "flex";
      element3.style.display = "none";
      setNum3(2);
      setNum4(3);
      setNum5(4);
      setNum6(5);
      setNum7(6);
      setNum8(7);
      setNum9(8);
      setNum10(9);
      setNum11(10);
    }
    if (valNum === "45") {
      element4.style.display = "none";
      element2.style.display = "flex";
      element3.style.display = "flex";
      setNum3(41);
    }
  }
  useEffect(() => {
    valuesPage(selectedPage);
  }, [selectedPage]);

  return (
    <a href="#top" title="top" className="carousel_num">
      <div
        className="card_num card_num1"
        values="l"
        onClick={(e) => {
          setNumlp("l");
          setNumTrue((el) => !el);
          valuesNum(e);
        }}
      >
        <BsChevronDoubleLeft color="#e3d2d2" size={15} className="doubleLeft" />
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "1" ? "selected" : ""
        }`}
        values={1}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        1
      </div>
      <div className="card_num card_num2" id="card_num2">
        ...
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "2" ? "selected" : ""
        }`}
        values={num3}
        onClick={(e) => {
          valuesNum(e);
        }}
        id="card2-id"
      >
        {num3}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "3" ? "selected" : ""
        }`}
        values={num4}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {/* 3 */}
        {num4}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "4" ? "selected" : ""
        }`}
        values={num5}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {num5}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "5" ? "selected" : ""
        }`}
        values={num6}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {num6}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "6" || selectedNum === "45" ? "selected" : ""
        }`}
        ref={otherElementRef}
        values={num7}
        onClick={(e) => {
          valuesNum(e);
        }}
        id="card-id"
      >
        {/* -6- */}
        {num7}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "46" ? "selected" : ""
        }`}
        values={num8}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {/* 7 */}
        {num8}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "47" ? "selected" : ""
        }`}
        values={num9}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {num9}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "48" ? "selected" : ""
        }`}
        values={num10}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {num10}
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "49" ? "selected" : ""
        }`}
        values={num11}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        {/* 10 */}
        {num11}
      </div>
      <div className="card_num card_num12" id="card_num3">
        ...
      </div>
      <div
        className={`card_num card_num1 card_num_click ${
          selectedNum === "50" ? "selected" : ""
        }`}
        values={50}
        onClick={(e) => {
          valuesNum(e);
        }}
      >
        50
      </div>
      <div
        className="card_num card_num14"
        values="p"
        onClick={(e) => {
          setNumlp("p");
          setNumTrue((el) => !el);
          valuesNum(e);
        }}
      >
        <BsChevronDoubleRight
          color="#e3d2d2"
          size={15}
          className="doubleRight"
        />
      </div>
    </a>
  );
}

export default CarouselNum;

// import React, { useState } from "react";
// import "./CarouselNum.css";
// // css 2
// import {
//   BsChevronDoubleLeft,
//   BsChevronDoubleRight,
//   BsChevronLeft,
//   BsChevronRight,
// } from "react-icons/bs";

// function CarouselNum() {
//   const [selectedNum, setSelectedNum] = useState(1);
//   const [leftPosition, setLeftPosition] = useState(92);

//   const handleNumClick = (num) => {
//     setSelectedNum(num);
//   };

//   const handlePrevClick = () => {
//     if (selectedNum > 1) {
//       setSelectedNum(1);
//     }
//     if (leftPosition < 92) {
//       setLeftPosition(92);
//     }
//   };
//   const handleNextClick = () => {
//     if (selectedNum < 30) {
//       setSelectedNum(30);
//     }
//     if (leftPosition > -828) {
//       setLeftPosition(-828);
//     }
//   };
//   const handlePrevClickOn = () => {
//     if (selectedNum > 1) {
//       setSelectedNum((prevNum) => prevNum - 1);
//     }
//     if (leftPosition < 92) {
//       setLeftPosition(leftPosition + 46);
//     }
//   };

//   const handleNextClickOn = () => {
//     if (selectedNum < 30) {
//       setSelectedNum((prevNum) => prevNum + 1);
//     }
//     if (leftPosition > -828) {
//       setLeftPosition(leftPosition - 46);
//     }
//   };
//   console.log(leftPosition);

//   return (
//     <div className="carousel_num">
//       <div className="card_num card_numZ card_numZL" onClick={handlePrevClick}>
//         <BsChevronDoubleLeft color="#e3d2d2" size={15} className="doubleLeft" />
//       </div>
//       <div
//         className="card_num card_numZ card_numZLOn"
//         onClick={handlePrevClickOn}
//       >
//         <BsChevronLeft color="#e3d2d2" size={15} className="doubleLeft" />
//       </div>
//       <div
//         className="carousel_absolute"
//         style={{ margin: ` 0px 0px 0px ${leftPosition}px ` }}
//       >
//         {[
//           1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//           21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
//         ].map((num) => (
//           <div
//             key={num}
//             className={`card_num card_num_click ${
//               selectedNum === num ? "selected" : ""
//             }`}
//             onClick={() => handleNumClick(num)}
//           >
//             {num}
//           </div>
//         ))}
//       </div>
//       <div className="card_num card_numZ card_numZP" onClick={handleNextClick}>
//         <BsChevronDoubleRight
//           color="#e3d2d2"
//           size={15}
//           className="doubleRight"
//         />
//       </div>
//       <div
//         className="card_num card_numZ card_numZPOn"
//         onClick={handleNextClickOn}
//       >
//         <BsChevronRight color="#e3d2d2" size={15} className="doubleRight" />
//       </div>
//     </div>
//   );
// }

// export default CarouselNum;
