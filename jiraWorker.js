

var bindRefreshBtn = function() {
  bindFilter1RefreshBtn();
  bindFilter2RefreshBtn();
  // ...
}

var bindFilter1RefreshBtn = function() {
  $('#btn-filter-1-trigger').bind('click', function() {
    filter1Trigger();
  });
}

var filterOnload = function() {
  filter1Trigger();
  filter2Trigger();
  
  // ...
}

var filter1Trigger = function() {
  $.ajax({
    url: $URL,
    method: 'GET',
    dataType: 'json',
    beforeSend: function(request) {
     request.setRequestHeader('Authorization', token);
    }
  }).done(function(result){
    console.info(result);
    if (result) {
      $('#filter-1-body').empty().append(result.body);
    }
  }).fail(function(err){
    console.error(err);
  });
}

var filter2Trigger = function() {
  // ...
}