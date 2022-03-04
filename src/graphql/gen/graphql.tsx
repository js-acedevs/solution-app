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

/** columns and relationships of "board" */
export type Board = {
    __typename?: 'board';
    created_at: Scalars['timestamptz'];
    id: Scalars['Int'];
    /** An array relationship */
    issues: Array<Issues>;
    /** An aggregate relationship */
    issues_aggregate: Issues_Aggregate;
    name: Scalars['String'];
    updated_at: Scalars['timestamptz'];
    /** An object relationship */
    user: Users;
    userId: Scalars['Int'];
};

/** columns and relationships of "board" */
export type BoardIssuesArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

/** columns and relationships of "board" */
export type BoardIssues_AggregateArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

/** aggregated selection of "board" */
export type Board_Aggregate = {
    __typename?: 'board_aggregate';
    aggregate?: Maybe<Board_Aggregate_Fields>;
    nodes: Array<Board>;
};

/** aggregate fields of "board" */
export type Board_Aggregate_Fields = {
    __typename?: 'board_aggregate_fields';
    avg?: Maybe<Board_Avg_Fields>;
    count: Scalars['Int'];
    max?: Maybe<Board_Max_Fields>;
    min?: Maybe<Board_Min_Fields>;
    stddev?: Maybe<Board_Stddev_Fields>;
    stddev_pop?: Maybe<Board_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Board_Stddev_Samp_Fields>;
    sum?: Maybe<Board_Sum_Fields>;
    var_pop?: Maybe<Board_Var_Pop_Fields>;
    var_samp?: Maybe<Board_Var_Samp_Fields>;
    variance?: Maybe<Board_Variance_Fields>;
};

