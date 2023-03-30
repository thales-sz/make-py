import sinon from 'sinon'
import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it, expect, afterEach, expectTypeOf } from 'vitest'
import { UserModel } from '../Database/Models'
import * as Mock from './Mocks/User.mock'

import { app } from '../app'

chai.use(chaiHttp)

describe('Tests for User Domain and his sucess cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(UserModel.prototype, 'getAll').resolves(Mock.getAll.response)

    const { status, ok, body } = await chai.request(app).get('/user')

    expect(status).toBe(200)
    expect(ok).toBeTruthy()
    expectTypeOf(body).toBeArray()
    expect(body[0]).to.haveOwnProperty('id')
  })

  it('Should be able to create a new user with valid credentials', async () => {
    sinon.stub(UserModel.prototype, 'create').resolves(Mock.create.response)

    const { status, ok, body } = await chai
      .request(app)
      .post('/user/signup')
      .send(Mock.create.send)

    expect(status).toBe(201)
    expect(ok).toBeTruthy()
    expect(body).to.haveOwnProperty('token')
    expect(body).to.haveOwnProperty('result')
  })
})
