// react
import { FC, ReactElement } from 'react';

// types
import { CustomLinkProps } from './CustomLink.types';

export const CustomLink: FC<CustomLinkProps> = ({ className, children, ...rest }): ReactElement => (
    <a {...rest}>{children}</a>
);
