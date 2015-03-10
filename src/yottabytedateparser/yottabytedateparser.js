angular.module('ui.bootstrap.yottabytedateparser', [])

.service('yottabyteDateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {

  this.parse = function(input, compare_time) {
    if ( !angular.isString(input) ) {
      return input;
    }

    var dt = compare_time; // now
    var d_re = /^-([\d]{1,})d\s*$/;
    var h_re = /^-([\d]{1,})h\s*$/;
    var m_re = /^-([\d]{1,})m\s*$/;
    var number_re = /^(-)?\d*\s*$/;
    if( input.match(d_re) && input.match(d_re).length === 2 ) {
      var days_ago = Number(input.match(d_re)[1]);
      dt = dt - days_ago * (1000 * 60 * 60 * 24);
      return dt;
    } else if( input.match(h_re) && input.match(h_re).length === 2 ) {
      var hours_ago = Number(input.match(h_re)[1]);
      dt = dt - hours_ago * (1000 * 60 * 60);
      return dt;
    } else if( input.match(m_re) && input.match(m_re).length === 2) {
      var minutes_ago = Number(input.match(m_re)[1]);
      dt = dt - minutes_ago * (1000 * 60);
      return dt;
    } else if( input.match(number_re)) {
      dt = new Date();
      return dt;
    }

  };

}]);

