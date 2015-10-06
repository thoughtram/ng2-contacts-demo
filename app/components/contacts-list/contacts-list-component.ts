import {Component} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';

@Component({
  selector: 'contacts-list-component',
  templateUrl: './components/contacts-list/contacts-list-component.html'
})
export class ContactsListComponent {
  contacts: Array<Contact>;
  constructor (contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }
}
