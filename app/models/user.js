import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class UserModel extends Model {
  @attr('string') firstName;
  @attr('string') surName;
  @attr('string') avatar;

  @computed('firstName', 'surName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
