describe('yottabyte date parser', function () {
  var yottabyteDateParser;

  beforeEach(module('ui.bootstrap.yottabytedateparser'));
  beforeEach(inject(function (_yottabyteDateParser_) {
    yottabyteDateParser = _yottabyteDateParser_;
  }));

  function expectParse(input, compare_time, date) {
    expect(yottabyteDateParser.parse(input, compare_time)).toEqual(date);
  }

  describe('wih yottabyte formats', function() {
    it('should work correctly for `-1d`, `-1m`, `-1h`', function() {
      compare_time = new Date();
      expectParse('-1d', compare_time, (compare_time) - 1000 * 60 * 60 * 24 );
      expectParse('-1h', compare_time, (compare_time) - 1000 * 60 * 60 );
      expectParse('-1m', compare_time, (compare_time) - 1000 * 60);
    });

  });

});
