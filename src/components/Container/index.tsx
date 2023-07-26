import React from 'react';

import style from './Container.module.scss';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className={style['container']}>{children}</div>;
}

export default Container;
