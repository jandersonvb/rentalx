import { Router } from 'express';

const categoriesRouter = Router();

const categories = [];

categoriesRouter.post('/categories', (request, response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);

  return response.status(201).json(category);
});

export { categoriesRouter };
