import express from 'express';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './interfaces/routes/userRoutes';
import { swaggerSpecs } from './swagger/swaggerConfig';
import sequelize from './infrastructure/database/sequelizeConfig';

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
