import Controller from '@ember/controller';

export default class AuthenticatedIndexController extends Controller {
  constructor() {
    super(...arguments);
    this.lineChartdata = {
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
          data: [
            0,
            10000,
            5000,
            15000,
            10000,
            20000,
            15000,
            25000,
            20000,
            30000,
            25000,
            35000,
            30000,
            40000,
          ],
          backgroundColor: 'rgba(78, 115, 223, .1)',
          borderColor: 'rgba(78, 115, 223, 1)',
          borderWidth: 3,
        },
      ],
    };
    this.pieOptions = {
      cutoutPercentage: 50,
    }
    this.pieChartdata = {
      labels: ['Direct', 'Social', 'Referral'],
      datasets: [
        {
          data: [55, 30, 15],
          backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
        },
      ],
    };
  }
}
