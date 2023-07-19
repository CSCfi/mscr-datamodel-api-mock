function user(params) {
    return {
      anonymous: false,
      email: 'admin@localhost',
      firstName: 'Admin',
      lastName: 'User',
      id: '4ce70937-6fa4-49af-a229-b5f10328adb8',
      superuser: true,
      newlyCreated: false,
      rolesInOrganizations: { '7d3a3c00-5a6b-489b-a3ed-63bb58c26a63': [ 'ADMIN' ] },
      organizationsInRole: { ADMIN: [ '7d3a3c00-5a6b-489b-a3ed-63bb58c26a63' ] },
      tokenCreatedAt: '2023-06-07T13:18:55.652934',
      tokenInvalidationAt: '2023-12-07T13:18:55.652934',
      containerUri: null,
      tokenRole: null,
      enabled: true,
      accountNonExpired: true,
      accountNonLocked: true,
      credentialsNonExpired: true,
      password: null,
      username: 'admin@localhost',
      authorities: [ { authority: 'ROLE_ADMIN' }, { authority: 'ROLE_USER' } ]
    }
}

module.exports = {
    user
}