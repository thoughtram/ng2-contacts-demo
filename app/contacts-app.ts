import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from './models/contact';
import {ContactsService} from './common/contacts-service';
import {ContactsListComponent} from './components/contacts-list/contacts-list-component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';

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
    <router-outlet></router-outlet>
    `,
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: ContactsListComponent }
])
class ContactsApp {
}

bootstrap(ContactsApp, [ContactsService, ROUTER_BINDINGS]);
