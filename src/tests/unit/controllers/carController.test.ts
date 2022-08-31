import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { carMockWithId, allCarsMockWithId, postCarReq } from '../../mocks/carMock';
import { Request, Response } from 'express';

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

describe('Car Controller', () => {
  const req = { params: '' } as Request & { params: string };
  const res = {} as Response;

  describe('In successful cases', () => {
    before(async () => {
      sinon.stub(service, 'create').resolves(carMockWithId);
      sinon.stub(service, 'read').resolves(allCarsMockWithId);
      sinon.stub(service, 'readOne').resolves(carMockWithId);

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(()=>{
      sinon.restore();
    })

    it('creates a car document', async () => {
      const result = await controller.create(req, res);

      expect((result.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((result.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });

    it('reads all car document', async () => {
      const result = await controller.read(req, res);

      expect((result.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((result.json as sinon.SinonStub).calledWith(allCarsMockWithId)).to.be.true;
    });

    it('read one car document', async () => {
      const result = await controller.readOne(req, res);

      expect((result.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((result.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });
});