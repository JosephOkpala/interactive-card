import React, { useState } from "react";

const CardInfo = () => {
  const [holder, setHolder] = useState("Walter White");
  const [number, setNumber] = useState('1234 5678 9123 0000');
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");

  const changeHolder = (e) => {
    setHolder(e.target.value);
  };
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };
  const changeMonth = (e) => {
    setMonth(e.target.value);
  };
  const changeYear = (e) => {
    setYear(e.target.value);
  };
  const changeCvc = (e) => {
    setCvc(e.target.value);
  };

  return (
    <div className="cardinfo">
      <form action="">
        <div className="namenum">
          <h3>CARDHOLDER NAME</h3>
          <input
            type="text"
            placeholder="e.g Walter White"
            onChange={changeHolder}
          />
        </div>
        <div className="namenum">
          <h3>CARD NUMBER</h3>
          <input type="tel" placeholder="e.g 1234 5678 9123 0000" onChange={changeNumber}/>
        </div>
        <div className="expcvc">
          <div className="exp">
            <h3>EXP. DATE (MM/YY)</h3>
            <input className="mm" type="tel" placeholder="MM" onChange={changeMonth} />
            <input className="yy" type="tel" placeholder="YY" onChange={changeYear} />
          </div>
          <div className="cvc">
            <h3>CVC</h3>
            <input type="tel" placeholder="e.g 123" onChange={changeCvc} />
          </div>
        </div>
        <div className="button">
          <button>Confirm</button>
        </div>
      </form>
      <h4 className="holder">{holder}</h4>
      <h2 className="num">{number}</h2>
      <h4 className="month">{month}</h4>
      <h4 className="year">{year}</h4>
      <h5 className="cvcnum">{cvc}</h5>
    </div>
  );
};

export default CardInfo;
