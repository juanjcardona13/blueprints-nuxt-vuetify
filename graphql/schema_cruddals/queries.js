import gql from "graphql-tag";
import { PaginatedType } from "./general_types";

//region ============= AUTH

//region ============= PERMISSION
export function readPermission(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query readPermission($where: FilterPermissionInput!  ${varsStr}) {
            readPermission(where: $where ) {
                ${selectedFields}
            }
        }
    `;
  return query;
}
export function searchPermissions(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query searchPermissions($where: FilterPermissionInput $orderBy: OrderByPermissionInput $paginationConfig: PaginationConfigInput  ${varsStr}) {
            searchPermissions(where: $where orderBy: $orderBy paginationConfig: $paginationConfig ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
  return query;
}
//endregion

//region ============= GROUP
export function readGroup(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query readGroup($where: FilterGroupInput!  ${varsStr}) {
            readGroup(where: $where ) {
                ${selectedFields}
            }
        }
    `;
  return query;
}
export function searchGroups(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query searchGroups($where: FilterGroupInput $orderBy: OrderByGroupInput $paginationConfig: PaginationConfigInput  ${varsStr}) {
            searchGroups(where: $where orderBy: $orderBy paginationConfig: $paginationConfig ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
  return query;
}
//endregion

//region ============= USER
export function readUser(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query readUser($where: FilterUserInput!  ${varsStr}) {
            readUser(where: $where ) {
                ${selectedFields}
            }
        }
    `;
  return query;
}
export function searchUsers(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query searchUsers($where: FilterUserInput $orderBy: OrderByUserInput $paginationConfig: PaginationConfigInput  ${varsStr}) {
            searchUsers(where: $where orderBy: $orderBy paginationConfig: $paginationConfig ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
  return query;
}
//endregion

//endregion

//region ============= TODO

//region ============= TASK
export function readTask(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query readTask($where: FilterTaskInput!  ${varsStr}) {
            readTask(where: $where ) {
                ${selectedFields}
            }
        }
    `;
  return query;
}
export function searchTasks(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const query = gql`
        query searchTasks($where: FilterTaskInput $orderBy: OrderByTaskInput $paginationConfig: PaginationConfigInput  ${varsStr}) {
            searchTasks(where: $where orderBy: $orderBy paginationConfig: $paginationConfig ) {
                ${PaginatedType}
                objects {
                    ${selectedFields}
                }
            }
        }
    `;
  return query;
}
//endregion

//endregion
