import sinon from 'sinon'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it, expect, afterEach } from 'vitest'
import { UserModel } from '../Database/Models'
import { userGetResponse } from './Mocks/User.mock'

import { app } from '../app'

const newUserResponse = {
  id: '7845123',
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoe@email.com',
  role: 'USER',
  password: 'password'
}

const newUser = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoe@email.com',
  password: 'password'
}

chai.use(chaiHttp)

describe('Tests for User Domain and his sucess cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(new UserModel(), 'getAll').resolves(userGetResponse)

    const { status, ok, body } = await chai.request(app).get('/user')

    expect(status).toBe(200)
    expect(ok).toBeTruthy()
    expect(body[0]).toHaveProperty('id')
  })

  it('Should create a new User in the DB', async () => {
    sinon.stub(new UserModel(), 'create').resolves(newUserResponse)

    const { status, ok, body } = await chai
      .request(app)
      .post('/user/signup')
      .send(newUser)

    expect(status).toBe(201)
    expect(ok).toBeTruthy()
    expect(body[0]).toHaveProperty('id')
  })
})
