import app from '../app';
import supertest from 'supertest';
import should from 'should';
import _ from 'lodash';

const request = supertest.agent(app.listen());

describe('index', function () {
  it('should say "Test Game"', function (done) {
    request
      .get('/')
      .expect(200, done);
  });
});
