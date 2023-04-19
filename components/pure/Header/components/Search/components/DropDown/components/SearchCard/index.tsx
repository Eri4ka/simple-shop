import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ProductType } from '@mytypes/product';
import { getSalaryDiscount } from '@shared/helpers';

import styles from './SearchProduct.module.scss';

type Props = {
  data: ProductType;
};

export const SearchProduct: FC<Props> = ({ data }) => {
  // Vars
  const { id, category, title, price, discountPercentage, images } = data;
  const discount = getSalaryDiscount(price, discountPercentage);
  const finalPrice = discount ? discount : price;

  return (
    <Link href={`/${category}/${id}`}>
      <li className={styles.root}>
        <div className={styles.meta}>
          <Image src={images[0]} width={40} height={40} alt={title} />
          <span className={styles.meta__title}>{title}</span>
        </div>
        <span className={styles.price}>{finalPrice} $</span>
      </li>
    </Link>
  );
};
