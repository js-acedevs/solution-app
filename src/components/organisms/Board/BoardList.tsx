import { ReactElement } from 'react';
import { Stack } from '@mui/material';
import { useGetBoardIssuesSubscription } from '@graphql/gen/graphql';
import { BoardItem } from './BoardItem';

export const BoardList = (): ReactElement => {
    const { data: { board } = {} } = useGetBoardIssuesSubscription();

    return (
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
            {board?.map((item) => (
                <BoardItem key={item.id} board={item} />
            ))}
        </Stack>
    );
};
