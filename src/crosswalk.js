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
      "label": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "editorialNote": "string",
      "status": "DRAFT",
      "state": "DRAFT",
      "visibility": "PUBLIC",      
      "subject": {
        "conceptURI": "string",
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "definition": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "terminology": {
          "label": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          },
          "uri": "string"
        },
        "status": "INCOMPLETE"
      },
      "identifier": "string",
      "note": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "uri": "string",
      "contributor": [
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
      "contact": "string",
      "format": "CSV",
      "aggregationKey": "string",
      "description": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "languages": [
        "string"
      ],
      "organization": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "editorialNote": "string",
    "status": "DRAFT",
    "state": "DRAFT",
    "visibility": "PUBLIC",    
    "subject": {
      "conceptURI": "string",
      "label": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "definition": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "terminology": {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "uri": "string"
      },
      "status": "INCOMPLETE"
    },
    "identifier": "string",
    "note": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "uri": "string",
    "contributor": [
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
    "contact": "string",
    "format": "CSV",
    "aggregationKey": "string",
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "languages": [
      "string"
    ],
    "organization": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
    "label": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "editorialNote": "string",
    "status": "DRAFT",
    "state": "DRAFT",
    "visibility": "PUBLIC",       
    "subject": {
      "conceptURI": "string",
      "label": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "definition": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "terminology": {
        "label": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "uri": "string"
      },
      "status": "INCOMPLETE"
    },
    "identifier": "string",
    "note": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "uri": "string",
    "contributor": [
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
    "contact": "string",
    "format": "CSV",
    "aggregationKey": "string",
    "description": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    },
    "languages": [
      "string"
    ],
    "organization": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
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
  return fs.readFileSync('data/datacite-to-dcat-ap.xsl')
}


module.exports = {
  add,
  upload,
  get,
  getOriginal
}