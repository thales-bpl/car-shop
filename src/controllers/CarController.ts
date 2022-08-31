import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) {}

  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const { id } = req.params;
    const result = await this._service.readOne(id) as ICar;
    return res.status(200).json(result);
  }

  public async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const { body: car } = req;
    const result = await this._service.create(car);
    return res.status(201).json(result);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const result = await this._service.update(req.params.id, req.body) as ICar;
    res.status(200).json(result);
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this._service.delete(id);
    res.status(204).json();
  }
}

export default CarController;