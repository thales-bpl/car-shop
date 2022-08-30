import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'Conversível Sport Bolado',
  year: 1964,
  color: 'red',
  buyValue: 5000,
  seatsQty: 2,
  doorsQty: 2
};

const carMockWithId: ICar & { _id:string } = {
  _id: '5d6ede6a0ba62570afcedd3a',
  model: 'Conversível Sport Bolado',
  year: 1964,
  color: 'red',
  buyValue: 5000,
  seatsQty: 2,
  doorsQty: 2
};

const allCarsMock: ICar[] = [
  {
    model: 'Conversível Sport Bolado',
    year: 1964,
    color: 'red',
    buyValue: 5000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    model: 'Fusquinha charmoso',
    year: 1985,
    color: 'green',
    buyValue: 1000,
    seatsQty: 4,
    doorsQty: 2
  }
];

const allCarsMockWithId: ICar[] & { _id:string }[] = [
  {
    _id: '5d6ede6a0ba62570afcedd3a',
    model: 'Conversível Sport Bolado',
    year: 1964,
    color: 'red',
    buyValue: 5000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: '572f16439c0d3ffe0bc084a4',
    model: 'Fusquinha charmoso',
    year: 1985,
    color: 'green',
    buyValue: 1000,
    seatsQty: 4,
    doorsQty: 2
  }
];

export {
  carMock,
  carMockWithId,
  allCarsMock,
  allCarsMockWithId,
}