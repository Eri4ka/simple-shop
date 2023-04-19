import { FC } from 'react';
import Link from 'next/link';
import cl from 'classnames';

import { TBrandsByAlphabet } from '@mytypes/brands';

import styles from './Char.module.scss';

type Props = {
  data: TBrandsByAlphabet;
};

export const Char: FC<Props> = ({ data }) => {
  const isDisabled = data.brands.length === 0;

  return (
    <li className={cl(styles.item, { [styles.item_disabled]: isDisabled })}>
      <Link href={`#${data.char}`} scroll={false}>
        {data.char}
      </Link>
    </li>
  );
};
