import { IssueFragment } from '@graphql/gen/graphql';
import { Nullable } from '@interfaces/types';

export interface IssueCardProps {
    issue: IssueFragment | Nullable<IssueFragment>;
}
