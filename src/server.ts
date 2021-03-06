import express from 'express';

/** Importing routes */
import { categoriesRoutes } from './routes/categories.routes';
import { specificationsRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

/** Routes */
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => {
  console.log('✔ Server started on port 3333 ');
});
