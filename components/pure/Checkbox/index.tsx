import { FC } from 'react';

import styles from './Checkbox.module.scss';

type Props = {
  label: string;
  total: number | undefined;
};

export const Checkbox: FC<Props> = ({ label, total, ...props }) => {
  return (
    <div className={styles.root}>
      <input
        id={label}
        className={styles.checkbox}
        type='checkbox'
        {...props}
      />
      <label id='hint' htmlFor={label} className={styles.checkbox__label}>
        {label}
        <span className={styles.checkbox__total}>({total})</span>
      </label>
    </div>
  );
};
