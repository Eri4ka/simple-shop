import Image from 'next/image';
import cl from 'classnames';

import { SectionHead } from '@components/specific/SectionHead';
import { BreadCrumbs } from '@components/pure/BreadCrumbs';
import IgIc from '@images/contacts/inst.png';
import WaIc from '@images/contacts/wa.png';

import { ContactsMap } from './components/ContactsMap';
import styles from './ContactsPageContent.module.scss';

export const ContactsPageContent = () => {
  return (
    <section className={styles.root}>
      <SectionHead heading='Контакты' />
      <div className={styles.wrapper}>
        <BreadCrumbs lastCrumb='Контакты' />
        <div className={styles.content}>
          <address>
            <h1 className={styles.content__heading}>Контакты</h1>
            <div className={styles.content__block}>
              <p className={styles.content__type}>Номер телефона:</p>
              <a href='tel:+7 707 602 5959'>
                <span className={styles.content__value}>+7 707 602 5959</span>
              </a>
            </div>
            <div className={styles.content__block}>
              <p className={styles.content__type}>Адрес</p>
              <span className={styles.content__value}>
                г. Алматы, улица Макатаева 117
              </span>
            </div>
            <div className={styles.social}>
              <div className={styles.social__block}>
                <div className={styles.social__type}>
                  <Image src={WaIc} height={36} width={36} alt='whatsapp' />
                  <span className={styles.social__text}>WhatsApp</span>
                </div>
                <div
                  className={cl(
                    styles.social__trigger,
                    styles.social__trigger_green
                  )}
                >
                  <a
                    href='https://whatsapp/77076025959'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Написать
                  </a>
                </div>
              </div>
              <div className={styles.social__block}>
                <div className={styles.social__type}>
                  <Image src={IgIc} height={36} width={36} alt='instagram' />
                  <span className={styles.social__text}>Instagram</span>
                </div>
                <div
                  className={cl(
                    styles.social__trigger,
                    styles.social__trigger_blue
                  )}
                >
                  <a
                    href='https://insragram.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Подписаться
                  </a>
                </div>
              </div>
            </div>
          </address>
          <ContactsMap />
        </div>
      </div>
    </section>
  );
};
