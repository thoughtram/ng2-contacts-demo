import {Component, EventEmitter, Input, Output} from 'angular2/angular2';
import {CloneService} from '../../common/clone-service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contact-editor-component',
  providers: [CloneService],
  templateUrl: './components/contact-editor/contact-editor-component.html'
})
export class ContactEditorComponent {
  @Output() canceled = new EventEmitter();
  @Output() saved = new EventEmitter();

  constructor (private cloneService: CloneService<Contact>) {
  }

  @Input() set contact (value: Contact) {
    this.cloneService.setItem(value);
  }

  get contact () {
    return this.cloneService.getItem();
  }

  cancel (contact) {
    this.canceled.next(this.cloneService.restoreItem());
  }

  save (contact) {
    this.cloneService.commitChanges();
    this.saved.next(contact);
  }

}
