function user(params) {
    return {
        "anonymous": false,
        "email": "admin@localhost",
        "firstName": "Admin",
        "lastName": "User",
        "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "superuser": true,
        "newlyCreated": false,
        "rolesInOrganizations": {
          "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63": [
            "ADMIN"
          ]
        },
        "organizationsInRole": {
          "ADMIN": [
            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          ]
        },
        "tokenCreatedAt": "2023-07-18T12:47:01.817Z",
        "tokenInvalidationAt": "2023-07-18T12:47:01.817Z",
        "containerUri": "string",
        "tokenRole": "string",
        "enabled": true,
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "authorities": [
          {
            "authority": "ADMIN"
          }
        ]
      }
}

module.exports = {
    user
}