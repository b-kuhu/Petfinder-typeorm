import { Request, Response } from 'express';
import { Owner } from '../entities/owner.entity';
import { Animal } from '../entities/animal.entity';
import { Shelter} from '../entities/shelter.entity';
import { myDataSource} from '../appDataSource';
import{shelterSchema} from '../validationSchema';

class ShelterController{
static createShelter = async (req: Request, res: Response) => {
    
    const {animalId,ownerId}=req.params;
    const owner =  await myDataSource.getRepository(Owner).findOne({where: {owner_id: parseInt(ownerId, 10)}});
    const animal = await myDataSource.getRepository(Animal).findOne({where: {id: parseInt(animalId, 10)}});
    const shelterData = {
        roomNo:req.body.roomNo,
        dateOfArrival:req.body.dateOfArrival,
        dateOfAdoption:req.body.dateOfAdoption,
    }
    const value = shelterSchema.validateAsync(shelterData);
    console.log(value); 
    if(owner && animal){
    const newShelter = {  
       shelterData,
        animal,owner
    }
   
    const data = myDataSource.getRepository(Shelter).create(newShelter);
    const result = await myDataSource.getRepository(Shelter).save(data);
    res.json({
        message: 'Details Added successfully',
       result
    })
}
else {
    res.json({ message:'animal or user not found'});
}
};

static getShelter = async (req: Request, res: Response): Promise<Response> => {
    const result = await myDataSource.getRepository(Shelter).find();
    return res.json(result);
};

static getOneShelter= async (req: Request, res: Response): Promise<Response> => {
    
    
    const result = await myDataSource.getRepository(Shelter).findOne({where: {id: parseInt(req.params.id, 10)}});
    return res.json(result,);
};


static updateShelter = async (req: Request, res: Response) => {
  
   
    const data = await myDataSource.getRepository(Shelter).findOne({where: {id: parseInt(req.params.id, 10)}});   
    
    if (data) {
        const value = shelterSchema.validateAsync(req.body);
        console.log(value);
        myDataSource.getRepository(Shelter).merge(data, req.body);
        const result = await myDataSource.getRepository(Shelter).save(data);
        return res.json({message:'Updated Successfully',result});
 }

 
};

static deleteShelter = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id,10);
    const data = myDataSource.getRepository(Shelter).delete(id);
   
    res.json({message:`deleted Successfully`,data});
};

}
export default ShelterController;