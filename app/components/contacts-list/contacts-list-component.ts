import {Component, EventEmitter, Input, Output} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contacts-list-component',
  templateUrl: './components/contacts-list/contacts-list-component.html'
})
export class ContactsListComponent {
  @Input() contacts: Array<Contact>;

  @Output() contactClicked = new EventEmitter();

  onContactClicked (contact: Contact) {
    this.contactClicked.next(contact)
  }
}
