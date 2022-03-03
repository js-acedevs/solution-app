// react
import { ReactElement } from 'react';

// atoms
import { CustomLink } from '@atoms';

export const FollowLink = (): ReactElement => (
    <div>
        <p>
            Visit{' '}
            <CustomLink target="_blank" href="https://github.com/js-acedevs/cra-template-mui">
                cra-template-mui
            </CustomLink>{' '}
            for template details
        </p>
    </div>
);
