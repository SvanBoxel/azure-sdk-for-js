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
import * as Models from "../models";
import * as Mappers from "../models/loadBalancerLoadBalancingRulesMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a LoadBalancerLoadBalancingRules. */
export class LoadBalancerLoadBalancingRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a LoadBalancerLoadBalancingRules.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the load balancing rules in a load balancer.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  list(resourceGroupName: string, loadBalancerName: string): Promise<Models.LoadBalancerLoadBalancingRulesListResponse>;
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerLoadBalancingRulesListResponse>;
  list(resourceGroupName: string, loadBalancerName: string, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  list(resourceGroupName: string, loadBalancerName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): Promise<Models.LoadBalancerLoadBalancingRulesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LoadBalancerLoadBalancingRulesListResponse>;
  }

  /**
   * Gets the specified load balancer load balancing rule.
   *
   * @param {string} resourceGroupName The name of the resource group.
   *
   * @param {string} loadBalancerName The name of the load balancer.
   *
   * @param {string} loadBalancingRuleName The name of the load balancing rule.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string): Promise<Models.LoadBalancerLoadBalancingRulesGetResponse>;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerLoadBalancingRulesGetResponse>;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, callback: msRest.ServiceCallback<Models.LoadBalancingRule>): void;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancingRule>): void;
  get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancingRule>): Promise<Models.LoadBalancerLoadBalancingRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        loadBalancerName,
        loadBalancingRuleName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.LoadBalancerLoadBalancingRulesGetResponse>;
  }

  /**
   * Gets all the load balancing rules in a load balancer.
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
  listNext(nextPageLink: string): Promise<Models.LoadBalancerLoadBalancingRulesListNextResponse>;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase): Promise<Models.LoadBalancerLoadBalancingRulesListNextResponse>;
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.LoadBalancerLoadBalancingRuleListResult>): Promise<Models.LoadBalancerLoadBalancingRulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.LoadBalancerLoadBalancingRulesListNextResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/loadBalancingRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
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
      bodyMapper: Mappers.LoadBalancerLoadBalancingRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/loadBalancers/{loadBalancerName}/loadBalancingRules/{loadBalancingRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.loadBalancerName,
    Parameters.loadBalancingRuleName,
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
      bodyMapper: Mappers.LoadBalancingRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.LoadBalancerLoadBalancingRuleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
