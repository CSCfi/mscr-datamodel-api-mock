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

function mscrSearch({ _type }) {
  if (_type == 'crosswalk') {
    return {
      "took": 18,
      "timed_out": false,
      "_shards": {
        "total": 1,
        "successful": 1,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 1,
          "relation": "eq"
        },
        "max_score": 1,
        "hits": [
          {
            "_index": "crosswalks_v2",
            "_id": "urn%3AIAMNOTAPID%3Af4f11101-6f95-4936-812d-1230b98ecfb5",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:f4f11101-6f95-4936-812d-1230b98ecfb5",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T13:32:44.288Z",
              "created": "2023-06-16T07:03:11.42Z",
              "contentModified": "2023-06-16T07:03:11.42Z",
              "type": "CROSSWALK",
              "prefix": "urn:IAMNOTAPID:f4f11101-6f95-4936-812d-1230b98ecfb5",
              "comment": {
                "en": "string2"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ],
              "sourceSchema": "urn:IAMNOTAPID:d840d215-5a16-4e5d-af68-70a059d58b59",
              "targetSchema": "urn:IAMNOTAPID:3a56a297-1f01-42c0-bc72-47b2345f6368"
            }
          }
        ]
      },
      "aggregations": {
        "languages": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "en",
              "doc_count": 1
            }
          ]
        }
      }
    }
  }
  else {
    return {
      "took": 2,
      "timed_out": false,
      "_shards": {
        "total": 1,
        "successful": 1,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": {
          "value": 8,
          "relation": "eq"
        },
        "max_score": 1,
        "hits": [
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3Ae6d55117-1117-4192-9c4f-6d1ef4f9ddf0",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:e6d55117-1117-4192-9c4f-6d1ef4f9ddf0",
              "label": {
                "en": "string"
              },
              "status": "INCOMPLETE",
              "modified": "2023-06-22T06:48:04.906Z",
              "created": "2023-06-22T06:48:04.906Z",
              "contentModified": "2023-06-22T06:48:04.906Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:e6d55117-1117-4192-9c4f-6d1ef4f9ddf0",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A62ae6e1d-a38a-487f-bfc4-29e7fd35cc16",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:62ae6e1d-a38a-487f-bfc4-29e7fd35cc16",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T14:18:06.563Z",
              "created": "2023-06-22T14:18:06.563Z",
              "contentModified": "2023-06-22T14:18:06.563Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:62ae6e1d-a38a-487f-bfc4-29e7fd35cc16",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A35d37410-5b1c-428c-98c7-f97539f991fd",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:35d37410-5b1c-428c-98c7-f97539f991fd",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T13:32:29.449Z",
              "created": "2023-06-22T13:32:29.449Z",
              "contentModified": "2023-06-22T13:32:29.449Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:35d37410-5b1c-428c-98c7-f97539f991fd",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A3484146d-f2d2-4552-bfde-e42ec7de0e52",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:3484146d-f2d2-4552-bfde-e42ec7de0e52",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T13:25:47.493Z",
              "created": "2023-06-22T13:25:47.493Z",
              "contentModified": "2023-06-22T13:25:47.493Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:3484146d-f2d2-4552-bfde-e42ec7de0e52",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A2cae333e-882b-4bad-80dd-762f2d34c6bf",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:2cae333e-882b-4bad-80dd-762f2d34c6bf",
              "label": {
                "en": "string"
              },
              "status": "INCOMPLETE",
              "modified": "2023-06-16T07:19:57.072Z",
              "created": "2023-06-16T07:19:57.072Z",
              "contentModified": "2023-06-16T07:19:57.072Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:2cae333e-882b-4bad-80dd-762f2d34c6bf",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A287a3d46-ed7b-454d-a6a5-9765b7c34baa",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:287a3d46-ed7b-454d-a6a5-9765b7c34baa",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T06:48:53.45Z",
              "created": "2023-06-22T06:48:53.45Z",
              "contentModified": "2023-06-22T06:48:53.45Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:287a3d46-ed7b-454d-a6a5-9765b7c34baa",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A88c905e5-5c0b-4eda-801e-4f26318556bf",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:88c905e5-5c0b-4eda-801e-4f26318556bf",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T14:11:56.546Z",
              "created": "2023-06-22T14:11:56.546Z",
              "contentModified": "2023-06-22T14:11:56.546Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:88c905e5-5c0b-4eda-801e-4f26318556bf",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
          ,
          {
            "_index": "models_v2",
            "_id": "urn%3AIAMNOTAPID%3A9291d5b8-a0fe-4b9c-9b8b-5361034d5377",
            "_score": 1,
            "_source": {
              "id": "urn:IAMNOTAPID:9291d5b8-a0fe-4b9c-9b8b-5361034d5377",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-06-22T13:20:30.403Z",
              "created": "2023-06-22T13:20:30.403Z",
              "contentModified": "2023-06-22T13:20:30.403Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:9291d5b8-a0fe-4b9c-9b8b-5361034d5377",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "isPartOf": [],
              "language": [
                "en"
              ]
            }
          }
        ]
      },
      "aggregations": {
        "languages": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "en",
              "doc_count": 8
            }
          ]
        }
      }
    }
  }
}

module.exports = {
  searchModels,
  organizations,
  mscrSearch
}