/** aggregate fields of "board" */
export type Board_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Board_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "board" */
export type Board_Aggregate_Order_By = {
    avg?: Maybe<Board_Avg_Order_By>;
    count?: Maybe<Order_By>;
    max?: Maybe<Board_Max_Order_By>;
    min?: Maybe<Board_Min_Order_By>;
    stddev?: Maybe<Board_Stddev_Order_By>;
    stddev_pop?: Maybe<Board_Stddev_Pop_Order_By>;
    stddev_samp?: Maybe<Board_Stddev_Samp_Order_By>;
    sum?: Maybe<Board_Sum_Order_By>;
    var_pop?: Maybe<Board_Var_Pop_Order_By>;
    var_samp?: Maybe<Board_Var_Samp_Order_By>;
    variance?: Maybe<Board_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "board" */
export type Board_Arr_Rel_Insert_Input = {
    data: Array<Board_Insert_Input>;
    /** on conflict condition */
    on_conflict?: Maybe<Board_On_Conflict>;
};

/** aggregate avg on columns */
export type Board_Avg_Fields = {
    __typename?: 'board_avg_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "board" */
export type Board_Avg_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "board". All fields are combined with a logical 'AND'. */
export type Board_Bool_Exp = {
    _and?: Maybe<Array<Board_Bool_Exp>>;
    _not?: Maybe<Board_Bool_Exp>;
    _or?: Maybe<Array<Board_Bool_Exp>>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    id?: Maybe<Int_Comparison_Exp>;
    issues?: Maybe<Issues_Bool_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
    user?: Maybe<Users_Bool_Exp>;
    userId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "board" */
export enum Board_Constraint {
    /** unique or primary key constraint */
    BoardPkey = 'board_pkey',
}

/** input type for incrementing numeric columns in table "board" */
export type Board_Inc_Input = {
    id?: Maybe<Scalars['Int']>;
    userId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "board" */
export type Board_Insert_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['Int']>;
    issues?: Maybe<Issues_Arr_Rel_Insert_Input>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    user?: Maybe<Users_Obj_Rel_Insert_Input>;
    userId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Board_Max_Fields = {
    __typename?: 'board_max_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "board" */
export type Board_Max_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Board_Min_Fields = {
    __typename?: 'board_min_fields';
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "board" */
export type Board_Min_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "board" */
export type Board_Mutation_Response = {
    __typename?: 'board_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int'];
    /** data from the rows affected by the mutation */
    returning: Array<Board>;
};

/** input type for inserting object relation for remote table "board" */
export type Board_Obj_Rel_Insert_Input = {
    data: Board_Insert_Input;
    /** on conflict condition */
    on_conflict?: Maybe<Board_On_Conflict>;
};

/** on conflict condition type for table "board" */
export type Board_On_Conflict = {
    constraint: Board_Constraint;
    update_columns?: Array<Board_Update_Column>;
    where?: Maybe<Board_Bool_Exp>;
};

/** Ordering options when selecting data from "board". */
export type Board_Order_By = {
    created_at?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    issues_aggregate?: Maybe<Issues_Aggregate_Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
    user?: Maybe<Users_Order_By>;
    userId?: Maybe<Order_By>;
};

/** primary key columns input for table: board */
export type Board_Pk_Columns_Input = {
    id: Scalars['Int'];
};

/** select columns of table "board" */
export enum Board_Select_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    UserId = 'userId',
}

/** input type for updating data in table "board" */
export type Board_Set_Input = {
    created_at?: Maybe<Scalars['timestamptz']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
    userId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Board_Stddev_Fields = {
    __typename?: 'board_stddev_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "board" */
export type Board_Stddev_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Board_Stddev_Pop_Fields = {
    __typename?: 'board_stddev_pop_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "board" */
export type Board_Stddev_Pop_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Board_Stddev_Samp_Fields = {
    __typename?: 'board_stddev_samp_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "board" */
export type Board_Stddev_Samp_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Board_Sum_Fields = {
    __typename?: 'board_sum_fields';
    id?: Maybe<Scalars['Int']>;
    userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "board" */
export type Board_Sum_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** update columns of table "board" */
export enum Board_Update_Column {
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
    /** column name */
    UserId = 'userId',
}

/** aggregate var_pop on columns */
export type Board_Var_Pop_Fields = {
    __typename?: 'board_var_pop_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "board" */
export type Board_Var_Pop_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Board_Var_Samp_Fields = {
    __typename?: 'board_var_samp_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "board" */
export type Board_Var_Samp_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Board_Variance_Fields = {
    __typename?: 'board_variance_fields';
    id?: Maybe<Scalars['Float']>;
    userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "board" */
export type Board_Variance_Order_By = {
    id?: Maybe<Order_By>;
    userId?: Maybe<Order_By>;
};

/** columns and relationships of "issues" */
export type Issues = {
    __typename?: 'issues';
    /** An object relationship */
    board?: Maybe<Board>;
    boardId?: Maybe<Scalars['Int']>;
    created_at: Scalars['timestamptz'];
    description: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
    updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "issues" */
export type Issues_Aggregate = {
    __typename?: 'issues_aggregate';
    aggregate?: Maybe<Issues_Aggregate_Fields>;
    nodes: Array<Issues>;
};

/** aggregate fields of "issues" */
export type Issues_Aggregate_Fields = {
    __typename?: 'issues_aggregate_fields';
    avg?: Maybe<Issues_Avg_Fields>;
    count: Scalars['Int'];
    max?: Maybe<Issues_Max_Fields>;
    min?: Maybe<Issues_Min_Fields>;
    stddev?: Maybe<Issues_Stddev_Fields>;
    stddev_pop?: Maybe<Issues_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Issues_Stddev_Samp_Fields>;
    sum?: Maybe<Issues_Sum_Fields>;
    var_pop?: Maybe<Issues_Var_Pop_Fields>;
    var_samp?: Maybe<Issues_Var_Samp_Fields>;
    variance?: Maybe<Issues_Variance_Fields>;
};

/** aggregate fields of "issues" */
export type Issues_Aggregate_FieldsCountArgs = {
    columns?: Maybe<Array<Issues_Select_Column>>;
    distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "issues" */
export type Issues_Aggregate_Order_By = {
    avg?: Maybe<Issues_Avg_Order_By>;
    count?: Maybe<Order_By>;
    max?: Maybe<Issues_Max_Order_By>;
    min?: Maybe<Issues_Min_Order_By>;
    stddev?: Maybe<Issues_Stddev_Order_By>;
    stddev_pop?: Maybe<Issues_Stddev_Pop_Order_By>;
    stddev_samp?: Maybe<Issues_Stddev_Samp_Order_By>;
    sum?: Maybe<Issues_Sum_Order_By>;
    var_pop?: Maybe<Issues_Var_Pop_Order_By>;
    var_samp?: Maybe<Issues_Var_Samp_Order_By>;
    variance?: Maybe<Issues_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "issues" */
export type Issues_Arr_Rel_Insert_Input = {
    data: Array<Issues_Insert_Input>;
    /** on conflict condition */
    on_conflict?: Maybe<Issues_On_Conflict>;
};

/** aggregate avg on columns */
export type Issues_Avg_Fields = {
    __typename?: 'issues_avg_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "issues" */
export type Issues_Avg_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "issues". All fields are combined with a logical 'AND'. */
export type Issues_Bool_Exp = {
    _and?: Maybe<Array<Issues_Bool_Exp>>;
    _not?: Maybe<Issues_Bool_Exp>;
    _or?: Maybe<Array<Issues_Bool_Exp>>;
    board?: Maybe<Board_Bool_Exp>;
    boardId?: Maybe<Int_Comparison_Exp>;
    created_at?: Maybe<Timestamptz_Comparison_Exp>;
    description?: Maybe<String_Comparison_Exp>;
    id?: Maybe<Int_Comparison_Exp>;
    name?: Maybe<String_Comparison_Exp>;
    updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "issues" */
export enum Issues_Constraint {
    /** unique or primary key constraint */
    IssuesPkey = 'issues_pkey',
}

/** input type for incrementing numeric columns in table "issues" */
export type Issues_Inc_Input = {
    boardId?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "issues" */
export type Issues_Insert_Input = {
    board?: Maybe<Board_Obj_Rel_Insert_Input>;
    boardId?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Issues_Max_Fields = {
    __typename?: 'issues_max_fields';
    boardId?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "issues" */
export type Issues_Max_Order_By = {
    boardId?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Issues_Min_Fields = {
    __typename?: 'issues_min_fields';
    boardId?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "issues" */
export type Issues_Min_Order_By = {
    boardId?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "issues" */
export type Issues_Mutation_Response = {
    __typename?: 'issues_mutation_response';
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int'];
    /** data from the rows affected by the mutation */
    returning: Array<Issues>;
};

/** on conflict condition type for table "issues" */
export type Issues_On_Conflict = {
    constraint: Issues_Constraint;
    update_columns?: Array<Issues_Update_Column>;
    where?: Maybe<Issues_Bool_Exp>;
};

/** Ordering options when selecting data from "issues". */
export type Issues_Order_By = {
    board?: Maybe<Board_Order_By>;
    boardId?: Maybe<Order_By>;
    created_at?: Maybe<Order_By>;
    description?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
    name?: Maybe<Order_By>;
    updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: issues */
export type Issues_Pk_Columns_Input = {
    id: Scalars['Int'];
};

/** select columns of table "issues" */
export enum Issues_Select_Column {
    /** column name */
    BoardId = 'boardId',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Description = 'description',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** input type for updating data in table "issues" */
export type Issues_Set_Input = {
    boardId?: Maybe<Scalars['Int']>;
    created_at?: Maybe<Scalars['timestamptz']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Issues_Stddev_Fields = {
    __typename?: 'issues_stddev_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "issues" */
export type Issues_Stddev_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Issues_Stddev_Pop_Fields = {
    __typename?: 'issues_stddev_pop_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "issues" */
export type Issues_Stddev_Pop_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Issues_Stddev_Samp_Fields = {
    __typename?: 'issues_stddev_samp_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "issues" */
export type Issues_Stddev_Samp_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Issues_Sum_Fields = {
    __typename?: 'issues_sum_fields';
    boardId?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "issues" */
export type Issues_Sum_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** update columns of table "issues" */
export enum Issues_Update_Column {
    /** column name */
    BoardId = 'boardId',
    /** column name */
    CreatedAt = 'created_at',
    /** column name */
    Description = 'description',
    /** column name */
    Id = 'id',
    /** column name */
    Name = 'name',
    /** column name */
    UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Issues_Var_Pop_Fields = {
    __typename?: 'issues_var_pop_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "issues" */
export type Issues_Var_Pop_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Issues_Var_Samp_Fields = {
    __typename?: 'issues_var_samp_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "issues" */
export type Issues_Var_Samp_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Issues_Variance_Fields = {
    __typename?: 'issues_variance_fields';
    boardId?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "issues" */
export type Issues_Variance_Order_By = {
    boardId?: Maybe<Order_By>;
    id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
    __typename?: 'mutation_root';
    /** delete data from the table: "board" */
    delete_board?: Maybe<Board_Mutation_Response>;
    /** delete single row from the table: "board" */
    delete_board_by_pk?: Maybe<Board>;
    /** delete data from the table: "issues" */
    delete_issues?: Maybe<Issues_Mutation_Response>;
    /** delete single row from the table: "issues" */
    delete_issues_by_pk?: Maybe<Issues>;
    /** delete data from the table: "users" */
    delete_users?: Maybe<Users_Mutation_Response>;
    /** delete single row from the table: "users" */
    delete_users_by_pk?: Maybe<Users>;
    /** insert data into the table: "board" */
    insert_board?: Maybe<Board_Mutation_Response>;
    /** insert a single row into the table: "board" */
    insert_board_one?: Maybe<Board>;
    /** insert data into the table: "issues" */
    insert_issues?: Maybe<Issues_Mutation_Response>;
    /** insert a single row into the table: "issues" */
    insert_issues_one?: Maybe<Issues>;
    /** insert data into the table: "users" */
    insert_users?: Maybe<Users_Mutation_Response>;
    /** insert a single row into the table: "users" */
    insert_users_one?: Maybe<Users>;
    login?: Maybe<LoginOutput>;
    register?: Maybe<RegisterOutput>;
    /** update data of the table: "board" */
    update_board?: Maybe<Board_Mutation_Response>;
    /** update single row of the table: "board" */
    update_board_by_pk?: Maybe<Board>;
    /** update data of the table: "issues" */
    update_issues?: Maybe<Issues_Mutation_Response>;
    /** update single row of the table: "issues" */
    update_issues_by_pk?: Maybe<Issues>;
    /** update data of the table: "users" */
    update_users?: Maybe<Users_Mutation_Response>;
    /** update single row of the table: "users" */
    update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_BoardArgs = {
    where: Board_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Board_By_PkArgs = {
    id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_IssuesArgs = {
    where: Issues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Issues_By_PkArgs = {
    id: Scalars['Int'];
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
export type Mutation_RootInsert_BoardArgs = {
    objects: Array<Board_Insert_Input>;
    on_conflict?: Maybe<Board_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Board_OneArgs = {
    object: Board_Insert_Input;
    on_conflict?: Maybe<Board_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IssuesArgs = {
    objects: Array<Issues_Insert_Input>;
    on_conflict?: Maybe<Issues_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Issues_OneArgs = {
    object: Issues_Insert_Input;
    on_conflict?: Maybe<Issues_On_Conflict>;
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
export type Mutation_RootUpdate_BoardArgs = {
    _inc?: Maybe<Board_Inc_Input>;
    _set?: Maybe<Board_Set_Input>;
    where: Board_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Board_By_PkArgs = {
    _inc?: Maybe<Board_Inc_Input>;
    _set?: Maybe<Board_Set_Input>;
    pk_columns: Board_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_IssuesArgs = {
    _inc?: Maybe<Issues_Inc_Input>;
    _set?: Maybe<Issues_Set_Input>;
    where: Issues_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Issues_By_PkArgs = {
    _inc?: Maybe<Issues_Inc_Input>;
    _set?: Maybe<Issues_Set_Input>;
    pk_columns: Issues_Pk_Columns_Input;
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
    /** fetch data from the table: "board" */
    board: Array<Board>;
    /** fetch aggregated fields from the table: "board" */
    board_aggregate: Board_Aggregate;
    /** fetch data from the table: "board" using primary key columns */
    board_by_pk?: Maybe<Board>;
    /** An array relationship */
    issues: Array<Issues>;
    /** An aggregate relationship */
    issues_aggregate: Issues_Aggregate;
    /** fetch data from the table: "issues" using primary key columns */
    issues_by_pk?: Maybe<Issues>;
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

export type Query_RootBoardArgs = {
    distinct_on?: Maybe<Array<Board_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Board_Order_By>>;
    where?: Maybe<Board_Bool_Exp>;
};

export type Query_RootBoard_AggregateArgs = {
    distinct_on?: Maybe<Array<Board_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Board_Order_By>>;
    where?: Maybe<Board_Bool_Exp>;
};

export type Query_RootBoard_By_PkArgs = {
    id: Scalars['Int'];
};

export type Query_RootIssuesArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Query_RootIssues_AggregateArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Query_RootIssues_By_PkArgs = {
    id: Scalars['Int'];
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
    /** fetch data from the table: "board" */
    board: Array<Board>;
    /** fetch aggregated fields from the table: "board" */
    board_aggregate: Board_Aggregate;
    /** fetch data from the table: "board" using primary key columns */
    board_by_pk?: Maybe<Board>;
    /** An array relationship */
    issues: Array<Issues>;
    /** An aggregate relationship */
    issues_aggregate: Issues_Aggregate;
    /** fetch data from the table: "issues" using primary key columns */
    issues_by_pk?: Maybe<Issues>;
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

export type Subscription_RootBoardArgs = {
    distinct_on?: Maybe<Array<Board_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Board_Order_By>>;
    where?: Maybe<Board_Bool_Exp>;
};

export type Subscription_RootBoard_AggregateArgs = {
    distinct_on?: Maybe<Array<Board_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Board_Order_By>>;
    where?: Maybe<Board_Bool_Exp>;
};

export type Subscription_RootBoard_By_PkArgs = {
    id: Scalars['Int'];
};

export type Subscription_RootIssuesArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_AggregateArgs = {
    distinct_on?: Maybe<Array<Issues_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Issues_Order_By>>;
    where?: Maybe<Issues_Bool_Exp>;
};

export type Subscription_RootIssues_By_PkArgs = {
    id: Scalars['Int'];
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
    /** An array relationship */
    boards: Array<Board>;
    /** An aggregate relationship */
    boards_aggregate: Board_Aggregate;
    createdAt: Scalars['timestamptz'];
    email: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
    password: Scalars['String'];
    updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "users" */
export type UsersBoardsArgs = {
    distinct_on?: Maybe<Array<Board_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Board_Order_By>>;
    where?: Maybe<Board_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBoards_AggregateArgs = {
    distinct_on?: Maybe<Array<Board_Select_Column>>;
    limit?: Maybe<Scalars['Int']>;
    offset?: Maybe<Scalars['Int']>;
    order_by?: Maybe<Array<Board_Order_By>>;
    where?: Maybe<Board_Bool_Exp>;
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
    boards?: Maybe<Board_Bool_Exp>;
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
    boards?: Maybe<Board_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
    data: Users_Insert_Input;
    /** on conflict condition */
    on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
    constraint: Users_Constraint;
    update_columns?: Array<Users_Update_Column>;
    where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
    boards_aggregate?: Maybe<Board_Aggregate_Order_By>;
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

export type BoardFragment = { __typename?: 'board' } & {
    issues: Array<{ __typename?: 'issues' } & IssueFragment>;
} & BoardFieldsFragment;

export type BoardFieldsFragment = { __typename?: 'board' } & Pick<Board, 'id' | 'name' | 'userId'>;

export type IssueFragment = { __typename?: 'issues' } & IssueFieldsFragment;

export type IssueFieldsFragment = { __typename?: 'issues' } & Pick<
    Issues,
    'id' | 'name' | 'description'
>;

export type UserFragment = { __typename?: 'users' } & UserFieldsFragment;

export type AuthUserFragment = { __typename?: 'users' } & UserFieldsFragment;

export type UserFieldsFragment = { __typename?: 'users' } & Pick<Users, 'id' | 'name' | 'email'>;

export type InsertBoardMutationVariables = Exact<{
    name: Scalars['String'];
    userId: Scalars['Int'];
}>;

export type InsertBoardMutation = { __typename?: 'mutation_root' } & {
    insertBoardOne?: Maybe<{ __typename?: 'board' } & Pick<Board, 'id'>>;
};

export type DeleteBoardByIdMutationVariables = Exact<{
    id: Scalars['Int'];
}>;

export type DeleteBoardByIdMutation = { __typename?: 'mutation_root' } & {
    delete_board_by_pk?: Maybe<{ __typename?: 'board' } & Pick<Board, 'id'>>;
};

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

export type RegisterMutationVariables = Exact<{
    data: RegisterInput;
}>;

export type RegisterMutation = { __typename?: 'mutation_root' } & {
    register?: Maybe<
        { __typename?: 'RegisterOutput' } & Pick<
            RegisterOutput,
            'token' | 'statusCode' | 'statusIsOk' | 'statusMessage' | 'statusPath'
        >
    >;
};

export type AuthUserQueryVariables = Exact<{ [key: string]: never }>;

export type AuthUserQuery = { __typename?: 'query_root' } & {
    authUser: Array<{ __typename?: 'users' } & UserFragment>;
};

export type GetBoardIssuesSubscriptionVariables = Exact<{ [key: string]: never }>;

export type GetBoardIssuesSubscription = { __typename?: 'subscription_root' } & {
    board: Array<{ __typename?: 'board' } & BoardFragment>;
};

export const BoardFieldsFragmentDoc = gql`
    fragment BoardFields on board {
        id
        name
        userId
    }
`;
export const IssueFieldsFragmentDoc = gql`
    fragment IssueFields on issues {
        id
        name
        description
    }
`;
export const IssueFragmentDoc = gql`
    fragment Issue on issues {
        ...IssueFields
    }
    ${IssueFieldsFragmentDoc}
`;
export const BoardFragmentDoc = gql`
    fragment Board on board {
        ...BoardFields
        issues {
            ...Issue
        }
    }
    ${BoardFieldsFragmentDoc}
    ${IssueFragmentDoc}
`;
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
export const AuthUserFragmentDoc = gql`
    fragment AuthUser on users {
        ...UserFields
    }
    ${UserFieldsFragmentDoc}
`;
export const InsertBoardDocument = gql`
    mutation InsertBoard($name: String!, $userId: Int!) {
        insertBoardOne: insert_board_one(object: { name: $name, userId: $userId }) {
            id
        }
    }
`;
export type InsertBoardMutationFn = Apollo.MutationFunction<
    InsertBoardMutation,
    InsertBoardMutationVariables
>;

/**
 * __useInsertBoardMutation__
 *
 * To run a mutation, you first call `useInsertBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertBoardMutation, { data, loading, error }] = useInsertBoardMutation({
 *   variables: {
 *      name: // value for 'name'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useInsertBoardMutation(
    baseOptions?: Apollo.MutationHookOptions<InsertBoardMutation, InsertBoardMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<InsertBoardMutation, InsertBoardMutationVariables>(
        InsertBoardDocument,
        options
    );
}
export type InsertBoardMutationHookResult = ReturnType<typeof useInsertBoardMutation>;
export type InsertBoardMutationResult = Apollo.MutationResult<InsertBoardMutation>;
export type InsertBoardMutationOptions = Apollo.BaseMutationOptions<
    InsertBoardMutation,
    InsertBoardMutationVariables
>;
export const DeleteBoardByIdDocument = gql`
    mutation DeleteBoardById($id: Int!) {
        delete_board_by_pk(id: $id) {
            id
        }
    }
`;
export type DeleteBoardByIdMutationFn = Apollo.MutationFunction<
    DeleteBoardByIdMutation,
    DeleteBoardByIdMutationVariables
>;

/**
 * __useDeleteBoardByIdMutation__
 *
 * To run a mutation, you first call `useDeleteBoardByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardByIdMutation, { data, loading, error }] = useDeleteBoardByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBoardByIdMutation(
    baseOptions?: Apollo.MutationHookOptions<
        DeleteBoardByIdMutation,
        DeleteBoardByIdMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<DeleteBoardByIdMutation, DeleteBoardByIdMutationVariables>(
        DeleteBoardByIdDocument,
        options
    );
}
export type DeleteBoardByIdMutationHookResult = ReturnType<typeof useDeleteBoardByIdMutation>;
export type DeleteBoardByIdMutationResult = Apollo.MutationResult<DeleteBoardByIdMutation>;
export type DeleteBoardByIdMutationOptions = Apollo.BaseMutationOptions<
    DeleteBoardByIdMutation,
    DeleteBoardByIdMutationVariables
>;
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
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
        register(data: $data) {
            token
            statusCode
            statusIsOk
            statusMessage
            statusPath
        }
    }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
    RegisterMutation,
    RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(
    baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument,
        options
    );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
    RegisterMutation,
    RegisterMutationVariables
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
export const GetBoardIssuesDocument = gql`
    subscription GetBoardIssues {
        board: board {
            ...Board
        }
    }
    ${BoardFragmentDoc}
`;

/**
 * __useGetBoardIssuesSubscription__
 *
 * To run a query within a React component, call `useGetBoardIssuesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardIssuesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardIssuesSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetBoardIssuesSubscription(
    baseOptions?: Apollo.SubscriptionHookOptions<
        GetBoardIssuesSubscription,
        GetBoardIssuesSubscriptionVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSubscription<GetBoardIssuesSubscription, GetBoardIssuesSubscriptionVariables>(
        GetBoardIssuesDocument,
        options
    );
}
export type GetBoardIssuesSubscriptionHookResult = ReturnType<typeof useGetBoardIssuesSubscription>;
export type GetBoardIssuesSubscriptionResult =
    Apollo.SubscriptionResult<GetBoardIssuesSubscription>;
