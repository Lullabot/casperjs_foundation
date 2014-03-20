/**
 * Search form tests.
 */

casper.test.begin('Tests search form submission and results', 2, function suite(test) {
  casper.start();

  // Open the homepage.
  casper.thenOpenPath('/', function() {
    casper.waitFor(function check() {
      // Fill out the search form with 'health' and submit it.
      return this.evaluate(function() {
        jQuery('#site_search_text').val('health');
        jQuery('#site_search_text').trigger('input');
        return jQuery('div#site-search input[type="submit"]').trigger('click');
      });
    }, function then() {
      // Check current URL and search results.
      test.assertUrlMatch(/search\/health/, 'Current path is search/health');
      test.assertExists('div.view-search-pane div.view-content div.views-row', 'Search results are listed under "Stories".');
    }, function timeout() {
      this.echo("Search form has not been submitted.").exit();
    });
  });

  casper.run(function() {
    test.done();
  });
});
