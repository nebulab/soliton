import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) { return `3098584${i}`; },
  name(i) { return `solidus${i}`; },
  full_name(i) { return `solidusio/solidus${i}`; },
  html_url(i) { return `https://github.com/solidusio/solidus${i}`; },
  description(i) { return `Solidus, Rails eCommerce System ${i}`; },
  forks() { return Math.floor((Math.random() * 100) + 1); },
  stargazers_count() { return Math.floor((Math.random() * 100) + 1); },
  watchers_count() { return Math.floor((Math.random() * 100) + 1); }
});
