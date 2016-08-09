'use strict';

describe('Directive: points', function () {

  // load the directive's module
  beforeEach(module('shopheroesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<points></points>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the points directive');
  }));
});
