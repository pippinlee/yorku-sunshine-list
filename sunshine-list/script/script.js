// This file loads the York University Sunshine list data
// To change data files change the ajaxUrl value
// This file relies on the yorku-data.json file

$(window).load(function() {
  $('#my-ajax-table').dynatable({
    features: {
      paginate: false,
      search: false,
      recordCount: false
    },
    dataset: {
      ajax: true,
      ajaxOnLoad: true,
      ajaxUrl: 'yorku-data.json',
      records: []
    }
  });
});