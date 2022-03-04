import { DialogProps } from '@mui/material';

export type BoardFormInputs = {
    name: string;
};
export interface AddedBoardProps extends DialogProps {
    handleClose: () => void;
}
