'use strict';

describe('Controller: LoginctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('taskboardApp'));

  var LoginctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginctrlCtrl = $controller('LoginctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginctrlCtrl.awesomeThings.length).toBe(3);
  });
});
