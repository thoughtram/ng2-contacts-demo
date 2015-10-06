import {Component, bootstrap} from 'angular2/angular2';
import {Contact} from './models/contact';
import {ContactsService} from './common/contacts-service';

@Component({
  selector: 'contacts-app',
  template: `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Contacts</a>
        </div>
      </nav>
    </div>
    <ul>
      <li *ng-for="#contact of contacts" style="margin-bottom: 10px;">
        <span>Firstname:</span>
        <span>{{contact.firstname}}</span>
        </br>
        <span>Lastname:</span>
        <span>{{contact.lastname}}</span>
      </li>
    </ul>
    `
})
class ContactsApp {
  contacts: Array<Contact>;

  constructor (contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }
}

bootstrap(ContactsApp, [ContactsService]);
