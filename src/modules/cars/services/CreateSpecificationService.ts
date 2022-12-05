interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor() {}

  execute({ name, description }: IRequest): void {
    // TODO
  }
}

export { CreateSpecificationService };
