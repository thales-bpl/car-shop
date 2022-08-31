import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _motorcycle: IService<IMotorcycle>) {}

  public async read(_req: Request, res: Response<IMotorcycle[]>) {
    const response = await this._motorcycle.read();
    return res.status(200).json(response);
  }

  public async readOne(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const response = await this._motorcycle.readOne(id) as IMotorcycle;

    return res.status(200).json(response);
  }

  public async create(
    req: Request & { body: IMotorcycle },
    res: Response<IMotorcycle>,
  ) {
    const response = await this._motorcycle.create(req.body);

    return res.status(201).json(response);
  }

  public async update(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    const response = await this._motorcycle.update(id, req.body) as IMotorcycle;

    return res.status(200).json(response);
  }

  public async delete(req: Request, res: Response<IMotorcycle>) {
    const { id } = req.params;
    await this._motorcycle.delete(id);

    return res.status(204).end();
  }
}