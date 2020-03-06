import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DashboardMessagesComponent extends Component {
  @tracked showMessages = false;

  @action
  toggleShowMessages() {
    this.showMessages = !this.showMessages;
  }
}
