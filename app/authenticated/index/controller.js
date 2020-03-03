import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class AuthenticatedIndexController extends Controller {
  constructor() {
    super(...arguments);
    this.pieOptions = {
      cutoutPercentage: 55,
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true
        }
      }
    }
  }

  @computed('model')
  get earningsChartData() {
    return {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          pointBackgroundColor: 'rgba(0, 0, 0, 0.1)',
          label: 'Earnings',
          data: this.model.earnings.mapBy('amount'),
          backgroundColor: 'rgba(78, 115, 223, .1)',
          borderColor: 'rgba(78, 115, 223, 1)',
          borderWidth: 3,
        },
      ],
    };
  }


  @computed('model')
  get revenueSourceChartData() {
    return {
      labels: this.model.revenueSources.mapBy('type'),
      datasets: [
        {
          data: this.model.revenueSources.mapBy('amount'),
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        },
      ],
    };
  }
}
