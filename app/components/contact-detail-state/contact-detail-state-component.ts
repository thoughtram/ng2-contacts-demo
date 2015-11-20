import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ContactDetailComponent} from '../contact-detail/contact-detail-component';
import {RouteParams, Router} from 'angular2/router';

@Component({
  selector: 'contact-detail-state-component'
})
@View({
  template: `
    <contact-detail-component
      [contact]="contact"
      (back-clicked)="onBackClicked()"
      (edit-clicked)="onEditClicked($event)">
    </contact-detail-component>`,
  directives: [CORE_DIRECTIVES, ContactDetailComponent]
})
export class ContactDetailStateComponent {
  contact:Contact;
  router: Router;
  constructor (contactsService: ContactsService, router: Router, params:RouteParams) {
    this.contact = contactsService.getContact(params.get('id'));
    this.router = router;
  }

  onBackClicked () {
    this.router.navigateByUrl('/');
  }

  onEditClicked (contact) {
    this.router.navigateByUrl('/contact/' + contact.id + '/edit');
  }
}
