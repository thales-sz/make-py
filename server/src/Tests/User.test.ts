import sinon from 'sinon'
import chai from 'chai'
import { describe, it, expect, afterEach } from 'vitest'
import { UserModel } from '../Database/Models'
import { userGetResponse } from './Mocks/User.mock'

import { app } from '../app'

// const newUser = {
//  first_name: 'John',
//  last_name: 'Doe',
//  email: 'johndoe@email.com',
//  password: 'password'
// }

describe('Tests for User Domain and his sucess cases', () => {
  afterEach(() => { sinon.restore() })

  it('Should return a list with all users from DB', async () => {
    sinon.stub(new UserModel(), 'getAll').resolves(userGetResponse)

    // expect(status).toBe(200)
    // expect(ok).toBeTruthy()
    // expect(body[0]).toHaveProperty('id')
  })
})
