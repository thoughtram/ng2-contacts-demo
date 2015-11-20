import {Component, EventEmitter, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contacts-list-component',
  outputs: ['contactClicked'],
  inputs: ['contacts']
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
