/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * A field whose value conforms to the standard
   * internet email address format as specified in
   * HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.
   */
  Email: { input: any; output: any; }
  /** The page size can be int or 'All' */
  IntOrAll: { input: any; output: any; }
};

export type ActivateGroupsPayload = {
  __typename?: 'ActivateGroupsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<GroupType>>>;
};

export type ActivatePermissionsPayload = {
  __typename?: 'ActivatePermissionsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<PermissionType>>>;
};

export type ActivateTasksPayload = {
  __typename?: 'ActivateTasksPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<TaskType>>>;
};

export type ActivateUsersPayload = {
  __typename?: 'ActivateUsersPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<UserType>>>;
};

export type BooleanFilter = {
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  endswith?: InputMaybe<Scalars['Boolean']['input']>;
  exact?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  icontains?: InputMaybe<Scalars['Boolean']['input']>;
  iendswith?: InputMaybe<Scalars['Boolean']['input']>;
  iexact?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  isnull?: InputMaybe<Scalars['Boolean']['input']>;
  istartswith?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startswith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateGroupInput = {
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type CreateGroupsPayload = {
  __typename?: 'CreateGroupsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<GroupType>>>;
};

export type CreatePermissionInput = {
  codename: Scalars['String']['input'];
  contentType: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CreatePermissionsPayload = {
  __typename?: 'CreatePermissionsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<PermissionType>>>;
};

export type CreateTaskInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  title: Scalars['String']['input'];
};

export type CreateTasksPayload = {
  __typename?: 'CreateTasksPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<TaskType>>>;
};

export type CreateUserInput = {
  dateJoined?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['Email']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Designates whether the user can log into this admin site. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  /** Specific permissions for this user. */
  userPermissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['input'];
};

export type CreateUsersPayload = {
  __typename?: 'CreateUsersPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<UserType>>>;
};

export type DateTimeFilter = {
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  day?: InputMaybe<Scalars['DateTime']['input']>;
  endswith?: InputMaybe<Scalars['DateTime']['input']>;
  exact?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  hour?: InputMaybe<Scalars['DateTime']['input']>;
  icontains?: InputMaybe<Scalars['DateTime']['input']>;
  iendswith?: InputMaybe<Scalars['DateTime']['input']>;
  iexact?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  isnull?: InputMaybe<Scalars['Boolean']['input']>;
  isoWeekDay?: InputMaybe<Scalars['DateTime']['input']>;
  isoYear?: InputMaybe<Scalars['DateTime']['input']>;
  istartswith?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  minute?: InputMaybe<Scalars['DateTime']['input']>;
  month?: InputMaybe<Scalars['DateTime']['input']>;
  quarter?: InputMaybe<Scalars['DateTime']['input']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  second?: InputMaybe<Scalars['DateTime']['input']>;
  startswith?: InputMaybe<Scalars['DateTime']['input']>;
  time?: InputMaybe<Scalars['DateTime']['input']>;
  week?: InputMaybe<Scalars['DateTime']['input']>;
  weekDay?: InputMaybe<Scalars['DateTime']['input']>;
  year?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeactivateGroupsPayload = {
  __typename?: 'DeactivateGroupsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<GroupType>>>;
};

export type DeactivatePermissionsPayload = {
  __typename?: 'DeactivatePermissionsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<PermissionType>>>;
};

export type DeactivateTasksPayload = {
  __typename?: 'DeactivateTasksPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<TaskType>>>;
};

export type DeactivateUsersPayload = {
  __typename?: 'DeactivateUsersPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<UserType>>>;
};

export type DeleteGroupsPayload = {
  __typename?: 'DeleteGroupsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<GroupType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeletePermissionsPayload = {
  __typename?: 'DeletePermissionsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<PermissionType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteTasksPayload = {
  __typename?: 'DeleteTasksPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<TaskType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteUsersPayload = {
  __typename?: 'DeleteUsersPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<UserType>>>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailFilter = {
  contains?: InputMaybe<Scalars['Email']['input']>;
  endswith?: InputMaybe<Scalars['Email']['input']>;
  exact?: InputMaybe<Scalars['Email']['input']>;
  gt?: InputMaybe<Scalars['Email']['input']>;
  gte?: InputMaybe<Scalars['Email']['input']>;
  icontains?: InputMaybe<Scalars['Email']['input']>;
  iendswith?: InputMaybe<Scalars['Email']['input']>;
  iexact?: InputMaybe<Scalars['Email']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Email']['input']>>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  isnull?: InputMaybe<Scalars['Boolean']['input']>;
  istartswith?: InputMaybe<Scalars['Email']['input']>;
  lt?: InputMaybe<Scalars['Email']['input']>;
  lte?: InputMaybe<Scalars['Email']['input']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['Email']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startswith?: InputMaybe<Scalars['Email']['input']>;
};

/**
 * Represents a collection of errors associated with an object.
 *
 * Attributes:
 *     object_position (str): The position of the object.
 *     errors (List[ErrorType]): A list of ErrorType objects representing the errors.
 *
 * Methods:
 *     from_errors(cls, object_position, errors): Creates an instance of ErrorCollectionType from the given object position and errors.
 */
export type ErrorCollectionType = {
  __typename?: 'ErrorCollectionType';
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  objectPosition?: Maybe<Scalars['String']['output']>;
};

/** Represents an error type with a field and a list of error messages. */
export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String']['output'];
  messages: Array<Scalars['String']['output']>;
};

export type FilterGroupInput = {
  AND?: InputMaybe<Array<InputMaybe<FilterGroupInput>>>;
  NOT?: InputMaybe<FilterGroupInput>;
  OR?: InputMaybe<Array<InputMaybe<FilterGroupInput>>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<FilterPermissionInput>;
  user?: InputMaybe<FilterUserInput>;
};

export type FilterPermissionInput = {
  AND?: InputMaybe<Array<InputMaybe<FilterPermissionInput>>>;
  NOT?: InputMaybe<FilterPermissionInput>;
  OR?: InputMaybe<Array<InputMaybe<FilterPermissionInput>>>;
  codename?: InputMaybe<StringFilter>;
  group?: InputMaybe<FilterGroupInput>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  user?: InputMaybe<FilterUserInput>;
};

export type FilterTaskInput = {
  AND?: InputMaybe<Array<InputMaybe<FilterTaskInput>>>;
  NOT?: InputMaybe<FilterTaskInput>;
  OR?: InputMaybe<Array<InputMaybe<FilterTaskInput>>>;
  completed?: InputMaybe<BooleanFilter>;
  created?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IdFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FilterUserInput = {
  AND?: InputMaybe<Array<InputMaybe<FilterUserInput>>>;
  NOT?: InputMaybe<FilterUserInput>;
  OR?: InputMaybe<Array<InputMaybe<FilterUserInput>>>;
  dateJoined?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<EmailFilter>;
  firstName?: InputMaybe<StringFilter>;
  groups?: InputMaybe<FilterGroupInput>;
  id?: InputMaybe<IdFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  isStaff?: InputMaybe<BooleanFilter>;
  isSuperuser?: InputMaybe<BooleanFilter>;
  lastLogin?: InputMaybe<DateTimeFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  userPermissions?: InputMaybe<FilterPermissionInput>;
  username?: InputMaybe<StringFilter>;
};

export type GroupPaginatedType = PaginationInterface & {
  __typename?: 'GroupPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  indexEnd?: Maybe<Scalars['Int']['output']>;
  indexStart?: Maybe<Scalars['Int']['output']>;
  objects?: Maybe<Array<Maybe<GroupType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type GroupType = {
  __typename?: 'GroupType';
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  paginatedPermissions?: Maybe<PermissionPaginatedType>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  paginatedUser?: Maybe<UserPaginatedType>;
};


export type GroupTypePaginatedPermissionsArgs = {
  orderBy?: InputMaybe<OrderByPermissionInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterPermissionInput>;
};


export type GroupTypePaginatedUserArgs = {
  orderBy?: InputMaybe<OrderByUserInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterUserInput>;
};

export type IdFilter = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  endswith?: InputMaybe<Scalars['ID']['input']>;
  exact?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  icontains?: InputMaybe<Scalars['ID']['input']>;
  iendswith?: InputMaybe<Scalars['ID']['input']>;
  iexact?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  isnull?: InputMaybe<Scalars['Boolean']['input']>;
  istartswith?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startswith?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateGroups?: Maybe<ActivateGroupsPayload>;
  activatePermissions?: Maybe<ActivatePermissionsPayload>;
  activateTasks?: Maybe<ActivateTasksPayload>;
  activateUsers?: Maybe<ActivateUsersPayload>;
  createGroups?: Maybe<CreateGroupsPayload>;
  createPermissions?: Maybe<CreatePermissionsPayload>;
  createTasks?: Maybe<CreateTasksPayload>;
  createUsers?: Maybe<CreateUsersPayload>;
  deactivateGroups?: Maybe<DeactivateGroupsPayload>;
  deactivatePermissions?: Maybe<DeactivatePermissionsPayload>;
  deactivateTasks?: Maybe<DeactivateTasksPayload>;
  deactivateUsers?: Maybe<DeactivateUsersPayload>;
  deleteGroups?: Maybe<DeleteGroupsPayload>;
  deletePermissions?: Maybe<DeletePermissionsPayload>;
  deleteTasks?: Maybe<DeleteTasksPayload>;
  deleteUsers?: Maybe<DeleteUsersPayload>;
  updateGroups?: Maybe<UpdateGroupsPayload>;
  updatePermissions?: Maybe<UpdatePermissionsPayload>;
  updateTasks?: Maybe<UpdateTasksPayload>;
  updateUsers?: Maybe<UpdateUsersPayload>;
};


export type MutationActivateGroupsArgs = {
  where: FilterGroupInput;
};


export type MutationActivatePermissionsArgs = {
  where: FilterPermissionInput;
};


export type MutationActivateTasksArgs = {
  where: FilterTaskInput;
};


export type MutationActivateUsersArgs = {
  where: FilterUserInput;
};


export type MutationCreateGroupsArgs = {
  input: Array<CreateGroupInput>;
};


export type MutationCreatePermissionsArgs = {
  input: Array<CreatePermissionInput>;
};


export type MutationCreateTasksArgs = {
  input: Array<CreateTaskInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<CreateUserInput>;
};


export type MutationDeactivateGroupsArgs = {
  where: FilterGroupInput;
};


export type MutationDeactivatePermissionsArgs = {
  where: FilterPermissionInput;
};


export type MutationDeactivateTasksArgs = {
  where: FilterTaskInput;
};


export type MutationDeactivateUsersArgs = {
  where: FilterUserInput;
};


export type MutationDeleteGroupsArgs = {
  where: FilterGroupInput;
};


export type MutationDeletePermissionsArgs = {
  where: FilterPermissionInput;
};


export type MutationDeleteTasksArgs = {
  where: FilterTaskInput;
};


export type MutationDeleteUsersArgs = {
  where: FilterUserInput;
};


export type MutationUpdateGroupsArgs = {
  input: Array<UpdateGroupInput>;
};


export type MutationUpdatePermissionsArgs = {
  input: Array<UpdatePermissionInput>;
};


export type MutationUpdateTasksArgs = {
  input: Array<UpdateTaskInput>;
};


export type MutationUpdateUsersArgs = {
  input: Array<UpdateUserInput>;
};

export type OrderByGroupInput = {
  id?: InputMaybe<OrderEnum>;
  name?: InputMaybe<OrderStringEnum>;
};

export type OrderByPermissionInput = {
  codename?: InputMaybe<OrderStringEnum>;
  id?: InputMaybe<OrderEnum>;
  name?: InputMaybe<OrderStringEnum>;
};

export type OrderByTaskInput = {
  completed?: InputMaybe<OrderEnum>;
  created?: InputMaybe<OrderEnum>;
  id?: InputMaybe<OrderEnum>;
  title?: InputMaybe<OrderStringEnum>;
};

export type OrderByUserInput = {
  dateJoined?: InputMaybe<OrderEnum>;
  email?: InputMaybe<OrderStringEnum>;
  firstName?: InputMaybe<OrderStringEnum>;
  id?: InputMaybe<OrderEnum>;
  isActive?: InputMaybe<OrderEnum>;
  isStaff?: InputMaybe<OrderEnum>;
  isSuperuser?: InputMaybe<OrderEnum>;
  lastLogin?: InputMaybe<OrderEnum>;
  lastName?: InputMaybe<OrderStringEnum>;
  password?: InputMaybe<OrderStringEnum>;
  username?: InputMaybe<OrderStringEnum>;
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderStringEnum {
  Asc = 'ASC',
  Desc = 'DESC',
  Iasc = 'IASC',
  Idesc = 'IDESC'
}

export type PaginationConfigInput = {
  itemsPerPage?: InputMaybe<Scalars['IntOrAll']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Defines a GraphQL Interface for pagination-related attributes. */
export type PaginationInterface = {
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  indexEnd?: Maybe<Scalars['Int']['output']>;
  indexStart?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PermissionPaginatedType = PaginationInterface & {
  __typename?: 'PermissionPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  indexEnd?: Maybe<Scalars['Int']['output']>;
  indexStart?: Maybe<Scalars['Int']['output']>;
  objects?: Maybe<Array<Maybe<PermissionType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PermissionType = {
  __typename?: 'PermissionType';
  codename: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  paginatedGroup?: Maybe<GroupPaginatedType>;
  /** Specific permissions for this user. */
  paginatedUser?: Maybe<UserPaginatedType>;
};


export type PermissionTypePaginatedGroupArgs = {
  orderBy?: InputMaybe<OrderByGroupInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterGroupInput>;
};


export type PermissionTypePaginatedUserArgs = {
  orderBy?: InputMaybe<OrderByUserInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterUserInput>;
};

export type Query = {
  __typename?: 'Query';
  readGroup?: Maybe<GroupType>;
  readPermission?: Maybe<PermissionType>;
  readTask?: Maybe<TaskType>;
  readUser?: Maybe<UserType>;
  searchGroups?: Maybe<GroupPaginatedType>;
  searchPermissions?: Maybe<PermissionPaginatedType>;
  searchTasks?: Maybe<TaskPaginatedType>;
  searchUsers?: Maybe<UserPaginatedType>;
};


export type QueryReadGroupArgs = {
  where: FilterGroupInput;
};


export type QueryReadPermissionArgs = {
  where: FilterPermissionInput;
};


export type QueryReadTaskArgs = {
  where: FilterTaskInput;
};


export type QueryReadUserArgs = {
  where: FilterUserInput;
};


export type QuerySearchGroupsArgs = {
  orderBy?: InputMaybe<OrderByGroupInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterGroupInput>;
};


export type QuerySearchPermissionsArgs = {
  orderBy?: InputMaybe<OrderByPermissionInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterPermissionInput>;
};


export type QuerySearchTasksArgs = {
  orderBy?: InputMaybe<OrderByTaskInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterTaskInput>;
};


export type QuerySearchUsersArgs = {
  orderBy?: InputMaybe<OrderByUserInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterUserInput>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endswith?: InputMaybe<Scalars['String']['input']>;
  exact?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  icontains?: InputMaybe<Scalars['String']['input']>;
  iendswith?: InputMaybe<Scalars['String']['input']>;
  iexact?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  isnull?: InputMaybe<Scalars['Boolean']['input']>;
  istartswith?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startswith?: InputMaybe<Scalars['String']['input']>;
};

export type TaskPaginatedType = PaginationInterface & {
  __typename?: 'TaskPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  indexEnd?: Maybe<Scalars['Int']['output']>;
  indexStart?: Maybe<Scalars['Int']['output']>;
  objects?: Maybe<Array<Maybe<TaskType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type TaskType = {
  __typename?: 'TaskType';
  completed?: Maybe<Scalars['Boolean']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
};

export type UpdateGroupInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UpdateGroupsPayload = {
  __typename?: 'UpdateGroupsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<GroupType>>>;
};

export type UpdatePermissionInput = {
  codename?: InputMaybe<Scalars['String']['input']>;
  contentType?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermissionsPayload = {
  __typename?: 'UpdatePermissionsPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<PermissionType>>>;
};

export type UpdateTaskInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTasksPayload = {
  __typename?: 'UpdateTasksPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<TaskType>>>;
};

export type UpdateUserInput = {
  dateJoined?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['Email']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Designates whether the user can log into this admin site. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  /** Specific permissions for this user. */
  userPermissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUsersPayload = {
  __typename?: 'UpdateUsersPayload';
  errorsReport?: Maybe<Array<Maybe<ErrorCollectionType>>>;
  objects?: Maybe<Array<Maybe<UserType>>>;
};

export type UserPaginatedType = PaginationInterface & {
  __typename?: 'UserPaginatedType';
  hasNext?: Maybe<Scalars['Boolean']['output']>;
  hasPrev?: Maybe<Scalars['Boolean']['output']>;
  indexEnd?: Maybe<Scalars['Int']['output']>;
  indexStart?: Maybe<Scalars['Int']['output']>;
  objects?: Maybe<Array<Maybe<UserType>>>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type UserType = {
  __typename?: 'UserType';
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['Email']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** Designates whether the user can log into this admin site. */
  isStaff?: Maybe<Scalars['Boolean']['output']>;
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  paginatedGroups?: Maybe<GroupPaginatedType>;
  /** Specific permissions for this user. */
  paginatedUserPermissions?: Maybe<PermissionPaginatedType>;
  password: Scalars['String']['output'];
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String']['output'];
};


export type UserTypePaginatedGroupsArgs = {
  orderBy?: InputMaybe<OrderByGroupInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterGroupInput>;
};


export type UserTypePaginatedUserPermissionsArgs = {
  orderBy?: InputMaybe<OrderByPermissionInput>;
  paginationConfig?: InputMaybe<PaginationConfigInput>;
  where?: InputMaybe<FilterPermissionInput>;
};
