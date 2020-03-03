import Model, { attr } from '@ember-data/model';

export default class EarningsModel extends Model {
  @attr('number') amount;
  @attr('date') createdAt;
}
