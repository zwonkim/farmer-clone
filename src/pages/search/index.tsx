import React, { useState } from 'react';
import Layout from '@pages/layout';
import NestedLayout from '@components/Search/Layout';
import SearchContainer from '@components/Search/SearchContainer';
import SearchUtils from '@components/Search/SearchUtils';
import SearchContent from '@components/Search/SearchContent';
import type { NextPageWithLayout } from '@pages/_app';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import {
  postSearch,
  postSortSearch,
  getRecentSearch,
} from 'src/apis/search/search';
import { sortingOptions } from 'src/utils/search/sortingOptions';
import { useQuery } from '@tanstack/react-query';
import { ProductProps } from 'src/types/common/types';

const SearchPage: NextPageWithLayout = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [searchResult, setSearchResult] = useState<ProductProps[]>();
  const [sortOption, setSortOption] = useState<string>('');

  const socialType = useSelector((state: RootState) => state.user.socialType);
  const email = useSelector((state: RootState) => state.user.email);
  const memberEmail = socialType ? `${email}[${socialType}]` : email;

  const { data: recentSearchWord } = useQuery({
    queryKey: [email, searchedWord],
    queryFn: () => getRecentSearch(),
    enabled: email ? true : false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handleSearchResult();
    }
  };

  const handleSearchResult = async () => {
    const response = await postSearch(inputValue, memberEmail);
    setSearchResult(response);
    setSearchedWord(inputValue);
    setSortOption('new');
  };

  const handleSort = async (sortSearchCond: string) => {
    const response = await postSortSearch(
      inputValue,
      sortSearchCond,
      memberEmail,
    );
    setSortOption(sortSearchCond);
    setSearchResult(response);
  };

  return (
    <>
      <SearchContainer
        handleKeyPress={handleKeyPress}
        handleChange={handleChange}
        handleClick={handleSearchResult}
        inputValue={inputValue}
        isLoggedin={memberEmail.length !== 0}
        recentSearchWord={recentSearchWord}
      />
      <SearchUtils
        sortingOptions={sortingOptions}
        sortOption={sortOption}
        handleSort={handleSort}
      />
      <SearchContent searchedWord={searchedWord} searchResult={searchResult} />
    </>
  );
};

export default SearchPage;

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
