/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/operationStatusOperationsMappers";
import * as Parameters from "../models/parameters";
import { StorageSyncManagementClientContext } from "../storageSyncManagementClientContext";

/** Class representing a OperationStatusOperations. */
export class OperationStatusOperations {
  private readonly client: StorageSyncManagementClientContext;

  /**
   * Create a OperationStatusOperations.
   * @param {StorageSyncManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageSyncManagementClientContext) {
    this.client = client;
  }

  /**
   * Get Operation status
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param locationName The desired region to obtain information from.
   * @param workflowId workflow Id
   * @param operationId operation Id
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationStatusGetResponse>
   */
  get(resourceGroupName: string, locationName: string, workflowId: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationStatusGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param locationName The desired region to obtain information from.
   * @param workflowId workflow Id
   * @param operationId operation Id
   * @param callback The callback
   */
  get(resourceGroupName: string, locationName: string, workflowId: string, operationId: string, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param locationName The desired region to obtain information from.
   * @param workflowId workflow Id
   * @param operationId operation Id
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, locationName: string, workflowId: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationStatus>): void;
  get(resourceGroupName: string, locationName: string, workflowId: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationStatus>, callback?: msRest.ServiceCallback<Models.OperationStatus>): Promise<Models.OperationStatusGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        locationName,
        workflowId,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OperationStatusGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/locations/{locationName}/workflows/{workflowId}/operations/{operationId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.locationName,
    Parameters.workflowId,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
      headersMapper: Mappers.OperationStatusGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  serializer
};
