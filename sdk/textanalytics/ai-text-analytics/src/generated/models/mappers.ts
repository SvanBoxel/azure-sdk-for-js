/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const MultiLanguageInput: coreHttp.CompositeMapper = {
  serializedName: "MultiLanguageInput",
  type: {
    name: "Composite",
    className: "MultiLanguageInput",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MultiLanguageBatchInput: coreHttp.CompositeMapper = {
  serializedName: "MultiLanguageBatchInput",
  type: {
    name: "Composite",
    className: "MultiLanguageBatchInput",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MultiLanguageInput"
            }
          }
        }
      }
    }
  }
};

export const InnerError: coreHttp.CompositeMapper = {
  serializedName: "InnerError",
  type: {
    name: "Composite",
    className: "InnerError",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "Enum",
          allowedValues: [
            "InvalidParameterValue",
            "InvalidRequestBodyFormat",
            "EmptyRequest",
            "MissingInputRecords",
            "InvalidDocument",
            "ModelVersionIncorrect",
            "InvalidDocumentBatch",
            "UnsupportedLanguageCode",
            "InvalidCountryHint"
          ]
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      innerError: {
        serializedName: "innerError",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      }
    }
  }
};

export const TextAnalyticsError: coreHttp.CompositeMapper = {
  serializedName: "TextAnalyticsError",
  type: {
    name: "Composite",
    className: "TextAnalyticsError",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "Enum",
          allowedValues: [
            "InvalidRequest",
            "InvalidArgument",
            "InternalServerError",
            "ServiceUnavailable"
          ]
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      innerError: {
        serializedName: "innerError",
        type: {
          name: "Composite",
          className: "InnerError"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TextAnalyticsError"
            }
          }
        }
      }
    }
  }
};

export const DocumentError: coreHttp.CompositeMapper = {
  serializedName: "DocumentError",
  type: {
    name: "Composite",
    className: "DocumentError",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      error: {
        required: true,
        serializedName: "error",
        type: {
          name: "Composite",
          className: "TextAnalyticsError"
        }
      }
    }
  }
};

export const TextDocumentStatistics: coreHttp.CompositeMapper = {
  serializedName: "TextDocumentStatistics",
  type: {
    name: "Composite",
    className: "TextDocumentStatistics",
    modelProperties: {
      characterCount: {
        required: true,
        serializedName: "charactersCount",
        type: {
          name: "Number"
        }
      },
      transactionCount: {
        required: true,
        serializedName: "transactionsCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SentimentConfidenceScores: coreHttp.CompositeMapper = {
  serializedName: "SentimentConfidenceScores",
  type: {
    name: "Composite",
    className: "SentimentConfidenceScores",
    modelProperties: {
      positive: {
        required: true,
        serializedName: "positive",
        type: {
          name: "Number"
        }
      },
      neutral: {
        required: true,
        serializedName: "neutral",
        type: {
          name: "Number"
        }
      },
      negative: {
        required: true,
        serializedName: "negative",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SentenceSentiment: coreHttp.CompositeMapper = {
  serializedName: "SentenceSentiment",
  type: {
    name: "Composite",
    className: "SentenceSentiment",
    modelProperties: {
      sentiment: {
        required: true,
        serializedName: "sentiment",
        type: {
          name: "Enum",
          allowedValues: [
            "positive",
            "neutral",
            "negative"
          ]
        }
      },
      confidenceScores: {
        required: true,
        serializedName: "sentenceScores",
        type: {
          name: "Composite",
          className: "SentimentConfidenceScores"
        }
      },
      graphemeOffset: {
        required: true,
        serializedName: "offset",
        type: {
          name: "Number"
        }
      },
      graphemeLength: {
        required: true,
        serializedName: "length",
        type: {
          name: "Number"
        }
      },
      warnings: {
        serializedName: "warnings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DocumentSentiment: coreHttp.CompositeMapper = {
  serializedName: "DocumentSentiment",
  type: {
    name: "Composite",
    className: "DocumentSentiment",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      sentiment: {
        required: true,
        serializedName: "sentiment",
        type: {
          name: "Enum",
          allowedValues: [
            "positive",
            "neutral",
            "negative",
            "mixed"
          ]
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentStatistics"
        }
      },
      documentScores: {
        required: true,
        serializedName: "documentScores",
        type: {
          name: "Composite",
          className: "SentimentConfidenceScores"
        }
      },
      sentenceSentiments: {
        required: true,
        serializedName: "sentences",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SentenceSentiment"
            }
          }
        }
      }
    }
  }
};

export const TextDocumentBatchStatistics: coreHttp.CompositeMapper = {
  serializedName: "TextDocumentBatchStatistics",
  type: {
    name: "Composite",
    className: "TextDocumentBatchStatistics",
    modelProperties: {
      documentCount: {
        required: true,
        serializedName: "documentsCount",
        type: {
          name: "Number"
        }
      },
      validDocumentCount: {
        required: true,
        serializedName: "validDocumentsCount",
        type: {
          name: "Number"
        }
      },
      erroneousDocumentCount: {
        required: true,
        serializedName: "erroneousDocumentsCount",
        type: {
          name: "Number"
        }
      },
      transactionCount: {
        required: true,
        serializedName: "transactionsCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SentimentResponse: coreHttp.CompositeMapper = {
  serializedName: "SentimentResponse",
  type: {
    name: "Composite",
    className: "SentimentResponse",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentSentiment"
            }
          }
        }
      },
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentError"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentBatchStatistics"
        }
      },
      modelVersion: {
        required: true,
        serializedName: "modelVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Entity: coreHttp.CompositeMapper = {
  serializedName: "Entity",
  type: {
    name: "Composite",
    className: "Entity",
    modelProperties: {
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      category: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      subCategory: {
        serializedName: "subtype",
        type: {
          name: "String"
        }
      },
      graphemeOffset: {
        required: true,
        serializedName: "offset",
        type: {
          name: "Number"
        }
      },
      graphemeLength: {
        required: true,
        serializedName: "length",
        type: {
          name: "Number"
        }
      },
      score: {
        required: true,
        serializedName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentEntities: coreHttp.CompositeMapper = {
  serializedName: "DocumentEntities",
  type: {
    name: "Composite",
    className: "DocumentEntities",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      entities: {
        required: true,
        serializedName: "entities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Entity"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentStatistics"
        }
      }
    }
  }
};

export const EntitiesResult: coreHttp.CompositeMapper = {
  serializedName: "EntitiesResult",
  type: {
    name: "Composite",
    className: "EntitiesResult",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentEntities"
            }
          }
        }
      },
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentError"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentBatchStatistics"
        }
      },
      modelVersion: {
        required: true,
        serializedName: "modelVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Match: coreHttp.CompositeMapper = {
  serializedName: "Match",
  type: {
    name: "Composite",
    className: "Match",
    modelProperties: {
      score: {
        required: true,
        serializedName: "score",
        type: {
          name: "Number"
        }
      },
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      graphemeOffset: {
        required: true,
        serializedName: "offset",
        type: {
          name: "Number"
        }
      },
      graphemeLength: {
        required: true,
        serializedName: "length",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LinkedEntity: coreHttp.CompositeMapper = {
  serializedName: "LinkedEntity",
  type: {
    name: "Composite",
    className: "LinkedEntity",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      matches: {
        required: true,
        serializedName: "matches",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Match"
            }
          }
        }
      },
      language: {
        required: true,
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      dataSourceEntityId: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      url: {
        required: true,
        serializedName: "url",
        type: {
          name: "String"
        }
      },
      dataSource: {
        required: true,
        serializedName: "dataSource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentLinkedEntities: coreHttp.CompositeMapper = {
  serializedName: "DocumentLinkedEntities",
  type: {
    name: "Composite",
    className: "DocumentLinkedEntities",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      entities: {
        required: true,
        serializedName: "entities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedEntity"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentStatistics"
        }
      }
    }
  }
};

export const EntityLinkingResult: coreHttp.CompositeMapper = {
  serializedName: "EntityLinkingResult",
  type: {
    name: "Composite",
    className: "EntityLinkingResult",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentLinkedEntities"
            }
          }
        }
      },
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentError"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentBatchStatistics"
        }
      },
      modelVersion: {
        required: true,
        serializedName: "modelVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DocumentKeyPhrases: coreHttp.CompositeMapper = {
  serializedName: "DocumentKeyPhrases",
  type: {
    name: "Composite",
    className: "DocumentKeyPhrases",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      keyPhrases: {
        required: true,
        serializedName: "keyPhrases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentStatistics"
        }
      }
    }
  }
};

