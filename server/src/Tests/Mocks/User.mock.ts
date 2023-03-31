const homerSend = {
  first_name: 'Homer',
  last_name: 'Simpson',
  email: 'homer@gmail.com',
  password: 'password'
}

const homerResponse = {
  id: '123456789',
  first_name: 'Homer',
  last_name: 'Simpson',
  email: 'homer@gmail.com',
  password: 'password',
  role: 'USER'
}

const ragnar = {
  id: '789456231',
  first_name: 'Ragnar',
  last_name: 'Lodbrok',
  email: 'ragnar@gmail.com',
  password: 'password123',
  role: 'USER'
}

const eren = {
  id: '784521',
  first_name: 'Eren',
  last_name: 'Yeager',
  email: 'eren.yeager@gmail.com',
  password: 'password456',
  role: 'USER'
}

const morty = {
  id: '4512378',
  first_name: 'Morty',
  last_name: 'Smith',
  email: 'msmith.125@gmail.com',
  password: 'password789',
  role: 'USER'
}

const correctSignin = {
  email: 'thales.chagas@email.com',
  password: '123456'
}

const incorrectSignin = {
  email: 'thales.chagas@email.com',
  password: 'SENHAERRADA'
}

export const getAll = {
  response: [eren, morty, ragnar]
}

export const create = {
  response: homerResponse,
  send: homerSend
}

export const login = {
  signin: correctSignin,
  signinError: incorrectSignin
}
