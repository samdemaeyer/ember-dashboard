import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class ApplicationRoute extends Route {
  model() {
    return hash({
      messages: this.store.findAll('message', { include: 'user' })
    });
  }
}
