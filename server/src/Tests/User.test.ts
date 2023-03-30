import sinon from 'sinon'
import request from 'supertest'
import { describe, it, expect, afterEach, expectTypeOf } from 'vitest'
import { UserModel } from '../Database/Models'
import * as Mock from './Mocks/User.mock'

import { app } from '../app'

describe('Tests for User Domain and its cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(UserModel.prototype, 'getAll').resolves(Mock.getAll.response)

    const { status, ok, body } = await request(app).get('/user')

    expect(status).toBe(200)
    expect(ok).toBeTruthy()
    expectTypeOf(body).toBeArray()
    expect(body[0]).to.haveOwnProperty('id')
  })

  it('Should be able to create a new user with valid credentials', async () => {
    sinon.stub(UserModel.prototype, 'create').resolves(Mock.create.response)

    const { status, ok, body } = await request(app)
      .post('/user/signup')
      .send(Mock.create.send)

    expect(status).toBe(201)
    expect(ok).toBeTruthy()
    expect(body).to.haveOwnProperty('token')
    expect(body).to.haveOwnProperty('result')
  })

  it('Should throw an error when trying to create a new user with an already used email', async () => {
    sinon.stub(UserModel.prototype, 'create').throws(new Error('UserExists'))

    const { status, ok, body } = await request(app)
      .post('/user/signup')
      .send(Mock.create.send)

    expect(status).toBe(400)
    expect(ok).toBeFalsy()
    expect(body.message).toBe('User already exists!')
  })

  it('Should throw an error when trying to signin an account with wrong credentials', async () => {
    const { status, ok, body } = await request(app)
      .post('/user/signin')
      .send(Mock.login.signinError)

    expect(status).toBe(401)
    expect(ok).toBeFalsy()
    expect(body.message).toBe('Incorrect credentials!')
  })

  it('Should be able to signin when trying to signin an account with correct credentials', async () => {
    const { status, ok, body } = await request(app)
      .post('/user/signin')
      .send(Mock.login.signin)

    expect(status).toBe(200)
    expect(ok).toBeTruthy()
    expect(body).to.haveOwnProperty('token')
    expect(body).to.haveOwnProperty('result')
  })
})
