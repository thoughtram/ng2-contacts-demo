import {Component, EventEmitter, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contact-detail-component',
  properties: ['contact'],
  events: ['backClicked']
})
@View({
  templateUrl: './components/contact-detail/contact-detail-component.html',
  directives: [CORE_DIRECTIVES]
})
export class ContactDetailComponent {
  contact: Contact;
  backClicked = new EventEmitter();

  goBack () {
    this.backClicked.next(null);
  }

}
