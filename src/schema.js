const fs = require("fs");

function add(params) {
  return {
    "created": "string",
    "modified": "string",
    "modifier": {
      "id": "string",
      "name": "string",
    },
    "creator": {
      "id": "string",
      "name": "string",
    },
    "type": "PROFILE",
    "prefix": "string",
    "status": "INCOMPLETE",
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "languages": ["string"],
    "organizations": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    ],
    "groups": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "identifier": "string",
      },
    ],
    "internalNamespaces": ["string"],
    "externalNamespaces": [
      {
        "name": "string",
        "namespace": "string",
        "prefix": "string",
      },
    ],
    "terminologies": [
      {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "uri": "string",
      },
    ],
    "codeLists": [
      {
        "id": "string",
        "prefLabel": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "status": "INCOMPLETE",
      },
    ],
    "contact": "string",
    "documentation": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "format": "CSV",
    "aggregationKey": "string",
    "fileMetadata": [
      {
        "contentType": "string",
        "size": 0,
        "fileID": 0,
      },
    ],
    "pid": "string",
  };
}

function upload(params) {
  return {
    "created": "string",
    "modified": "string",
    "modifier": {
      "id": "string",
      "name": "string",
    },
    "creator": {
      "id": "string",
      "name": "string",
    },
    "type": "PROFILE",
    "prefix": "string",
    "status": "INCOMPLETE",
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "languages": ["string"],
    "organizations": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    ],
    "groups": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "identifier": "string",
      },
    ],
    "internalNamespaces": ["string"],
    "externalNamespaces": [
      {
        "name": "string",
        "namespace": "string",
        "prefix": "string",
      },
    ],
    "terminologies": [
      {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "uri": "string",
      },
    ],
    "codeLists": [
      {
        "id": "string",
        "prefLabel": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "status": "INCOMPLETE",
      },
    ],
    "contact": "string",
    "documentation": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "format": "CSV",
    "aggregationKey": "string",
    "fileMetadata": [
      {
        "contentType": "string",
        "size": 0,
        "fileID": 0,
      },
    ],
    "pid": "string",
  };
}

function get(params) {
  return {
    "created": "string",
    "modified": "string",
    "modifier": {
      "id": "string",
      "name": "string",
    },
    "creator": {
      "id": "string",
      "name": "string",
    },
    "type": "PROFILE",
    "prefix": "string",
    "status": "INCOMPLETE",
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "languages": ["string"],
    "organizations": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "parentOrganization": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    ],
    "groups": [
      {
        "id": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "identifier": "string",
      },
    ],
    "internalNamespaces": ["string"],
    "externalNamespaces": [
      {
        "name": "string",
        "namespace": "string",
        "prefix": "string",
      },
    ],
    "terminologies": [
      {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "uri": "string",
      },
    ],
    "codeLists": [
      {
        "id": "string",
        "prefLabel": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string",
        },
        "status": "INCOMPLETE",
      },
    ],
    "contact": "string",
    "documentation": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string",
    },
    "format": "CSV",
    "aggregationKey": "string",
    "fileMetadata": [
      {
        "contentType": "string",
        "size": 0,
        "fileID": 0,
      },
    ],
    "pid": "string",
  };
}

function getAllSchemas(params) {
  return [
    {
      "created": "string",
      "modified": "string",
      "modifier": {
        "id": "1",
        "name": "string",
      },
      "creator": {
        "id": "1",
        "name": "one",
      },
      "type": "PROFILE",
      "prefix": "string",
      "status": "INCOMPLETE",
      "organizations": [
        {
          "id": "1",
          "label": {
            "additionalProp1": "string",
          },
          "parentOrganization": "oneone",
        },
      ],
      "groups": [
        {
          "id": "1",
          "label": {
            "additionalProp1": "string",
          },
          "identifier": "string",
        },
      ],
      "pid": "1",
    },
    {
      "created": "string",
      "modified": "string",
      "modifier": {
        "id": "2",
        "name": "string",
      },
      "creator": {
        "id": "2",
        "name": "two",
      },
      "type": "PROFILE",
      "prefix": "string",
      "status": "INCOMPLETE",
      "organizations": [
        {
          "id": "1",
          "label": {
            "additionalProp1": "string",
          },
          "parentOrganization": "oneone",
        },
      ],
      "groups": [
        {
          "id": "1",
          "label": {
            "additionalProp1": "string",
          },
          "identifier": "string",
        },
      ],
      "pid": "2",
    },
    {
      "created": "string",
      "modified": "string",
      "modifier": {
        "id": "3",
        "name": "string",
      },
      "creator": {
        "id": "2",
        "name": "two",
      },
      "type": "PROFILE",
      "prefix": "string",
      "status": "INCOMPLETE",
      "organizations": [
        {
          "id": "2",
          "label": {
            "additionalProp1": "string",
          },
          "parentOrganization": "twotwo",
        },
      ],
      "groups": [
        {
          "id": "2",
          "label": {
            "additionalProp1": "string",
          },
          "identifier": "string",
        },
      ],
      "pid": "3",
    },
  ];
}

function getOriginal(params) {
  return fs.readFileSync("data/schema_original_data.json");
}

function getInternal(params) {
  return fs.readFileSync("data/schema_internal_data.ttl");
}

module.exports = {
  add,
  upload,
  get,
  getOriginal,
  getInternal,
  getAllSchemas,
};
