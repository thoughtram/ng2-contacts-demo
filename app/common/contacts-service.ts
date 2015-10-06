import {Contact} from '../models/contact';
import {CONTACT_DATA} from '../common/contact-data';

export class ContactsService {
  private contacts: Array<Contact> = CONTACT_DATA;

  getContacts () {
    return this.contacts;
  }
}
