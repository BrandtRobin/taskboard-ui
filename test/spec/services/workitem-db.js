'use strict';

describe('Service: workItemDb', function () {

  // load the service's module
  beforeEach(module('taskboardApp'));

  // instantiate service
  var workItemDb;
  beforeEach(inject(function (_workItemDb_) {
    workItemDb = _workItemDb_;
  }));

  it('should do something', function () {
    expect(!!workItemDb).toBe(true);
  });

});
