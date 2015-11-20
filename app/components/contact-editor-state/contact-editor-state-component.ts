import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ContactEditorComponent} from '../contact-editor/contact-editor-component';
import {Router, RouteParams} from 'angular2/router';

@Component({
  selector: 'contact-editor-state-component'
})
@View({
  template: `
    <contact-editor-component
      [contact]="contact"
      (canceled)="onCanceled($event)"
      (saved)="onSaved($event)">
    </contact-editor-component>`,
  directives: [CORE_DIRECTIVES, ContactEditorComponent]
})
export class ContactEditorStateComponent {
  router: Router;
  contact: Contact;
  constructor (contactsService: ContactsService,
               router:Router, params:RouteParams) {
    this.contact = contactsService.getContact(params.get('id'));
    this.router = router;
  }

  onCanceled (contact) {
    this.goToDetails(contact);
  }

  onSaved (contact) {
    this.goToDetails(contact);
  }

  private goToDetails (contact) {
    this.router.navigateByUrl('/contact/' + contact.id);
  }
}
