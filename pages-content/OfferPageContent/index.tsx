import { SectionHead } from '@components/specific/SectionHead';

import styles from './OfferPageContent.module.scss';
import { BreadCrumbs } from '@components/pure/BreadCrumbs';
import { OfferList } from './components/OfferList';

export const OfferPageContent = () => {
  return (
    <section className={styles.root}>
      <SectionHead heading='Публичная оферта' />
      <div className={styles.content}>
        <BreadCrumbs lastCrumb='Публичная оферта' />
        <OfferList />
      </div>
    </section>
  );
};
