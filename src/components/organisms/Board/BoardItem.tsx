import { ReactElement } from 'react';

// mui
import AddIcon from '@mui/icons-material/Add';
import { Card, CardHeader, CardActions, Button } from '@mui/material';

// hooks
import { useToggle } from '@hooks/useToggle';

import { IssueCard } from '@molecules';
import { useDeleteBoardByIdMutation } from '@graphql/gen/graphql';
import { AddedBoard } from './AddedBoard/AddedBoard';

// types
import { BoardItemProps } from './Board.types';

export const BoardItem = ({ board }: BoardItemProps): ReactElement => {
    const [modalOpen, handleModalToggle] = useToggle();

    // hooks
    const [deleteBoardByIdMutation] = useDeleteBoardByIdMutation();

    const handleDelete = () => deleteBoardByIdMutation({ variables: { id: board?.id } });

    return (
        <Card
            elevation={3}
            sx={{
                p: 1,
                m: 2,
                width: 380,
                display: 'flex',
                flexFlow: 'column',
                justifyContent: 'flex-start',
                backgroundColor: 'whitesmoke',
            }}
        >
            <CardHeader
                action={
                    <Button aria-label="settings" onClick={handleDelete}>
                        Delete
                    </Button>
                }
                title={board.name}
            />
            {board?.issues?.map((issue) => (
                <IssueCard key={issue.id} issue={issue} />
            ))}
            <CardActions>
                <Button onClick={handleModalToggle} size="small" startIcon={<AddIcon />}>
                    Add a issue
                </Button>

                <AddedBoard open={modalOpen} handleClose={handleModalToggle} />
            </CardActions>
        </Card>
    );
};
