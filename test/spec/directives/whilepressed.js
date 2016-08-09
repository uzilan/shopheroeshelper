'use strict';

describe('Directive: whilePressed', function () {

  // load the directive's module
  beforeEach(module('shopheroesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<while-pressed></while-pressed>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the whilePressed directive');
  }));
});
