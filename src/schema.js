const fs = require('fs');

function add(params) {
    return {
        "created": "string",
        "modified": "string",
        "modifier": {
          "id": "string",
          "name": "string"
        },
        "creator": {
          "id": "string",
          "name": "string"
        },
        "type": "PROFILE",
        "prefix": "string",
        "status": "INCOMPLETE",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "description": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "languages": [
          "string"
        ],
        "organizations": [
          {
            "id": "string",
            "label": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        ],
        "groups": [
          {
            "id": "string",
            "label": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "identifier": "string"
          }
        ],
        "internalNamespaces": [
          "string"
        ],
        "externalNamespaces": [
          {
            "name": "string",
            "namespace": "string",
            "prefix": "string"
          }
        ],
        "terminologies": [
          {
            "label": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "uri": "string"
          }
        ],
        "codeLists": [
          {
            "id": "string",
            "prefLabel": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "status": "INCOMPLETE"
          }
        ],
        "contact": "string",
        "documentation": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "format": "CSV",
        "aggregationKey": "string",
        "fileMetadata": [
          {
            "contentType": "string",
            "size": 0,
            "fileID": 0
          }
        ],
        "pid": "string"
      }
}

function upload(params) {
  return {
    "created": "string",
    "modified": "string",
    "modifier": {
      "id": "string",
      "name": "string"
    },
    "creator": {
      "id": "string",
      "name": "string"
    },
    "type": "PROFILE",
    "prefix": "string",
    "status": "INCOMPLETE",
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "languages": [
      "string"
    ],
    "organizations": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ],
    "groups": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "identifier": "string"
      }
    ],
    "internalNamespaces": [
      "string"
    ],
    "externalNamespaces": [
      {
        "name": "string",
        "namespace": "string",
        "prefix": "string"
      }
    ],
    "terminologies": [
      {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "uri": "string"
      }
    ],
    "codeLists": [
      {
        "id": "string",
        "prefLabel": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "status": "INCOMPLETE"
      }
    ],
    "contact": "string",
    "documentation": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "format": "CSV",
    "aggregationKey": "string",
    "fileMetadata": [
      {
        "contentType": "string",
        "size": 0,
        "fileID": 0
      }
    ],
    "pid": "string"
  }
}

function get(params) {
  return {
    "created": "string",
    "modified": "string",
    "modifier": {
      "id": "string",
      "name": "string"
    },
    "creator": {
      "id": "string",
      "name": "string"
    },
    "type": "PROFILE",
    "prefix": "string",
    "status": "INCOMPLETE",
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "languages": [
      "string"
    ],
    "organizations": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ],
    "groups": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "identifier": "string"
      }
    ],
    "internalNamespaces": [
      "string"
    ],
    "externalNamespaces": [
      {
        "name": "string",
        "namespace": "string",
        "prefix": "string"
      }
    ],
    "terminologies": [
      {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "uri": "string"
      }
    ],
    "codeLists": [
      {
        "id": "string",
        "prefLabel": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "status": "INCOMPLETE"
      }
    ],
    "contact": "string",
    "documentation": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "format": "CSV",
    "aggregationKey": "string",
    "fileMetadata": [
      {
        "contentType": "string",
        "size": 0,
        "fileID": 0
      }
    ],
    "pid": "string"
  }  
}

function getOriginal(params) {
  return fs.readFileSync('data/schema_original_data.json')
}

function getInternal(params) {
  return fs.readFileSync('data/schema_internal_data.ttl')
}

module.exports = {
  add,
  upload,
  get,
  getOriginal,
  getInternal
}