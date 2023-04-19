import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

import SearchIc from '@icons/header/search/search.svg';
import { UrlService } from '@shared/services/UrlService';
import { request } from '@shared/api';
import { ProductType, ProductsResType } from '@mytypes/product';

import { DropDown } from './components/DropDown';
import styles from './Search.module.scss';

export const Search = () => {
  // Vars
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchData, setSearchData] = useState<ProductType[] | []>([]);

  const inputRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Handlers
  const setSearchValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const getSearchDataHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchData = async () => {
      const data: ProductsResType = await request(
        UrlService.getSearchProducts({ value: searchValue, limit: '6' })
      );
      setIsOpenDropDown(true);
      setSearchData(data.products);
    };
    fetchData();
  };

  // Effects
  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent) => {
      if (!inputRef.current?.contains(e.target as HTMLDivElement)) {
        setIsOpenDropDown(false);
      }
    };

    document.addEventListener('click', clickOutsideHandler);
    return () => document.removeEventListener('click', clickOutsideHandler);
  }, []);

  useEffect(() => {
    setIsOpenDropDown(false);
  }, [router.pathname]);

  return (
    <div ref={inputRef} className={styles.root}>
      <form className={styles.form} onSubmit={getSearchDataHandler}>
        <input
          className={styles.form__field}
          type='text'
          placeholder='Что вы ищите?'
          onChange={setSearchValueHandler}
        />
        <button className={styles.form__button}>
          <SearchIc />
        </button>
      </form>
      {isOpenDropDown && <DropDown data={searchData} />}
    </div>
  );
};
