import { expect } from 'chai';
import * as sinon from 'sinon';
// import chai from 'chai';
// const { expect } = chai;
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('creating a car', () => {
    it('creates a document successfully', async () => {
      const newCar = await carModel.create(carMock);
      
      expect(newCar).to.be.equal(carMockWithId);
    });
  });

  describe('searching a car', () => {
    it('car found', async () => {
      const foundCar = await carModel.readOne('5d6ede6a0ba62570afcedd3a');
      
      expect(foundCar).to.be.equal(carMockWithId);
    });

    it('car didn\'t found', async () => {
      try {
        const foundCar = await carModel.readOne('asasd');
        
        expect(foundCar).to.be.equal(carMockWithId);
      } catch(error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

});