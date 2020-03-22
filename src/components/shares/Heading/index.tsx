import React from 'react';

import { SectionLevel } from '@domains/valueObjects/SectionLevel';

type Props = {
  level: SectionLevel;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = React.memo(({ level, children, ...rest }: Props) =>
  React.createElement(`h${level}`, rest, children),
);
