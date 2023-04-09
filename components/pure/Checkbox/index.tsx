import { FC } from 'react';

import styles from './Checkbox.module.scss';

type Props = {
  label: string;
  total: number | undefined;
  activeValues: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};

export const Checkbox: FC<Props> = ({
  label,
  total,
  onChange,
  activeValues,
  ...props
}) => {
  // Vars
  const isChecked = activeValues.includes(label);

  return (
    <div className={styles.root}>
      <input
        id={label}
        className={styles.checkbox}
        type='checkbox'
        checked={isChecked}
        onChange={(e) => onChange(e, label)}
        {...props}
      />
      <label id='hint' htmlFor={label} className={styles.checkbox__label}>
        {label}
        <span className={styles.checkbox__total}>({total})</span>
      </label>
    </div>
  );
};
