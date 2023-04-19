import { YMaps, Map } from '@pbe/react-yandex-maps';

import styles from './ContactsMap.module.scss';

export const ContactsMap = () => {
  return (
    <YMaps>
      <Map
        className={styles.map}
        defaultState={{
          center: [43.263173, 76.928092],
          zoom: 18,
          controls: ['zoomControl', 'fullscreenControl'],
        }}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      />
    </YMaps>
  );
};
