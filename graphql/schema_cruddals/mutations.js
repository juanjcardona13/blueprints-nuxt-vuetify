import gql from "graphql-tag";
import { ErrorCollectionType } from "./general_types";

//region ============= AUTH

//region ============= PERMISSION
export function createPermissions(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation createPermissions($input: [CreatePermissionInput!]!  ${varsStr}) {
            createPermissions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function updatePermissions(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation updatePermissions($input: [UpdatePermissionInput!]!  ${varsStr}) {
            updatePermissions(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deletePermissions(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deletePermissions($where: FilterPermissionInput!  ${varsStr}) {
            deletePermissions(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deactivatePermissions(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deactivatePermissions($where: FilterPermissionInput!  ${varsStr}) {
            deactivatePermissions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function activatePermissions(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation activatePermissions($where: FilterPermissionInput!  ${varsStr}) {
            activatePermissions(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
//endregion

//region ============= GROUP
export function createGroups(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation createGroups($input: [CreateGroupInput!]!  ${varsStr}) {
            createGroups(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function updateGroups(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation updateGroups($input: [UpdateGroupInput!]!  ${varsStr}) {
            updateGroups(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deleteGroups(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deleteGroups($where: FilterGroupInput!  ${varsStr}) {
            deleteGroups(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deactivateGroups(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deactivateGroups($where: FilterGroupInput!  ${varsStr}) {
            deactivateGroups(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function activateGroups(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation activateGroups($where: FilterGroupInput!  ${varsStr}) {
            activateGroups(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
//endregion

//region ============= USER
export function createUsers(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation createUsers($input: [CreateUserInput!]!  ${varsStr}) {
            createUsers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function updateUsers(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation updateUsers($input: [UpdateUserInput!]!  ${varsStr}) {
            updateUsers(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deleteUsers(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deleteUsers($where: FilterUserInput!  ${varsStr}) {
            deleteUsers(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deactivateUsers(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deactivateUsers($where: FilterUserInput!  ${varsStr}) {
            deactivateUsers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function activateUsers(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation activateUsers($where: FilterUserInput!  ${varsStr}) {
            activateUsers(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
//endregion

//endregion

//region ============= TODO

//region ============= TASK
export function createTasks(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation createTasks($input: [CreateTaskInput!]!  ${varsStr}) {
            createTasks(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function updateTasks(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation updateTasks($input: [UpdateTaskInput!]!  ${varsStr}) {
            updateTasks(input: $input ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deleteTasks(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deleteTasks($where: FilterTaskInput!  ${varsStr}) {
            deleteTasks(where: $where ) {
                success
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function deactivateTasks(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation deactivateTasks($where: FilterTaskInput!  ${varsStr}) {
            deactivateTasks(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
export function activateTasks(fields, extraArgs = []) {
  let varsStr = "";
  for (let newArg of extraArgs) {
    varsStr += `$${newArg.variableName}: ${newArg.variableType} `;
  }
  const defaultFields = "id";
  const selectedFields = fields ? fields : defaultFields;

  const mutation = gql`
        mutation activateTasks($where: FilterTaskInput!  ${varsStr}) {
            activateTasks(where: $where ) {
                objects {
                    ${selectedFields}
                }
                errorsReport {
                    ${ErrorCollectionType}
                }
            }
        }
    `;
  return mutation;
}
//endregion

//endregion
