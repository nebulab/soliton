export default function() {
  this.get('https://api.github.com/search/repositories', function(db) {
    return {
      "total_count": db.packages.length,
      "incomplete_results": false,
      "items": db.packages
    };
  });
}
