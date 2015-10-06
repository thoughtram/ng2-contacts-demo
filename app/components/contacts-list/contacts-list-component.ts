import {Component, EventEmitter, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contacts-list-component',
  events: ['contactClicked'],
  properties: ['contacts']
})
@View({
  templateUrl: './components/contacts-list/contacts-list-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactsListComponent {
  contacts: Array<Contact>;

  contactClicked = new EventEmitter();
  onContactClicked (contact: Contact) {
    this.contactClicked.next(contact)
  }
}
