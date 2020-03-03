import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class IndexRoute extends Route {
  model() {
    return hash({
      earnings: this.store.findAll('earning'),
      revenueSources: this.store.findAll('revenue-source'),
    });
  }
}