export const KeyPhraseResult: coreHttp.CompositeMapper = {
  serializedName: "KeyPhraseResult",
  type: {
    name: "Composite",
    className: "KeyPhraseResult",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentKeyPhrases"
            }
          }
        }
      },
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentError"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentBatchStatistics"
        }
      },
      modelVersion: {
        required: true,
        serializedName: "modelVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LanguageInput: coreHttp.CompositeMapper = {
  serializedName: "LanguageInput",
  type: {
    name: "Composite",
    className: "LanguageInput",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      text: {
        required: true,
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      countryHint: {
        serializedName: "countryHint",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LanguageBatchInput: coreHttp.CompositeMapper = {
  serializedName: "LanguageBatchInput",
  type: {
    name: "Composite",
    className: "LanguageBatchInput",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguageInput"
            }
          }
        }
      }
    }
  }
};

export const DetectedLanguage: coreHttp.CompositeMapper = {
  serializedName: "DetectedLanguage",
  type: {
    name: "Composite",
    className: "DetectedLanguage",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      iso6391Name: {
        required: true,
        serializedName: "iso6391Name",
        type: {
          name: "String"
        }
      },
      score: {
        required: true,
        serializedName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DocumentLanguage: coreHttp.CompositeMapper = {
  serializedName: "DocumentLanguage",
  type: {
    name: "Composite",
    className: "DocumentLanguage",
    modelProperties: {
      id: {
        required: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      detectedLanguages: {
        required: true,
        serializedName: "detectedLanguages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DetectedLanguage"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentStatistics"
        }
      }
    }
  }
};

export const LanguageResult: coreHttp.CompositeMapper = {
  serializedName: "LanguageResult",
  type: {
    name: "Composite",
    className: "LanguageResult",
    modelProperties: {
      documents: {
        required: true,
        serializedName: "documents",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentLanguage"
            }
          }
        }
      },
      errors: {
        required: true,
        serializedName: "errors",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DocumentError"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className: "TextDocumentBatchStatistics"
        }
      },
      modelVersion: {
        required: true,
        serializedName: "modelVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};
