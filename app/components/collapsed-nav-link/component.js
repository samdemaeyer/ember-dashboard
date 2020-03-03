import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action, computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/template';

export default class CollapsedNavLinkComponent extends Component {
  @service router;
  @tracked style;
  @tracked dropdownHeight;

  constructor() {
    super(...arguments);
    this.router.currentRouteName;
  }

  @computed('router.currentRouteName')
  get isOpen() {
    this.style = htmlSafe('height: 0');
    return false;
  }
  set isOpen(val) {
    return val;
  }

  @action
  toggle() {
    set(this, 'isOpen', !this.isOpen);
    const height = this.isOpen ? `${this.dropdownHeight}px` : 0;
    this.style = htmlSafe(`height: ${height}`);
  }

  @action
  setHeight(element) {
    this.dropdownHeight = element.getBoundingClientRect().height;
  }
}
