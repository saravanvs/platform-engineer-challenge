const assert = require('assert');
const { extractSummary } = require('../src/lib');

const sampleJSON = {
  some_field: 'extra stuff',
  some_other_field: 'more extra stuff',
  full_name: 'Magic Summarizer',
  description: 'Summarizes most things',
  html_url: 'http://example.com'
};

describe('lib', function() {
  describe('#extractSummary()', function() {
    it('should pull relevant fields off object', function() {
      const result = extractSummary(sampleJSON);
      const expected = {
        full_name: 'Magic Summarizer',
        description: 'Summarizes most things',
        html_url: 'http://example.com'
      };
      assert.deepStrictEqual(result, expected);
    });
  });
});
