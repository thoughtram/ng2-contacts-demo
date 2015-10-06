import {Component, bootstrap} from 'angular2/angular2';
import {Contact} from './models/contact';

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
    <span>Firstname:</span>
    <span>{{contact.firstname}}</span>
    </br>
    <span>Lastname:</span>
    <span>{{contact.lastname}}</span>
    `
})
class ContactsApp {
  contact: Contact = {
    id: 7,
    firstname: 'Diana',
    lastname: 'Ellis',
    street: '6554 park lane',
    zip: '43378',
    city: 'Rush',
    image: 'images/7.jpg'
  };
}

bootstrap(ContactsApp);
