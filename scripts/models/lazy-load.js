;
equisolve.models = equisolve.models || {};

equisolve.models.HeadlineModel = function(data) {
  this.title = data.title;
  this.published = equisolve.utilities.dateFormat(data.published);
};
