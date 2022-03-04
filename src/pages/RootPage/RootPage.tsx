// react
import { ReactElement } from 'react';

// mui
import { Stack } from '@mui/material';

// organisms
import { BoardList } from '@organisms';

// templates
import { AppLayout } from '@templates';

const RootPage = (): ReactElement => (
    <AppLayout title="Root">
        <Stack direction="row" justifyContent="flex-start" alignItems="flex-start">
            <BoardList />
        </Stack>
    </AppLayout>
);

export default RootPage;
