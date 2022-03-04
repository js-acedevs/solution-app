import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: Maybe<Scalars['Int']>;
    _gt?: Maybe<Scalars['Int']>;
    _gte?: Maybe<Scalars['Int']>;
    _in?: Maybe<Array<Scalars['Int']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['Int']>;
    _lte?: Maybe<Scalars['Int']>;
    _neq?: Maybe<Scalars['Int']>;
    _nin?: Maybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};

export type LoginOutput = {
    __typename?: 'LoginOutput';
    statusCode: Scalars['String'];
    statusIsOk: Scalars['Boolean'];
    statusMessage: Scalars['String'];
    statusPath: Scalars['String'];
    token?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
    email: Scalars['String'];
    name: Scalars['String'];
    password: Scalars['String'];
};

export type RegisterOutput = {
    __typename?: 'RegisterOutput';
    statusCode: Scalars['String'];
    statusIsOk: Scalars['Boolean'];
    statusMessage: Scalars['String'];
    statusPath: Scalars['String'];
    token?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: Maybe<Scalars['String']>;
    _gt?: Maybe<Scalars['String']>;
    _gte?: Maybe<Scalars['String']>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: Maybe<Scalars['String']>;
    _in?: Maybe<Array<Scalars['String']>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: Maybe<Scalars['String']>;
    _is_null?: Maybe<Scalars['Boolean']>;
    /** does the column match the given pattern */
    _like?: Maybe<Scalars['String']>;
    _lt?: Maybe<Scalars['String']>;
    _lte?: Maybe<Scalars['String']>;
    _neq?: Maybe<Scalars['String']>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: Maybe<Scalars['String']>;
    _nin?: Maybe<Array<Scalars['String']>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: Maybe<Scalars['String']>;
    /** does the column NOT match the given pattern */
    _nlike?: Maybe<Scalars['String']>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: Maybe<Scalars['String']>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: Maybe<Scalars['String']>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: Maybe<Scalars['String']>;
    /** does the column match the given SQL regular expression */
    _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root';
    /** delete data from the table: "users" */
    delete_users?: Maybe<Users_Mutation_Response>;
    /** delete single row from the table: "users" */
    delete_users_by_pk?: Maybe<Users>;
    /** insert data into the table: "users" */
    insert_users?: Maybe<Users_Mutation_Response>;
    /** insert a single row into the table: "users" */
    insert_users_one?: Maybe<Users>;
    login?: Maybe<LoginOutput>;
    register?: Maybe<RegisterOutput>;
    /** update data of the table: "users" */
    update_users?: Maybe<Users_Mutation_Response>;
    /** update single row of the table: "users" */
    update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
    id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
    objects: Array<Users_Insert_Input>;
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
    object: Users_Insert_Input;
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLoginArgs = {
    data?: Maybe<LoginInput>;
};

/** mutation root */
export type Mutation_RootRegisterArgs = {
    data?: Maybe<RegisterInput>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
    _inc?: Maybe<Users_Inc_Input>;
    _set?: Maybe<Users_Set_Input>;
    where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
    _inc?: Maybe<Users_Inc_Input>;
    _set?: Maybe<Users_Set_Input>;
    pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = 'asc',
    /** in ascending order, nulls first */
    AscNullsFirst = 'asc_nulls_first',
    /** in ascending order, nulls last */
    AscNullsLast = 'asc_nulls_last',
    /** in descending order, nulls first */
    Desc = 'desc',
    /** in descending order, nulls first */
    DescNullsFirst = 'desc_nulls_first',
    /** in descending order, nulls last */
    DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
    __typename?: 'query_root';
    /** execute function "auth_user" which returns "users" */
    auth_user: Array<Users>;
    /** execute function "auth_user" and query aggregates on result of table type "users" */
    auth_user_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
};

export type Query_RootAuth_UserArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootAuth_User_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
    id: Scalars['Int'];
};

export type Subscription_Root = {
    __typename?: 'subscription_root';
    /** execute function "auth_user" which returns "users" */
    auth_user: Array<Users>;
    /** execute function "auth_user" and query aggregates on result of table type "users" */
    auth_user_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" */
    users: Array<Users>;
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: Users_Aggregate;
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: Maybe<Users>;
};

