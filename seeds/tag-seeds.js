const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'jazz music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'orange',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'grey',
  },
  {
    tag_name: 'rap music',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
