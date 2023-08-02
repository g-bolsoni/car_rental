import { Category  } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository
{
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() 
    {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository
    {
        if (!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    }
    create( { name, description }: ICreateCategoryDTO) : void
    {

        // Adicionar no BD
        const category = new Category();

        Object.assign( category, {
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    }
    

    list() : Category[]
    {
        console.log(this.categories);
        
        
        return this.categories;
    }
 
    findByName(name: string): Category
    { 
        const verifyCategoryExits = this.categories.find((category) => category.name.toLowerCase() === name.toLowerCase());

        return verifyCategoryExits;
    }
}

export { CategoriesRepository };