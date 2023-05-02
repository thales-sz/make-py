import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './app.module';
import { JwtService } from '@nestjs/jwt';

const userBody = {
  firstName: 'User',
  lastName: 'Example',
  email: 'email@example.com',
  password: 'mock123',
  phoneNumber: '+5522689523457',
};

describe('App Health Check (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect('This server is healthy');
  });

  describe('Users Routes', () => {
    it('should throw when trying to get users without beeing an admin - /users (GET)', async () => {
      const response = await request(app.getHttpServer()).get('/users');

      expect(response.statusCode).toBe(401);
      expect(response.body.message).toEqual('Unauthorized');
    });

    it('should be abled to get users as admin - /users (GET)', async () => {
      const adminToken = new JwtService().sign(
        {
          role: 'ADMIN',
        },
        { secret: process.env.JWT_SECRET },
      );
      const response = await request(app.getHttpServer())
        .get('/users')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(response.statusCode).toBe(200);
    });

    it('should be abled to create a new user - /signup (POST)', async () => {
      const response = await request(app.getHttpServer())
        .post('/signup')
        .send(userBody);

      expect(response.statusCode).toBe(201);
    });
  });
});
