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
function mscrSearchOrgContent() {
  return {
  "took": 22,
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
      "value": 2
    },
    "hits": [
      {
        "_index": "crosswalks_v2",
        "_id": "urn%3AIAMNOTAPID%3A9f17eb5a-6763-4ff1-b100-e5ea5a4d12a7",
        "_source": {
          "id": "urn:IAMNOTAPID:9f17eb5a-6763-4ff1-b100-e5ea5a4d12a7",
          "label": {
            "en": "string"
          },
          "status": "VALID",
          "modified": "2023-09-14T05:57:42.514Z",
          "created": "2023-09-14T05:57:42.514Z",
          "contentModified": "2023-09-14T05:57:42.513Z",
          "type": "CROSSWALK",
          "state": "DRAFT",
          "visibility": "PUBLIC",
          "prefix": "urn:IAMNOTAPID:9f17eb5a-6763-4ff1-b100-e5ea5a4d12a7",
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
          "owner": [
            "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
          ],
          "sourceSchema": "urn:IAMNOTAPID:3484146d-f2d2-4552-bfde-e42ec7de0e52",
          "targetSchema": "urn:IAMNOTAPID:35d37410-5b1c-428c-98c7-f97539f991fd"
        },
        "sort": [
          null
        ]
      },
      {
        "_index": "schemas_v2",
        "_id": "urn%3AIAMNOTAPID%3Ae6299355-c73d-45b5-9735-dbf959bf1f7d",
        "_source": {
          "id": "urn:IAMNOTAPID:e6299355-c73d-45b5-9735-dbf959bf1f7d",
          "label": {
            "en": "string2"
          },
          "status": "DRAFT",
          "modified": "2023-09-14T05:57:15.344Z",
          "created": "2023-09-14T05:57:15.344Z",
          "contentModified": "2023-09-14T05:57:15.32Z",
          "type": "SCHEMA",
          "state": "DRAFT",
          "visibility": "PRIVATE",
          "prefix": "urn:IAMNOTAPID:e6299355-c73d-45b5-9735-dbf959bf1f7d",
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
          "format": "CSV",
          "aggregationKey": "urn:IAMNOTAPID:e6299355-c73d-45b5-9735-dbf959bf1f7d",
          "numberOfRevisions": 1,
          "revisions": [
            {
              "pid": "urn:IAMNOTAPID:e6299355-c73d-45b5-9735-dbf959bf1f7d",
              "created": 1694671035344,
              "label": {
                "en": "string2"
              },
              "versionLabel": "1"
            }
          ],
          "owner": [
            "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63"
          ]
        },
        "sort": [
          null
        ]
      }
    ]
  }
}
}
function mscrSearchPersonalContent({_type}) {
  if( _type == 'CROSSWALK') {
    return {
      "took": 12,
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
            "_id": "urn%3AIAMNOTAPID%3A741951a5-7f29-4a85-85bc-5f7439df864b",
            "_source": {
              "id": "urn:IAMNOTAPID:741951a5-7f29-4a85-85bc-5f7439df864b",
              "label": {
                "en": "string"
              },
              "status": "VALID",
              "modified": "2023-09-14T05:34:29.674Z",
              "created": "2023-09-14T05:34:29.674Z",
              "contentModified": "2023-09-14T05:34:29.664Z",
              "type": "CROSSWALK",
              "state": "DRAFT",
              "visibility": "PUBLIC",
              "prefix": "urn:IAMNOTAPID:741951a5-7f29-4a85-85bc-5f7439df864b",
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
              "owner": [
                "4ce70937-6fa4-49af-a229-b5f10328adb8"
              ],
              "sourceSchema": "urn:IAMNOTAPID:3484146d-f2d2-4552-bfde-e42ec7de0e52",
              "targetSchema": "urn:IAMNOTAPID:35d37410-5b1c-428c-98c7-f97539f991fd"
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
        "sterms#state": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "DRAFT"
            }
          ],
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
        }
      }
    }
  }
  if(_type == 'SCHEMA') {
    return {
      "took": 48,
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
            "_index": "schemas_v2",
            "_id": "urn%3AIAMNOTAPID%3A6897c665-b26b-48e5-b31a-fe1e3f31df36",
            "_source": {
              "id": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
              "label": {
                "en": "string2"
              },
              "status": "DRAFT",
              "modified": "2023-09-14T05:35:20.102Z",
              "created": "2023-09-14T05:35:20.102Z",
              "contentModified": "2023-09-14T05:35:20.098Z",
              "type": "SCHEMA",
              "state": "DRAFT",
              "visibility": "PRIVATE",
              "prefix": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
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
              "format": "CSV",
              "aggregationKey": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
              "numberOfRevisions": 1,
              "revisions": [
                {
                  "pid": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
                  "created": 1694669720102,
                  "label": {
                    "en": "string2"
                  },
                  "versionLabel": "1"
                }
              ],
              "owner": [
                "4ce70937-6fa4-49af-a229-b5f10328adb8"
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
              "doc_count": 1,
              "key": "CSV"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#state": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "DRAFT"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#type": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "SCHEMA"
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
    "took": 117,
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
        "value": 2
      },
      "hits": [
        {
          "_index": "crosswalks_v2",
          "_id": "urn%3AIAMNOTAPID%3A741951a5-7f29-4a85-85bc-5f7439df864b",
          "_source": {
            "id": "urn:IAMNOTAPID:741951a5-7f29-4a85-85bc-5f7439df864b",
            "label": {
              "en": "string"
            },
            "status": "VALID",
            "modified": "2023-09-14T05:34:29.674Z",
            "created": "2023-09-14T05:34:29.674Z",
            "contentModified": "2023-09-14T05:34:29.664Z",
            "type": "CROSSWALK",
            "state": "DRAFT",
            "visibility": "PUBLIC",
            "prefix": "urn:IAMNOTAPID:741951a5-7f29-4a85-85bc-5f7439df864b",
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
            "owner": [
              "4ce70937-6fa4-49af-a229-b5f10328adb8"
            ],
            "sourceSchema": "urn:IAMNOTAPID:3484146d-f2d2-4552-bfde-e42ec7de0e52",
            "targetSchema": "urn:IAMNOTAPID:35d37410-5b1c-428c-98c7-f97539f991fd"
          },
          "sort": [
            null
          ]
        },
        {
          "_index": "schemas_v2",
          "_id": "urn%3AIAMNOTAPID%3A6897c665-b26b-48e5-b31a-fe1e3f31df36",
          "_source": {
            "id": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
            "label": {
              "en": "string2"
            },
            "status": "DRAFT",
            "modified": "2023-09-14T05:35:20.102Z",
            "created": "2023-09-14T05:35:20.102Z",
            "contentModified": "2023-09-14T05:35:20.098Z",
            "type": "SCHEMA",
            "state": "DRAFT",
            "visibility": "PRIVATE",
            "prefix": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
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
            "format": "CSV",
            "aggregationKey": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
            "numberOfRevisions": 1,
            "revisions": [
              {
                "pid": "urn:IAMNOTAPID:6897c665-b26b-48e5-b31a-fe1e3f31df36",
                "created": 1694669720102,
                "label": {
                  "en": "string2"
                },
                "versionLabel": "1"
              }
            ],
            "owner": [
              "4ce70937-6fa4-49af-a229-b5f10328adb8"
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
            "doc_count": 1,
            "key": "CSV"
          }
        ],
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0
      },
      "sterms#state": {
        "buckets": [
          {
            "doc_count": 2,
            "key": "DRAFT"
          }
        ],
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0
      },
      "sterms#type": {
        "buckets": [
          {
            "doc_count": 1,
            "key": "CROSSWALK"
          },
          {
            "doc_count": 1,
            "key": "SCHEMA"
          }
        ],
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0
      }
    }
  } 
  }
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
        "sterms#sourceType": {
          "buckets": [
            {
              "doc_count": 12,
              "key": "HOSTED",
              "label": "hosted"
            },
            {
              "doc_count": 212,
              "key": "REFERENCED",
              "label": "referenced"
            }            
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },        
        "sterms#organization": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
              "label": "test org"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#format": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "CSV",
              "label": "CSV"
            },
            {
              "doc_count": 2,
              "key": "JSON",
              "label": "JSON"
            },
            {
              "doc_count": 3,
              "key": "XML",
              "label": "XML"
            },
            {
              "doc_count": 1,
              "key": "XLST",
              "label": "XLST"
            },
            {
              "doc_count": 13,
              "key": "MSCR",
              "label": "MSCR"
            }                                    
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#type": {
          "buckets": [
            {
              "doc_count": 41,
              "key": "CROSSWALK",
              "label": "Crosswalk"
            },
            {
              "doc_count": 12,
              "key": "SCHEMA",
              "label": "Schema"
            },            
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#status": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "DRAFT",
              "label": "Valid"
            },
            {
              "doc_count": 1,
              "key": "PUBLISHED",
              "label": "Published"
            },
            {
              "doc_count": 1,
              "key": "INVALID",
              "label": "Invalid"
            },
            {
              "doc_count": 1,
              "key": "DEPRECATED",
              "label": "Deprecated"
            },
            {
              "doc_count": 1,
              "key": "REMOVED",
              "label": "Removed"
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
        "sterms#sourceType": {
          "buckets": [
            {
              "doc_count": 12,
              "key": "HOSTED",
              "label": "hosted"
            },
            {
              "doc_count": 212,
              "key": "REFERENCED",
              "label": "referenced"
            }            
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },        
        "sterms#organization": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "7d3a3c00-5a6b-489b-a3ed-63bb58c26a63",
              "label": "test org"
            }
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#format": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "CSV",
              "label": "CSV"
            },
            {
              "doc_count": 2,
              "key": "JSON",
              "label": "JSON"
            },
            {
              "doc_count": 3,
              "key": "XML",
              "label": "XML"
            },
            {
              "doc_count": 1,
              "key": "XLST",
              "label": "XLST"
            },
            {
              "doc_count": 13,
              "key": "MSCR",
              "label": "MSCR"
            }                                    
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#type": {
          "buckets": [
            {
              "doc_count": 41,
              "key": "CROSSWALK",
              "label": "Crosswalk"
            },
            {
              "doc_count": 12,
              "key": "SCHEMA",
              "label": "Schema"
            },            
          ],
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0
        },
        "sterms#status": {
          "buckets": [
            {
              "doc_count": 1,
              "key": "DRAFT",
              "label": "Valid"
            },
            {
              "doc_count": 1,
              "key": "PUBLISHED",
              "label": "Published"
            },
            {
              "doc_count": 1,
              "key": "INVALID",
              "label": "Invalid"
            },
            {
              "doc_count": 1,
              "key": "DEPRECATED",
              "label": "Deprecated"
            },
            {
              "doc_count": 1,
              "key": "REMOVED",
              "label": "Removed"
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
  mscrSearch,
  mscrSearchPersonalContent,
  mscrSearchOrgContent
}