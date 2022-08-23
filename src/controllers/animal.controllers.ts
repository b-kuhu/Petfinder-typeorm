import { Request, Response } from "express";
import {Animal} from '../entities/animal.entity';
import {myDataSource} from '../appDataSource';
class AnimalController {
  static createAnimal = async (req: Request, res: Response) => {
    const newAnimal = {
      name: req.body.name,
      breed: req.body.breed,
    };
    const animal = myDataSource.getRepository(Animal).create(newAnimal);
    const result = await myDataSource.getRepository(Animal).save(animal);
    return res.json(result);
  };
  static getAnimal = async (req: Request, res: Response) => {
    const result = await myDataSource.getRepository(Animal).find();
    return res.json(result);
  };
  static getOneAnimal = async (req: Request, res: Response) => {
  
    const result = await myDataSource.getRepository(Animal).findOne({where: {id: parseInt(req.params.id, 10)}});
    return res.json(result);
  };
  static updateAnimal = async (req: Request, res: Response) => {
  
    const data = await myDataSource.getRepository(Animal).findOne({where: {id: parseInt(req.params.id, 10)}});
    if (data) {
      myDataSource.getRepository(Animal).merge(data, req.body);
      const result = await myDataSource.getRepository(Animal).save(data);
      return res.json(result);
    }
    return res.json({ msg: "Post Not Found" });
  };
  static deleteAnimal = async (req: Request, res: Response) => {
    const result = await myDataSource.getRepository(Animal).delete(req.params.id);
    return res.json(result);
  };
}

export default AnimalController; 
 
 
