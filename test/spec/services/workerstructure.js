'use strict';

describe('Service: workerStructure', function () {

  // load the service's module
  beforeEach(module('shopheroesApp'));

  // instantiate service
  var workerStructure;
  beforeEach(inject(function (_workerStructure_) {
    workerStructure = _workerStructure_;
  }));

  it('should do something', function () {
    expect(!!workerStructure).toBe(true);
  });

});
