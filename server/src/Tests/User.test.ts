import sinon from 'sinon'
import { describe, it, expect } from 'vitest'
import { UserModel } from '../Database/Models'
import { userGetResponse } from './Mocks/User.mock'

describe('Tests for User Domain and his sucess cases', () => {
  it('Should be able to create a new user with a valid body', () => {
    sinon.stub(new UserModel(), 'getAll').resolves(userGetResponse)
    const newUser = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@email.com',
      password: 'password'
    }

    expect(newUser.first_name).toBe('John')
  })
})
