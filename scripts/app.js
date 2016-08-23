(function ($) {

  /**
   * App initializer
   *
   * @method init
   */
  function init() {
    var $headlines = $('#headlines');

    var page = 0;
    var limit = 5;
    var headlineData = [];
    var apiUrl = 'http://www.stellarbiotechnologies.com/media/press-releases/json?limit=' + limit;
    var $moreBtn = $('#load-more');

    // attach Knockout bindings
    var HeadlinesVM = new equisolve.viewModels.HeadlinesViewModel();
    ko.applyBindings(HeadlinesVM, $headlines[0]);
    HeadlinesVM.hasMoreHeadlines(true);

    function loadHeadlines() {
      var offset = page * limit;
      var url = apiUrl + '&offset=' + offset;
      HeadlinesVM.isLoading(true);

      // make service request
      $.ajax({
        dataType: 'json',
        url: url,
        success: function(data) {
          if (!data || !data.news || data.news.length === 0) {
            HeadlinesVM.hasMoreHeadlines(false);
            HeadlinesVM.isLoading(false);
            return;
          }

          // update the view model
          for (i = 0; i < data.news.length; i++) {
            headlineData.push(data.news[i]);
          }
          HeadlinesVM.populateHeadlines(headlineData);
          HeadlinesVM.isLoading(false);
          page += 1;
        }
      });
    }

    // 'view more headlines' click event handler
    $moreBtn.on('click', loadHeadlines);

    // load headlines on page load
    loadHeadlines();
  }

  $(document).ready(init);

}(jQuery));
