import {Component, EventEmitter, View, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {CloneService} from '../../common/clone-service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'contact-editor-component',
  properties: ['contact'],
  events: ['canceled', 'saved'],
  bindings: [CloneService]
})
@View({
  templateUrl: './components/contact-editor/contact-editor-component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ContactEditorComponent {
  canceled = new EventEmitter();
  saved = new EventEmitter();

  constructor (private cloneService: CloneService<Contact>) {
  }

  set contact (value: Contact) {
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
