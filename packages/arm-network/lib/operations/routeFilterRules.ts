/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/routeFilterRulesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a RouteFilterRules. */
export class RouteFilterRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a RouteFilterRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }


  /**
   * Deletes the specified rule from a route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the rule.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  deleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName, routeFilterName, ruleName, options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the specified rule from a route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the rule.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, routeFilterName: string, ruleName: string): Promise<Models.RouteFilterRulesGetResponse>;
  get(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRulesGetResponse>;
  get(resourceGroupName: string, routeFilterName: string, ruleName: string, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
  get(resourceGroupName: string, routeFilterName: string, ruleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRule>): void;
  get(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteFilterRule>): Promise<Models.RouteFilterRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeFilterName,
        ruleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RouteFilterRulesGetResponse>;
  }


  /**
   * Creates or updates a route in the specified route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the route filter rule.
   *
   * @param {RouteFilterRule} routeFilterRuleParameters Parameters supplied to the create or update
   * route filter rule operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options?: msRest.RequestOptionsBase): Promise<Models.RouteFilterRulesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName, routeFilterName, ruleName, routeFilterRuleParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RouteFilterRulesCreateOrUpdateResponse>;
  }


  /**
   * Updates a route in the specified route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the route filter rule.
   *
   * @param {PatchRouteFilterRule} routeFilterRuleParameters Parameters supplied to the update route
   * filter rule operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  update(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options?: msRest.RequestOptionsBase): Promise<Models.RouteFilterRulesUpdateResponse> {
    return this.beginUpdate(resourceGroupName, routeFilterName, ruleName, routeFilterRuleParameters, options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.RouteFilterRulesUpdateResponse>;
  }

  /**
   * Gets all RouteFilterRules in a route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByRouteFilter(resourceGroupName: string, routeFilterName: string): Promise<Models.RouteFilterRulesListByRouteFilterResponse>;
  listByRouteFilter(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRulesListByRouteFilterResponse>;
  listByRouteFilter(resourceGroupName: string, routeFilterName: string, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
  listByRouteFilter(resourceGroupName: string, routeFilterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
  listByRouteFilter(resourceGroupName: string, routeFilterName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): Promise<Models.RouteFilterRulesListByRouteFilterResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeFilterName,
        options
      },
      listByRouteFilterOperationSpec,
      callback) as Promise<Models.RouteFilterRulesListByRouteFilterResponse>;
  }

  /**
   * Deletes the specified rule from a route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the rule.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginDeleteMethod(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeFilterName,
        ruleName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a route in the specified route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the route filter rule.
   *
   * @param {RouteFilterRule} routeFilterRuleParameters Parameters supplied to the create or update
   * route filter rule operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.RouteFilterRule, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeFilterName,
        ruleName,
        routeFilterRuleParameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a route in the specified route filter.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} routeFilterName The name of the route filter.
   *
   * @param {string} ruleName The name of the route filter rule.
   *
   * @param {PatchRouteFilterRule} routeFilterRuleParameters Parameters supplied to the update route
   * filter rule operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  beginUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: Models.PatchRouteFilterRule, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        routeFilterName,
        ruleName,
        routeFilterRuleParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Gets all RouteFilterRules in a route filter.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call to List operation.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listByRouteFilterNext(nextPageLink: string): Promise<Models.RouteFilterRulesListByRouteFilterNextResponse>;
  listByRouteFilterNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.RouteFilterRulesListByRouteFilterNextResponse>;
  listByRouteFilterNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
  listByRouteFilterNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): void;
  listByRouteFilterNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.RouteFilterRuleListResult>): Promise<Models.RouteFilterRulesListByRouteFilterNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByRouteFilterNextOperationSpec,
      callback) as Promise<Models.RouteFilterRulesListByRouteFilterNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRouteFilterOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "routeFilterRuleParameters",
    mapper: {
      ...Mappers.RouteFilterRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRule
    },
    201: {
      bodyMapper: Mappers.RouteFilterRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.routeFilterName,
    Parameters.ruleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "routeFilterRuleParameters",
    mapper: {
      ...Mappers.PatchRouteFilterRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRouteFilterNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
