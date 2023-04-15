import { FC, ChangeEvent } from 'react';

import styles from './Checkbox.module.scss';

type Props = {
  label: string;
  total: number | undefined;
  activeValues: string[];
  toggleHandler: (labelValue: boolean, label: Props['label']) => void;
};

export const Checkbox: FC<Props> = ({
  label,
  total,
  toggleHandler,
  activeValues,
}) => {
  // Vars
  const isChecked = activeValues.includes(label);

  // Handlers
  const inputToggleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    toggleHandler(event.target.checked, label);
  };

  return (
    <div className={styles.root}>
      <input
        id={label}
        className={styles.checkbox}
        type='checkbox'
        checked={isChecked}
        onChange={inputToggleHandler}
      />
      <label id='hint' htmlFor={label} className={styles.checkbox__label}>
        {label}
        <span className={styles.checkbox__total}>({total})</span>
      </label>
    </div>
  );
};
