import Route from '@ember/routing/route';

export default class ForgotPasswordRoute extends Route {
  beforeModel() {
    document.body.classList.add('bg-gradient-primary');
  }

  resetController() {
    document.body.classList.remove('bg-gradient-primary');
  }
}
