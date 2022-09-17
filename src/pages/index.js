import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { getAllAseos } from "../utils/getAseos";

import "react-datepicker/dist/react-datepicker.css";

const dayDiff = 2;

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [dataAseo, setDataAseo] = useState({
    primerPiso: 0,
    segundoPiso: 0,
    tercerPiso: 0,
    sala: 0,
    cocina: 0,
  });

  const handleChangeDate = (date) => {
    setStartDate(date);
    const newDataAseos = getAllAseos(dayjs(date), dayDiff);
    setDataAseo(newDataAseos);
  };

  useEffect(() => {
    handleChangeDate(startDate)
  }, [])

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Aseos ResidUIS</h1>
      <DatePicker selected={startDate} onChange={handleChangeDate} inline />
      <br />
      <details open style={{textAlign: 'left', maxWidth: '320px', margin: '0 auto'}}>
        <summary>Aseos {`${startDate.getDay()}`}/{`${startDate.getMonth()}`}/{`${startDate.getFullYear()}`}</summary>
        <p></p>
        <ul>
          <li><strong>Piso1:</strong> {dataAseo.primerPiso ? dataAseo.primerPiso : <del>No hay</del>}</li>
          <li><strong>Piso1:</strong> {dataAseo.segundoPiso ? dataAseo.segundoPiso : <del>No hay</del>}</li>
          <li><strong>Piso1:</strong> {dataAseo.tercerPiso ? dataAseo.tercerPiso : <del>No hay</del>}</li>
          <li><strong>Sala:</strong> {dataAseo.sala ? dataAseo.sala : <del>No hay</del>}</li>
          <li><strong>Cocina:</strong> {dataAseo.cocina ? dataAseo.tercerPiso : <del>No hay</del>}</li>
        </ul>
      </details>
    </div>
  );
}
