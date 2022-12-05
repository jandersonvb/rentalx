import { Category } from '../models/Category';

interface ICrateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICrateCategoryDTO): void;

  list(): Category[];

  findByName(name: string): Category;
}

export { ICategoriesRepository, ICrateCategoryDTO };