export type Subscription_RootAuth_UserArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootAuth_User_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
    distinct_on?: Maybe<Array<Users_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Users_Order_By>>;
    where?: Maybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
    id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: Maybe<Scalars['timestamptz']>;
    _gt?: Maybe<Scalars['timestamptz']>;
    _gte?: Maybe<Scalars['timestamptz']>;
    _in?: Maybe<Array<Scalars['timestamptz']>>;
    _is_null?: Maybe<Scalars['Boolean']>;
    _lt?: Maybe<Scalars['timestamptz']>;
    _lte?: Maybe<Scalars['timestamptz']>;
    _neq?: Maybe<Scalars['timestamptz']>;
    _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
    __typename?: 'users';
    createdAt: Scalars['timestamptz'];
    email: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
    password: Scalars['String'];
    updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
    __typename?: 'users_aggregate';
    aggregate?: Maybe<Users_Aggregate_Fields>;
    nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
    __typename?: 'users_aggregate_fields';
    avg?: Maybe<Users_Avg_Fields>;
    count: Scalars['Int'];
    max?: Maybe<Users_Max_Fields>;
    min?: Maybe<Users_Min_Fields>;
    stddev?: Maybe<Users_Stddev_Fields>;
    stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
    sum?: Maybe<Users_Sum_Fields>;
    var_pop?: Maybe<Users_Var_Pop_Fields>;
    var_samp?: Maybe<Users_Var_Samp_Fields>;
    variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Users_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
    __typename?: 'users_avg_fields';
    id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
    _and?: Maybe<Array<Users_Bool_Exp>>;
    _not?: Maybe<Users_Bool_Exp>;
    _or?: Maybe<Array<Users_Bool_Exp>>;
    createdAt?: Maybe<Timestamptz_Comparison_Exp>;
    email?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Int_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    password?: Maybe<String_Comparison_Exp>;
    updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
    /** unique or primary key constraint */
    UsersEmailKey = 'users_email_key',
    /** unique or primary key constraint */
    UsersPkey = 'users_pkey',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
    id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
    createdAt?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
    __typename?: 'users_max_fields';
    createdAt?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
    __typename?: 'users_min_fields';
    createdAt?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
    __typename?: 'users_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int'];
    /** data from the rows affected by the mutation */
    returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns?: Array<Users_Update_Column>;
    where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
    createdAt?: Maybe<Order_By>;
    email?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    password?: Maybe<Order_By>;
    updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
    id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Email = 'email',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    Password = 'password',
    /** column name */
    UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
    createdAt?: Maybe<Scalars['timestamptz']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
    __typename?: 'users_stddev_fields';
    id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
    __typename?: 'users_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
    __typename?: 'users_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
    __typename?: 'users_sum_fields';
    id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
    /** column name */
    CreatedAt = 'createdAt',
    /** column name */
    Email = 'email',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    Password = 'password',
    /** column name */
    UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
    __typename?: 'users_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
    __typename?: 'users_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
    __typename?: 'users_variance_fields';
    id?: Maybe<Scalars['Float']>;
};

export type UserFragment = { __typename?: 'users' } & UserFieldsFragment;

export type UserFieldsFragment = { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'email'>;

export type LoginMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'mutation_root' } & {
    login?: Maybe<
        { __typename?: 'LoginOutput' } & Pick<
            LoginOutput,
            'token' | 'statusCode' | 'statusIsOk' | 'statusMessage' | 'statusPath'
        >
    >;
};

export type AuthUserQueryVariables = Exact<{ [key: string]: never }>;

export type AuthUserQuery = { __typename?: 'query_root' } & {
    authUser: Array<{ __typename?: 'users' } & UserFragment>;
};

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on users {
        id
        name
        email
    }
`;
export const UserFragmentDoc = gql`
    fragment User on users {
        ...UserFields
    }
    ${UserFieldsFragmentDoc}
`;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
            token
            statusCode
            statusIsOk
            statusMessage
            statusPath
        }
    }
`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
    baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
    LoginMutation,
    LoginMutationVariables
>;
export const AuthUserDocument = gql`
    query AuthUser {
        authUser: auth_user {
            ...User
        }
    }
    ${UserFragmentDoc}
`;

/**
 * __useAuthUserQuery__
 *
 * To run a query within a React component, call `useAuthUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthUserQuery(
    baseOptions?: Apollo.QueryHookOptions<AuthUserQuery, AuthUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, options);
}
export function useAuthUserLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<AuthUserQuery, AuthUserQueryVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, options);
}
export type AuthUserQueryHookResult = ReturnType<typeof useAuthUserQuery>;
export type AuthUserLazyQueryHookResult = ReturnType<typeof useAuthUserLazyQuery>;
export type AuthUserQueryResult = Apollo.QueryResult<AuthUserQuery, AuthUserQueryVariables>;
