import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../common/contact-data';

export class ContactsService {
  private contacts: Array<Contact> = CONTACT_DATA;

  getContacts () {
    return this.contacts;
  }

  getContact (id) {
    return this.contacts.find((contact) => contact.id == id);
  }
}
