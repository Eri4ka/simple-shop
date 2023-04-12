import { FC, useReducer } from 'react';

import styles from './BucketButton.module.scss';

type Props = {
  onAdd: (count: number) => void;
};

type CounterState = number;

type CounterAction = { type: 'INCREMENT' | 'DECREMENT'; payload?: number };

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state < 99 ? state + 1 : state;
    case 'DECREMENT':
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};

export const BucketButton: FC<Props> = ({ onAdd }) => {
  // Vars
  const [count, dispatch] = useReducer(counterReducer, 1);

  // Handlers
  const increaseCountHandler = () => dispatch({ type: 'INCREMENT' });

  const decreaseCountHandler = () => dispatch({ type: 'DECREMENT' });

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.counter}>
          <button
            className={styles.counter__tumbler}
            onClick={decreaseCountHandler}
          >
            -
          </button>
          <span className={styles.counter__digit}>{count}</span>
          <button
            className={styles.counter__tumbler}
            onClick={increaseCountHandler}
          >
            +
          </button>
        </div>
        <button className={styles.content__button} onClick={() => onAdd(count)}>
          В корзину
        </button>
      </div>
    </div>
  );
};
