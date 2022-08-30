import { expect } from 'chai';
import * as sinon from 'sinon';
// import chai from 'chai';
// const { expect } = chai;
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId, allCarsMock, allCarsMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(carMockWithId);
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

  // TO-DO: teste falhando, investigar
  describe('searching all cars', () => {
    it('returns a list of cars', async () => {
      const allCars = await carModel.read();

      expect(allCars).to.be.deep.equal(allCarsMockWithId);
    })
  });

  describe('removing a car', () => {
    it('successfully removed', async () => {
      const removedCar = await carModel.delete('5d6ede6a0ba62570afcedd3a');
      // atenção nesse teste. verificar retorno do model.delete
      expect(removedCar).to.be.deep.equal(carMockWithId);
    });

    it('_id not found throws an error', async () => {
      try {
        await carModel.delete('12345');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});