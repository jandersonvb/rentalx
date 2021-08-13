import { Specification } from '../model/Specification';

interface ICrateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICrateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICrateSpecificationDTO };
