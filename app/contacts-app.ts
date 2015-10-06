import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from './models/contact';
import {CONTACT_DATA} from './common/contact-data';

@Component({
  selector: 'contacts-app',
})
@View({
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
    `,
  directives: [CORE_DIRECTIVES]
})
class ContactsApp {
  contacts: Array<Contact> = CONTACT_DATA;
}

bootstrap(ContactsApp);
