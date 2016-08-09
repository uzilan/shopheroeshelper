'use strict';

describe('Service: pointsService', function () {

  // load the service's module
  beforeEach(module('shopheroesApp'));

  // instantiate service
  var pointsService;
  beforeEach(inject(function (_pointsService_) {
    pointsService = _pointsService_;
  }));

  it('should do something', function () {
    expect(!!pointsService).toBe(true);
  });

});
