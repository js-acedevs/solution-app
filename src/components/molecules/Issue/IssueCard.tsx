import { ReactElement } from 'react';
import { CardContent, Paper, Typography } from '@mui/material';

// types
import { IssueCardProps } from './IssueCard.types';

export const IssueCard = ({ issue }: IssueCardProps): ReactElement => (
    <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', flexFlow: 'column' }}>
        <Paper
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexFlow: 'column',
                py: 1,
                px: 2,
                my: 1,
            }}
        >
            <Typography variant="h6" gutterBottom>
                {issue?.name}
            </Typography>
            <Typography variant="body2">{issue?.description}</Typography>
        </Paper>
    </CardContent>
);
