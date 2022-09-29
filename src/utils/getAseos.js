import dayjs from "dayjs";

const getDateDiff = (date, difference = 0) => {
  const originDate = dayjs("1969-12-31");
  const newDateWithDiff = date.add(difference, "days");
  const daysDiff = dayjs(`${newDateWithDiff.$y}-${newDateWithDiff.$M + 1}-${newDateWithDiff.$D}`).diff(originDate, "d");
  return daysDiff;
};

export const getAseoPasilloPrimerPiso = (date, difference = 0) => {
  const cycleCleanliness = [101, 0, 102, 0, 103, 0, 104, 0, 105, 0];
  const cuantityRooms = cycleCleanliness.length;

  const integerDaysDiff = getDateDiff(date, difference);

  const indexHab = integerDaysDiff % cuantityRooms;
  const currenttHab = cycleCleanliness[indexHab];
  return currenttHab;
};

export const getAseoPasilloSegundoPiso = (date, difference = 0) => {
  const cycleCleanliness = [202, 0, 203, 0, 204, 0, 205, 0, 201, 0];
  const cuantityRooms = cycleCleanliness.length;

  const integerDaysDiff = getDateDiff(date, difference);

  const indexHab = integerDaysDiff % cuantityRooms;
  const currenttHab = cycleCleanliness[indexHab];
  return currenttHab;
};

export const getAseoPasilloTercerPiso = (date, difference = 0) => {
  const cycleCleanliness = [303, 0, 304, 0, 305, 0, 301, 0, 302, 0];
  const cuantityRooms = cycleCleanliness.length;

  const integerDaysDiff = getDateDiff(date, difference);

  const indexHab = integerDaysDiff % cuantityRooms;
  const currenttHab = cycleCleanliness[indexHab];
  return currenttHab;
};

export const getAseoCocina = (date, difference = 0) => {
  const cycleCleanliness = [
    105, 0, 204, 0, 303, 0, 101, 0, 205, 0, 304, 0, 104, 0, 203, 0, 302, 0, 102,
    0, 201, 0, 305, 0, 301, 0, 202, 0, 103, 0,
  ];
  const cuantityRooms = cycleCleanliness.length;

  const integerDaysDiff = getDateDiff(date, difference);

  const indexHab = integerDaysDiff % cuantityRooms;
  const currenttHab = cycleCleanliness[indexHab];
  return currenttHab;
};

export const getAseoSala = (date, difference = 0) => {
  const cycleCleanliness = [
    104, 0, 302, 0, 203, 0, 103, 0, 202, 0, 301, 0, 101, 0, 205, 0, 304, 0, 305,
    0, 102, 0, 201, 0, 105, 0, 204, 0, 303, 0,
  ];
  const cuantityRooms = cycleCleanliness.length;

  const integerDaysDiff = getDateDiff(date, difference);

  const indexHab = integerDaysDiff % cuantityRooms;
  const currenttHab = cycleCleanliness[indexHab];
  return currenttHab;
};

export const getAllAseos = (date, difference = 0) => {
  const AllAseos = {
    primerPiso: getAseoPasilloPrimerPiso(date, difference),
    segundoPiso: getAseoPasilloSegundoPiso(date, difference),
    tercerPiso: getAseoPasilloTercerPiso(date, difference),
    cocina: getAseoCocina(date, difference),
    sala: getAseoSala(date, difference),
  };
  return AllAseos;
};
