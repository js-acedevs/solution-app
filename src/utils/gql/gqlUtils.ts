/**
 *
 * *GraphQL data function
 * @param {T = unknown} data
 */

// gqlData return types
interface GqlDataTypes {
    variables: { data: unknown };
}

export const gqlData = <T = unknown>(data: T): GqlDataTypes => ({
    variables: { data },
});

/**
 *
 * *GraphQL object function
 * @param {T = unknown} object
 */

// gqlObject return types
interface GqlObjectTypes {
    variables: { object: unknown };
}

export const gqlObject = <T = unknown>(object: T): GqlObjectTypes => ({
    variables: { object },
});

/**
 *
 * *GraphQL set data function
 * @param {TId = number} id
 * @param {TData = unknown} data
 */

// gqlSet return types
interface GqlSetTypes {
    variables: { id: unknown; data: unknown };
}

export const gqlSet = <TData = unknown, TId = number>(id: TId, data: TData): GqlSetTypes => ({
    variables: { id, data },
});

/**
 *
 * *GraphQL variables function
 * @param {T = unknown} variables
 */

// gqlVar return types
interface GqlVarTypes {
    variables: unknown;
}

export const gqlVar = <T = unknown>(variables: T): GqlVarTypes => ({
    variables,
});
