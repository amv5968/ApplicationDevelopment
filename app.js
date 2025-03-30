// app.js
   const express = require('express');
   const swaggerUi = require('swagger-ui-express');
   const swaggerJSDoc = require('swagger-jsdoc');
 
   const app = express();
   const port = 4000;
   app.use(express.json()); 
   // Swagger definition
   const swaggerOptions = {
       swaggerDefinition: {
           openapi: '3.0.0',
           info: {
               title: 'My API',
               version: '1.0.0',
               description: 'API documentation using Swagger',
           },
           servers: [
               {
                   url: `http://localhost:${port}`,
               },
           ],
      components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT', 
            },
        },
    },
       },
       apis: ['./routes/*.js'], // Path to your API docs
   };

   const swaggerDocs = swaggerJSDoc(swaggerOptions);
   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

   const userRoutes = require('./routes/user');
   app.use('/api', userRoutes);
   const itemsRouter = require('./routes/items');
   app.use('/api', itemsRouter);

   const customersRouter = require('./routes/customers');
   app.use('/api/customers', customersRouter);

   const orderRouter = require('./routes/orders');
   app.use('/api/orders', orderRouter);

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   
   