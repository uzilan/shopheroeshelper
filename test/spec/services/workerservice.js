'use strict';

describe('Service: workerService', function () {

  // load the service's module
  beforeEach(module('shopheroesApp'));

  // instantiate service
  var workerService;
  beforeEach(inject(function (_workerService_) {
    workerService = _workerService_;
  }));

  it('should do something', function () {
    expect(!!workerService).toBe(true);
  });

});
