import Model, { attr, belongsTo } from '@ember-data/model';
import { computed } from '@ember/object';

export default class MessageModel extends Model {
  @attr('string') content;
  @attr('date') createdAt;

  @belongsTo('user') user;

  @computed('createdAt')
  get createdAtAgo() {
    return moment(moment(this.createdAt) - moment()).format('ss');
  }
}
