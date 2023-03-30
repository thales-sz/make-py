import sinon from 'sinon'
import request from 'supertest'
import { describe, it, expect, afterEach, expectTypeOf } from 'vitest'
import { ProductModel } from '../Database/Models'
import * as Mock from './Mocks/Product.mock'

import { app } from '../app'

describe('Tests for Products Domain and its cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(ProductModel.prototype, 'getAll').resolves(Mock.getAll.response)

    const { status, ok, body } = await request(app).get('/user')

    expect(status).toBe(200)
    expect(ok).toBeTruthy()
    expectTypeOf(body).toBeArray()
    expect(body[0]).to.haveOwnProperty('id')
  })
})
