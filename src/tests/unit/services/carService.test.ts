import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMockWithId, allCarsMockWithId, postCarReq } from '../../mocks/carMock';

const model = new CarModel();
const service = new CarService(model);

describe('Car Service', () => {
  describe('In successful cases', () => {
    before(async () => {
      sinon.stub(model, 'create') .resolves(carMockWithId);
      sinon.stub(model, 'read') .resolves(allCarsMockWithId);
      sinon.stub(model, 'readOne') .resolves(carMockWithId);
      sinon.stub(model, 'delete') .resolves(carMockWithId);
    });

    after(()=>{
      sinon.restore();
    })

    it('creates a car document', async () => {
      const result = await service.create(postCarReq);

      expect(result).to.eq(carMockWithId);
    });

    it('reads all car documents', async () => {
      const result = await service.read();

      expect(result).to.eq(allCarsMockWithId);
    });

    it('reads only one car document', async () => {
      const result = await service.readOne('5d6ede6a0ba62570afcedd3a');

      expect(result).to.eq(carMockWithId);
    });

    it('deletes a car document', async () => {
      const result = await service.delete('5d6ede6a0ba62570afcedd3a');

      expect(result).to.eq(carMockWithId);
    });
  });
});