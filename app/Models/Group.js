module.exports = {
  name: 'name',
  description: 'string',
  belongs_to: {
    type: 'relationship',
    target: 'User',
    relationship: 'BELONGS_TO',
    direction: 'in',
    eager: true
  }
}
