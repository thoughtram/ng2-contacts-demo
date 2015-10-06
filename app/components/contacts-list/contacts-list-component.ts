import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';

@Component({
  selector: 'contacts-list-component'
})
@View({
  templateUrl: './components/contacts-list/contacts-list-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactsListComponent {
  contacts: Array<Contact>;
  constructor (contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }
}
