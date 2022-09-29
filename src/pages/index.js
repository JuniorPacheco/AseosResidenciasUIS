import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import { getAllAseos } from "../utils/getAseos";
import dayOfYear from "dayjs/plugin/dayOfYear"
dayjs.extend(dayOfYear)

import "react-datepicker/dist/react-datepicker.css";
import { loginWithFirebase } from "../firebase/firebaseConfig";
import { getRooms } from "../firebase/api";

const dayDiff = 1;

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [dataAseo, setDataAseo] = useState({
    primerPiso: 0,
    segundoPiso: 0,
    tercerPiso: 0,
    sala: 0,
    cocina: 0,
  });

  const handleChangeDate = async (date) => {
    setStartDate(date);
    const newDataAseos = getAllAseos(dayjs(date), dayDiff);
    setDataAseo(newDataAseos);
  };

  const handleClickInformation = async () => {
    const info = await loginWithFirebase("junior.pacheco.356@gmail.com", "19971973")
    console.log(info)
  }

  const handleGetInfo = async () => {
    try {
      const data = await getRooms()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
      handleChangeDate(startDate)
  }, [])

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Aseos ResidUIS</h1>
      <DatePicker selected={startDate} onChange={handleChangeDate} inline />
      <br />
      <details open style={{textAlign: 'left', maxWidth: '320px', margin: '0 auto'}}>
        <summary>Aseos {`${dayjs(startDate).$D}`}/{`${startDate.getMonth() + 1}`}/{`${startDate.getFullYear()}`}</summary>
        <p></p>
        <ul>
          <li><strong>Piso1:</strong> {dataAseo.primerPiso ? dataAseo.primerPiso : <del>No hay</del>}</li>
          <li><strong>Piso2:</strong> {dataAseo.segundoPiso ? dataAseo.segundoPiso : <del>No hay</del>}</li>
          <li><strong>Piso3:</strong> {dataAseo.tercerPiso ? dataAseo.tercerPiso : <del>No hay</del>}</li>
          <li><strong>Sala:</strong> {dataAseo.sala ? dataAseo.sala : <del>No hay</del>}</li>
          <li><strong>Cocina:</strong> {dataAseo.cocina ? dataAseo.cocina : <del>No hay</del>}</li>
        </ul>
      </details>
      {/* <button onClick={handleClickInformation}>Logear</button>
      <button onClick={handleGetInfo}>Pedir informacion</button> */}
    </div>
  );
}
