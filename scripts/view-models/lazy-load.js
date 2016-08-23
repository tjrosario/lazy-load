;
equisolve.viewModels = equisolve.viewModels || {};

equisolve.viewModels.HeadlinesViewModel = function() {
  var self = this;
  self.headlines = ko.observableArray([]);
  self.isLoading = ko.observable();
  self.hasMoreHeadlines = ko.observable();

  self.populateHeadlines = function(data) {
    self.headlines($.map(data, function(i) {
      return new equisolve.models.HeadlineModel(i); 
    }));
  };
};
