import UserIc from '@icons/header/user/user.svg';

import { User } from '../User';

export const UserAccount = () => {
  return <User Icon={UserIc} heading='Войти' text='Нет аккаунта?' />;
};
