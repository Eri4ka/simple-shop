import cl from 'classnames';

import styles from './OfferList.module.scss';

export const OfferList = () => {
  return (
    <ol className={styles.list}>
      <li className={cl(styles.list__item, styles.list__head)}>
        Термины и определения:
        <ol className={styles.list}>
          <li className={styles.list__item}>
            Публичная Оферта – настоящее предложение использования онлайн
            сервиса, публикуемое Chocotravel на Сайте, обращенное Пользователям;
          </li>
          <li className={styles.list__item}>
            Сайт – https://www.chocotravel.com
          </li>
          <li className={styles.list__item}>
            Лоукостеры, авиадискаунтеры — низкобюджетные авиаперевозчики,
            стоимость авиабилетов на которые может быть в несколько раз ниже
            билетов традиционных авиалиний. Как правило, подобная стоимость
            достигается отсутствием бесплатного питания на борту, отсутствием
            бесплатного багажа, а также рядом других ограничений, которые
            публикуются на сайте авиаперевозчика. Подобные авиаперевозчики
            выделены на Сайте Агента в отдельный раздел, либо в случае
            размещения в общем разделе поиска авиабилетов имеют специальную
            пометку «лоукостер»;
          </li>
          <li className={styles.list__item}>
            Комбинированный авиабилет - это билет на поездку с использованием
            двух и более авиакомпаний;
          </li>
        </ol>
      </li>
      <li className={cl(styles.list__item, styles.list__head)}>
        ОСНОВНЫЕ ПОЛОЖЕНИЯ:
        <ol className={styles.list}>
          <li className={styles.list__item}>
            Текст Договора является публичной офертой (в соответствии с пунктом
            5 статьи 395 Гражданского кодекса Республики Казахстан публичная
            оферта – это содержащее все существенные условия договора
            предложение, из которого усматривается воля лица, делающего
            предложение, заключить договор на указанных в предложении условиях с
            любым, кто отзовется на это предложение). Акцепт оферты –
            использование онлайн сервиса (в соответствии со статьёй 396
            Гражданского кодекса Республики Казахстан). Акцепт – это ответ лица,
            которому адресована оферта, о ее принятии. Акцепт должен быть полным
            и безоговорочным. Совершая действия по акцепту настоящего публичного
            договора – оферты, Пользователь подтверждает свою правоспособность и
            дееспособность, а также свое законное право вступать в договорные
            отношения с Chocotravel. Полным и безоговорочным согласием заключить
            Договор (далее – Акцептом) является выраженное согласие с его
            условиями путем использования онлайн сервиса Chocotravel и/или
            принятие условий предоставления сервиса;
          </li>
          <li className={styles.list__item}>
            Акцепт Договора означает, что Пользователь согласен со всеми
            положениями настоящего предложения, и равносилен заключению Договора
            и всех приложений к нему. В связи с вышеизложенным, внимательно
            прочитайте текст Договора. Если Вы не согласны с каким-либо пунктом
            Договора, Chocotravel предлагает Вам отказаться от Акцепта оферты.
          </li>
        </ol>
      </li>
      <li className={cl(styles.list__item, styles.list__head)}>
        ИСПОЛЬЗОВАНИЕ ОНЛАЙН СЕРВИСА:
        <ol className={styles.list}>
          <li className={styles.list__item}>
            Ознакомившись с Условиями размещенными на Сайте, текстом Договора,
            Пользователь оплачивает сумму способами, указанными на Сайте. Факт
            оплаты означает согласие со всеми данными, в том числе маршрутными
            данными и данными пассажиров.
          </li>
          <li className={styles.list__item}>
            Срок оплаты указывается на Сайте при оформлении, а также в
            направляемом Chocotravel сервисном письме. В случае просрочки
            указанного срока оплаты Пользователем либо поступления оплаты после
            истечения указанного срока, оформленная Пользователем услуга
            аннулируется. Срок оплаты услуги может быть изменен по независящим
            от Chocotravel причинам без предварительного уведомления
            Пользователя. Chocotravel не берет на себя обязательство по
            сохранению той же стоимости услуги.
          </li>
          <li className={styles.list__item}>
            Оплата за возврат или обмен, взимаемые Chocotravel по требованию
            Поставщика услуг, зависят от условий применения тарифа, правил и
            ограничений, установленных Поставщиками услуг.
          </li>
          <li className={styles.list__item}>
            Chocotravel имеет право взимать с Пользователя комиссионное
            вознаграждение за оказание услуг по изменению пассажирских данных
            (дате рождения, номере и сроке действия документа и.т.д.) в
            электронном билете, возврату и обмену бронирования электронного
            билета. Размер комиссионного вознаграждения за изменение
            пассажирских данных составляет 500 тенге за одного пассажира, за
            возврат и/или обмен — от 2500 тенге за одного пассажира и 1000 тенге
            - за каждого следующего пассажира в бронировании. Размер
            комиссионного вознаграждения может различаться в зависимости от
            условий предоставляемых Chocotravel Поставщиком услуг.
            <ol className={styles.list}>
              <li className={styles.list__item}>
                Стоимость дополнительных услуг, в частности услуги подписки на
                SMS-уведомления об отменах и задержках рейса, при возврате
                авиабилета не возвращается.
              </li>
              <li className={styles.list__item}>
                При отмене авиабилетов возврат денежных средств производится
                строго в соответствии с Правилами применения тарифов. Комиссия
                Агента за выписку авиабилета не возвращаются.
              </li>
            </ol>
          </li>
          <li className={styles.list__item}>
            Пользователь имеет возможность установить максимальное время брони,
            которое определяется перевозчиком. Пользователь подтверждает свое
            согласие с доплатой разницы в случае изменения стоимости заказа в
            большую сторону, а также подтверждает свое согласие с тем, что при
            изменении стоимости заказа в меньшую сторону разница не
            возвращается.
          </li>
          <li className={styles.list__item}>
            Совершая действия по подключению сервиса привязки банковской карты,
            Пользователь подтверждает свое согласие на хранение информации
            третьими лицами, нести самостоятельную полную ответственность за
            использование сервиса привязки банковской карты, все риски,
            связанные с возможным использованием третьими лицами логина, пароля,
            ответа на контрольный вопрос, номера карты, использование
            автоматической авторизации, в том числе при пересылки сообщения
            полученного на электронную почту и иной информации.
          </li>
          <li className={styles.list__item}>
            Chocotravel оставляет за собой право отказать Пользователю в
            предоставлении услуг или дополнительно запросить документы.
          </li>
          <li className={styles.list__item}>
            При использовании онлайн сервиса может быть представлено содержание,
            созданное и/или загруженное третьими лицами, в том числе
            сформированное на основании данных полученных от третьих лиц.
            Последние несут за него полную ответственность.
          </li>
          <li className={styles.list__item}>
            Chocotravel не дает никаких иных гарантий относительно онлайн
            сервиса, кроме тех, которые указаны в Договоре. В частности,
            Chocotravel не берет на себя никаких обязательств относительно
            содержания онлайн сервиса, их особых функциональных возможностей,
            надежности, доступности и соответствия потребностям Пользователя, а
            так же исполнения обязательств третьими лицами, бронированию билетов
            по цене, которая отображается в результате выдачи, данные могут быть
            не актуальны.
          </li>
          <li className={styles.list__item}>
            В целях обеспечения безопасности Пользователей возврат денег по
            заявлению Пользователей осуществляется только на внешние счета, с
            которых данные деньги были получены.
          </li>
        </ol>
      </li>
    </ol>
  );
};
