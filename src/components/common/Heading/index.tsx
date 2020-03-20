import React, { Component } from 'react';

import { SectionLevel } from '~/models/valueObjects/SectionLevel';

type Props = {
  level: SectionLevel;
} & React.HTMLAttributes<HTMLHeadingElement>;

export const Heading = ({ level, ...rest }: Props) => <Component as={`h${level}`} {...rest} />;
