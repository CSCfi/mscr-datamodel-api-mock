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
        "status": "DRAFT",
        "state": "DRAFT",
        "visibility": "PUBLIC", 
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
  if (_type == 'CROSSWALK') {
    return {
      "took": 10,
      "timed_out": false,
      "_shards": {
        "failed": 0.0,
        "successful": 2.0,
        "total": 2.0,
        "skipped": 0.0
      },
      "hits": {
        "total": {
          "relation": "eq",
          "value": 1
        },
        "hits": [
          {
            "_index": "crosswalks_v2",
            "_id": "urn%3AIAMNOTAPID%3Af4f11101-6f95-4936-812d-1230b98ecfb5",
            "_source": {
              "id": "urn:IAMNOTAPID:f4f11101-6f95-4936-812d-1230b98ecfb5",
              "label": {
                "en": "string"
              },
              "status": "DRAFT",
              "state": "DRAFT",
              "visibility": "PUBLIC", 
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
              "organizations": [
                {
                  "id": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
                  "label": {
                    "fi": "test",
                    "sv": "test",
                    "en": "test"
                  }
                }
              ],
              "isPartOf": [],
              "language": [
                "en"
              ],
              "numberOfRevisions": 0,
              "sourceSchema": "urn:IAMNOTAPID:d840d215-5a16-4e5d-af68-70a059d58b59",
              "targetSchema": "urn:IAMNOTAPID:3a56a297-1f01-42c0-bc72-47b2345f6368"
            },
            "sort": [
              null
            ]
          }
        ]
      },
      "aggregations": {
        "sterms#isReferenced": {
          "buckets": [],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#organization": {
          "buckets": [],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#format": {
          "buckets": [],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#type": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "CROSSWALK"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#status": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "VALID"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        }
      }
    }
  }
  else {
    return {
      "took": 13,
      "timed_out": false,
      "_shards": {
        "failed": 0.0,
        "successful": 2.0,
        "total": 2.0,
        "skipped": 0.0
      },
      "hits": {
        "total": {
          "relation": "eq",
          "value": 3
        },
        "hits": [
          {
            "_index": "schemas_v2",
            "_id": "urn%3AIAMNOTAPID%3A8e841112-054f-4333-96a3-4553d521143f",
            "_source": {
              "id": "urn:IAMNOTAPID:8e841112-054f-4333-96a3-4553d521143f",
              "label": {
                "en": "string2"
              },
              "status": "DRAFT",
              "state": "DRAFT",
              "visibility": "PUBLIC", 
              "modified": "2023-07-28T08:25:16.139Z",
              "created": "2023-07-28T08:25:16.139Z",
              "contentModified": "2023-07-28T08:25:16.139Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:8e841112-054f-4333-96a3-4553d521143f",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "organizations": [
                {
                  "id": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
                  "label": {
                    "fi": "test",
                    "sv": "test",
                    "en": "test"
                  }
                }
              ],
              "isPartOf": [],
              "language": [
                "en"
              ],
              "format": "JSONSCHEMA",
              "aggregationKey": "urn:IAMNOTAPID:74e4e816-098a-4f01-aab5-fdc992a4391c",
              "revisionOf": "urn:IAMNOTAPID:cc671dc3-4b31-436c-9b34-90fee89c6f69",
              "numberOfRevisions": 2,
              "revisions": [
                {
                  "pid": "urn:IAMNOTAPID:74e4e816-098a-4f01-aab5-fdc992a4391c",
                  "created": 1690532684240,
                  "label": {
                    "en": "string2"
                  },
                  "versionLabel": "1"
                },
                {
                  "pid": "urn:IAMNOTAPID:cc671dc3-4b31-436c-9b34-90fee89c6f69",
                  "created": 1690532702088,
                  "label": {
                    "en": "string2"
                  },
                  "versionLabel": "1"
                },
                {
                  "pid": "urn:IAMNOTAPID:8e841112-054f-4333-96a3-4553d521143f",
                  "created": 1690532716139,
                  "label": {
                    "en": "string2"
                  },
                  "versionLabel": "1.1sdsds"
                }
              ]
            },
            "sort": [
              null
            ]
          },
          {
            "_index": "schemas_v2",
            "_id": "urn%3AIAMNOTAPID%3A76ccbb55-a39f-4561-bf3e-7a2b8b083a8c",
            "_source": {
              "id": "urn:IAMNOTAPID:76ccbb55-a39f-4561-bf3e-7a2b8b083a8c",
              "label": {
                "en": "string2"
              },
              "status": "DRAFT",
              "state": "DRAFT",
              "visibility": "PUBLIC", 
              "modified": "2023-07-28T09:18:24.764Z",
              "created": "2023-07-28T09:18:24.764Z",
              "contentModified": "2023-07-28T09:18:24.764Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:76ccbb55-a39f-4561-bf3e-7a2b8b083a8c",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "organizations": [
                {
                  "id": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
                  "label": {
                    "fi": "test",
                    "sv": "test",
                    "en": "test"
                  }
                }
              ],
              "isPartOf": [],
              "language": [
                "en"
              ],
              "format": "JSONSCHEMA",
              "aggregationKey": "urn:IAMNOTAPID:76ccbb55-a39f-4561-bf3e-7a2b8b083a8c",
              "numberOfRevisions": 3,
              "revisions": [
                {
                  "pid": "urn:IAMNOTAPID:76ccbb55-a39f-4561-bf3e-7a2b8b083a8c",
                  "created": 1690535904764,
                  "label": {
                    "en": "string2"
                  },
                  "versionLabel": "1.1sdsds"
                }
              ]
            },
            "sort": [
              null
            ]
          },
          {
            "_index": "schemas_v2",
            "_id": "urn%3AIAMNOTAPID%3A47cbdb3c-feeb-489c-a852-4642453a3f69",
            "_source": {
              "id": "urn:IAMNOTAPID:47cbdb3c-feeb-489c-a852-4642453a3f69",
              "label": {
                "en": "string2"
              },
              "status": "DRAFT",
              "state": "DRAFT",
              "visibility": "PUBLIC", 
              "modified": "2023-07-28T09:13:24.349Z",
              "created": "2023-07-28T09:13:24.349Z",
              "contentModified": "2023-07-28T09:13:24.349Z",
              "type": "SCHEMA",
              "prefix": "urn:IAMNOTAPID:47cbdb3c-feeb-489c-a852-4642453a3f69",
              "comment": {
                "en": "string"
              },
              "contributor": [
                "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
              ],
              "organizations": [
                {
                  "id": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
                  "label": {
                    "fi": "test",
                    "sv": "test",
                    "en": "test"
                  }
                }
              ],
              "isPartOf": [],
              "language": [
                "en"
              ],
              "format": "JSONSCHEMA",
              "aggregationKey": "12e769faa99930e017ab7be9b7fed4aa",
              "revisionOf": "urn:IAMNOTAPID:cc671dc3-4b31-436c-9b34-90fee89c6f69",
              "numberOfRevisions": 2,
              "revisions": [
                {
                  "pid": "urn:IAMNOTAPID:47cbdb3c-feeb-489c-a852-4642453a3f69",
                  "created": 1690535604349,
                  "label": {
                    "en": "string2"
                  },
                  "versionLabel": "1.1sdsds"
                }
              ]
            },
            "sort": [
              null
            ]
          }
        ]
      },
      "aggregations": {
        "sterms#isReferenced": {
          "buckets": [],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#organization": {
          "buckets": [],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#format": {
          "buckets": [
            {
              "doc_count": 3,
              "key": "JSONSCHEMA"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#type": {
          "buckets": [
            {
              "doc_count": 3,
              "key": "SCHEMA"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#status": {
          "buckets": [
            {
              "doc_count": 3,
              "key": "DRAFT"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
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