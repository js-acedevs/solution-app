// react
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

// export types
export interface CustomLinkProps
    extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    className?: string;
}
