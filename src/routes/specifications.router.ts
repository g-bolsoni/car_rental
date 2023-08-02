import { Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository()

specificationsRoutes.post('/', (  req, res ) => {
    const { name, description } = req.body;

    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    createSpecificationService.execute({name, description});
    
    res.status(201).send();
});

// specificationsRoutes.get('/', (  req, res ) => {
 
//     const allCategories = categoriesRepository.list();
//     res.status(200).json(allCategories);

// });

export { specificationsRoutes };