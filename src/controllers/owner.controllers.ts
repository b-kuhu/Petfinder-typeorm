import { Request, Response } from 'express';
import { Owner } from '../entities/owner.entity';
import {myDataSource} from '../appDataSource';


class OwnerController {
  static createOwner = async (req: Request, res: Response) => {
    const newAnimal = {
      owner_name: req.body.owner_name,
      contact: req.body.contact,
      address:req.body.address
    };
    const animal = myDataSource.getRepository(Owner).create(newAnimal);
    const result = await myDataSource.getRepository(Owner).save(animal);
    return res.json(result);
  };
  static getOwners = async (req: Request, res: Response) => {
    const result = await myDataSource.getRepository(Owner).find();
    return res.json(result);
  };
  static getOneOwner = async (req: Request, res: Response) => {
  
    const result = await myDataSource.getRepository(Owner).findOne({where: {owner_id: parseInt(req.params.id, 10)}});
    return res.json(result);
  };
  static updateOwner = async (req: Request, res: Response) => {
  
    const data = await myDataSource.getRepository(Owner).findOne({where: {owner_id: parseInt(req.params.id, 10)}});
    if (data) {
      myDataSource.getRepository(Owner).merge(data, req.body);
      const result = await myDataSource.getRepository(Owner).save(data);
      return res.json(result);
    }
    return res.json({ msg: "Not Found" });
  };
  static deleteOwner = async (req: Request, res: Response) => {
    const result = await myDataSource.getRepository(Owner).delete(req.params.id);
    return res.json(result);
  };
}

export default OwnerController; 
 