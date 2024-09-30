import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
    },
  },
  apis: ['./src/interfaces/routes/*.ts'],
};

export const swaggerSpecs = swaggerJSDoc(options);
