import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategorySerice';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post('/', (  req, res ) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);
    createCategoryService.execute({name, description});
    
    res.status(201).send();
});

categoriesRoutes.get('/', (  req, res ) => {
 
    const allCategories = categoriesRepository.list();
    res.status(200).json(allCategories);

});

export { categoriesRoutes };