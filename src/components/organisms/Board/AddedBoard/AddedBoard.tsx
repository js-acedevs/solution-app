import { ReactElement, useContext } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputField } from '@molecules';
import { useInsertBoardMutation } from '@graphql/gen/graphql';
import { AuthContext } from 'contexts/AuthContext';
import { BoardFormSchema } from 'validators/Board.validator';
import { AddedBoardProps, BoardFormInputs } from './AddedBoard.types';

export const AddedBoard = ({ handleClose, open }: AddedBoardProps): ReactElement => {
    // hooks
    const { user } = useContext(AuthContext);

    // hook form
    const {
        reset,
        register,
        formState: {
            errors: { name },
        },
        handleSubmit,
    } = useForm<BoardFormInputs>({
        resolver: joiResolver(BoardFormSchema),
    });

    // graphql hook
    const [insertBoard, { error }] = useInsertBoardMutation({
        onCompleted: () => handleClose(),
    });

    // handlers
    const handleCancel = () => {
        reset();
        handleClose();
    };

    const handleOnSubmit = (data: BoardFormInputs) => {
        insertBoard({ variables: { ...data, userId: user?.id || 0 } });
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add a board item</DialogTitle>
            <DialogContent>
                <form className="flex flex-col items-center justify-center px-4 py-2 x w-96">
                    {error && <Alert severity="error">Something went wrong! Try again!</Alert>}
                    <InputField {...register('name')} label="Name" fieldError={name} />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button type="submit" onClick={handleSubmit(handleOnSubmit)}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    );
};
