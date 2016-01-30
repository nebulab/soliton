export default function() {
  this.get('https://api.github.com/search/repositories', function(db) {
    return db.packages;
  });
}
