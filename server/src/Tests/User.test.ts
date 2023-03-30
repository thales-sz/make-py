import sinon from 'sinon'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it, expect, afterEach } from 'vitest'
import { UserModel } from '../Database/Models'
import { userGetResponse } from './Mocks/User.mock'

import { app } from '../app'

const newUserResponse = {
  id: '7845123123123',
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoes@email.com',
  role: 'USER',
  password: 'password'
}

const newUser = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoes@email.com',
  password: 'password'
}

chai.use(chaiHttp)

describe('Tests for User Domain and his sucess cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(UserModel.prototype, 'getAll').resolves(userGetResponse)

    const { status, ok, body } = await chai.request(app).get('/user')

    expect(status).toBe(200)
    expect(ok).toBeTruthy()
    expect(body).toBeTypeOf('object')
    expect(body[0]).to.haveOwnProperty('id')
  })

  it('Should be able to create a new user with valid credentials', async () => {
    sinon.stub(UserModel.prototype, 'create').resolves(newUserResponse)

    const { status, ok, body } = await chai
      .request(app)
      .post('/user/signup')
      .send(newUser)

    console.log(body)
    expect(status).toBe(201)
    expect(ok).toBeTruthy()
    expect(body).to.haveOwnProperty('token')
    expect(newUser.email).to.equal(newUserResponse.email)
  })
})
