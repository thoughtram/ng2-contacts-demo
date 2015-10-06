import {Component, bootstrap} from 'angular2/angular2';

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
    Hello {{name}}
    `
})
class ContactsApp {
  name = 'World';
}

bootstrap(ContactsApp);
