'use strict';

describe('Service: workerConstants', function () {

  // load the service's module
  beforeEach(module('shopheroesApp'));

  // instantiate service
  var workerConstants;
  beforeEach(inject(function (_workerConstants_) {
    workerConstants = _workerConstants_;
  }));

  it('should do something', function () {
    expect(!!workerConstants).toBe(true);
  });

});
