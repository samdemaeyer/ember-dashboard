import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class ProgressbarComponent extends Component {
  get percentageRight() {
    return this.args.percentageRight || true;
  }

  constructor() {
    super(...arguments);
    const classNames = ['progress-bar'];
    const { persentage, type } = this.args;
    type && classNames.push(`bg-${type}`);

    this.barClassNames = classNames.join(' ');
    this.style = htmlSafe(`width: ${persentage}%`);
    this.persentageRightLabel = persentage == 100 ? 'Complete!' : `${persentage}%`;
  }
}
