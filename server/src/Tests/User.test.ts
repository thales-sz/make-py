import sinon from 'sinon'
import request from 'supertest'
import { describe, it, expect, afterEach, expectTypeOf } from 'vitest'
import { UserModel } from '../Database/Models'
import * as Mock from './Mocks/User.mock'

import { app } from '../app'

describe('Tests for User Domain and its success cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(UserModel.prototype, 'getAll').resolves(Mock.getAll.response)

    const response = await request(app).get('/user')

    expect(response.status).toBe(200)
    expect(response.ok).toBeTruthy()
    expectTypeOf(response.body).toBeArray()
    expect(response.body[0]).to.haveOwnProperty('id')
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

  it('Should throw a error when trying to create a new user with an already used email', async () => {
    sinon.stub(UserModel.prototype, 'create').throws(new Error('UserExists'))

    const { status, ok } = await request(app)
      .post('/user/signup')
      .send(Mock.create.sendError)

    expect(status).toBe(400)
    expect(ok).toBeFalsy()
  })
})
