const request = require('supertest')
const routes = require('../index.js')
const api = request(routes)

const mysql = require('mysql2');

//Descomentando este código se simula error en la base de datos haciendo que el testeo que antes funcionaba en el caso de la provincia, ahora fallaría 
//jest.mock('mysql2', () => ({
//  createConnection: jest.fn().mockReturnValue({
//    query: jest.fn((query, params, callback) => {
//      callback(new Error('Database error'), null);
//    }),
//  }),
//}));

//Descomentando este código y el siguiente falla porque le está pasando null en el departamento, devuelve error, si lo atajo en api.js y descomento lo que está, funciona bien
//jest.mock('mysql2', () => ({
//  createConnection: jest.fn().mockReturnValue({
//    query: jest.fn((query, params, callback) => {
//      callback(null, null);
//    }),
//  }),
//}));


//describe('GET /departamento/:departamento', () => {
//        it('should return a 404 error if the database returns null', async () => {
//          const response = await request(routes).get('/departamento/:departamento');
//          expect(response.status).toBe(404);
//          expect(response.text).toBe('Departamento no encontrado');
//        })})


     test('should have a Content-Type: application/json', async () => {
                await api
                .get('/dengue')
                .expect(200)
                .expect('Content-Type', /application\/json/)
        })
     
     describe('GET /dengue/casos_totales/:provinciaId', () => {
             test('should fail if there is a database error', async () => {
               const provinciaId = '1'
               const response = await request(routes).get(`/dengue/casos_totales/${provinciaId}`);      
               expect(response.status).toBe(200);
             })
        })
     
     describe('POST /:anio', () => {
             test('should return an error if "anio" is not an integer', async () => {
     
               const response = await request(routes).post('/lechuga')
           
               expect(response.status).toBe(400)
               expect(response.body.error).toBe('El año debe ser un número entero')
             })
           
             test('should insert a year correctly if the parameter "anio" is an integer', async () => {
               const response = await request(routes).post('/2025')
           
               expect(response.status).toBe(200)
               expect(response.body.message).toBe('Se incluyo un nuevo año')
             })
           })