export const CREATE_CONTACT = 'CREATE_CONTACT';

export function createContact(contact) {
  return {
    type: CREATE_CONTACT,
    contact
  }
}
