export function initialize(application) {
  application.inject('route', 'github', 'service:github');
}

export default {
  name: 'github',
  initialize
};
