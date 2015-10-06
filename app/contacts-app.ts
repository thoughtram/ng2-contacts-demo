import {Component, View, bootstrap} from 'angular2/angular2';

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
    Hello World
    `
})
class ContactsApp {
}

bootstrap(ContactsApp);
