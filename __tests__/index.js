const index = require('../index');

it('Basic test', () => {
  expect(index).toHaveProperty('extends');
  expect(index.extends).toContain('airbnb-base');
});
