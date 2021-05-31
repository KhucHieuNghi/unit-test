const faker = require("faker");

module.exports = () => {
  return {
    userId: faker.random.number(),
    title: faker.random.words(10),
    content: faker.random.words(100)
  }
}
