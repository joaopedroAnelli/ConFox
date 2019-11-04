module.exports = {
  name: {
    type: 'name',
    primary: true,
    unique: 'true',
  },
  interest_in: {
    type: 'relationship',
    target: 'User',
    relationship: 'INTEREST_IN',
    direction: 'in'
  }
}
