function searchModels(params) {
    return {
        "totalHitCount": 0,
        "pageSize": 0,
        "pageFrom": 0,
        "responseObjects": [
          {
            "id": "string",
            "label": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "status": "INCOMPLETE",
            "modified": "string",
            "created": "string",
            "contentModified": "string",
            "type": "PROFILE",
            "prefix": "string",
            "comment": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "contributor": [
              "3fa85f64-5717-4562-b3fc-2c963f66afa6"
            ],
            "isPartOf": [
              "string"
            ],
            "language": [
              "string"
            ]
          }
        ]
      }
}

function organizations(params) {
  return [
    {
      "id": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
      "label": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ]
}

module.exports = {
  searchModels,
  organizations
}