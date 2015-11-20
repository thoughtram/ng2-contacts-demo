import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ContactsListComponent} from '../contacts-list/contacts-list-component';
import {Router} from 'angular2/router';

@Component({
  selector: 'contacts-list-state-component'
})
@View({
  template: `
    <contacts-list-component
      [contacts]="contacts"
      (contact-clicked)="onContactClicked($event)">
    </contacts-list-component>`,
  directives: [CORE_DIRECTIVES, ContactsListComponent]
})
export class ContactsListStateComponent {
  contacts: Array<Contact>;
  router: Router;
  constructor (contactsService: ContactsService, router: Router) {
    this.contacts = contactsService.getContacts();
    this.router = router;
  }

  onContactClicked (contact) {
    this.router.navigateByUrl('/contact/' + contact.id);
  }
}
