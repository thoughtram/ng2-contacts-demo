import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from './models/contact';
import {ContactsService} from './common/contacts-service';
import {ContactsListStateComponent} from './components/contacts-list-state/contacts-list-state-component';
import {ContactDetailStateComponent} from './components/contact-detail-state/contact-detail-state-component';
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
  { path: '/', component: ContactsListStateComponent },
  { path: '/contact/:id', component: ContactDetailStateComponent },
])
class ContactsApp {
}

bootstrap(ContactsApp, [ContactsService, ROUTER_BINDINGS]);
