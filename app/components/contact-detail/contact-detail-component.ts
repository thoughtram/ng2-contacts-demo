import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contact-detail-component',
  templateUrl: './components/contact-detail/contact-detail-component.html'
})
export class ContactDetailComponent {
  @Input() contact: Contact;
  @Output() backClicked = new EventEmitter();

  goBack () {
    this.backClicked.next(null);
  }

}
