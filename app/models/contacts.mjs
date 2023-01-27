import data from '@begin/data'
import { validator } from '@begin/validator'
import { Contact } from './schemas/contact.mjs'

const deleteContact = async function (key) {
  return data.destroy({ table: 'contacts', key })
}

const upsertContact = async function (contact) {
  return data.set({ table: 'contacts', ...contact })
}

const getContact = async function (key) {
  return data.get({ table: 'contacts', key })
}

const getContacts = async function () {
  return data.get({ table: 'contacts' })
}

const validate = {
  shared (req) {
    return validator(req, Contact)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, contact: data } : { contact: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, contact: data } : { contact: data }
  }
}

export {
  deleteContact,
  getContact,
  getContacts,
  upsertContact,
  validate
}
