import {Router} from 'express';
const router = Router();

import AnimalController from '../controllers/animal.controllers';
import OwnerController from '../controllers/owner.controllers';
import ShelterController from '../controllers/shelter.controllers';

//routes for animals
/**
 * @openapi
 * '/animals':
 *  get:
 *    tags:
 *        -animals
 *    summary:get all animals
 *    responses:
 *         200:
 *            description:Success
 *            content:application/json:
 *            schema:
 *               type:array
 *               items:
 *                  type:object
 *                  properties:
 *                      id:
 *                         type:number
 *                      name:
 *                         type:string
 *                      breed:
 *                         type:string
 *        400:
 *             description:Bad request
 */
router.get('/animals', AnimalController.getAnimal);
router.get('/animals/:id', AnimalController.getOneAnimal);
router.post('/animals', AnimalController.createAnimal);
router.put('/animals/:id', AnimalController.updateAnimal)
router.delete('/animals/:id', AnimalController.deleteAnimal);

//routes for owners
router.get('/owners',OwnerController.getOwners);
router.get('/owners/:id',OwnerController.getOneOwner);
router.post('/owners',OwnerController.createOwner);
router.put('/owners/:id',OwnerController.updateOwner);
router.delete('/owners/:id',OwnerController.deleteOwner);

//routes for shelter
router.get('/shelter',ShelterController.getShelter);
router.get('/shelter/:id',ShelterController.getOneShelter);
router.post('/shelter/animals/:animalId/owners/:ownerId',ShelterController.createShelter);
router.put('/shelter/:id',ShelterController.updateShelter);
router.delete('/shelter/:id',ShelterController.deleteShelter);

export default router ;