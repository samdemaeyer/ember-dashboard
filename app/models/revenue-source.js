import Model, { attr } from '@ember-data/model';

export default class RevenueSourceModel extends Model {
  @attr('number') amount;
  @attr('string') type;
  @attr('date') createdAt;
}
