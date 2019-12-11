module.exports = {
  name: 'name',
  email:  {
    type: 'email',
    primary: true,
    unique: 'true',
  },
  password: 'string',
  interest_in: {
    type: 'relationship',
    target: 'Interest',
    relationship: 'INTEREST_IN',
    direction: 'out'
  },
  belongs_to: {
    type: 'relationship',
    target: 'Group',
    relationship: 'BELONGS_TO',
    direction: 'out'
  }
}
