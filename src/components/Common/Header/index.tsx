import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Styled from './styles';

import Icon from '../Icon';
import Menu from '../Menu';
import EventBanner from './EventBanner';

import { useQueryClient } from '@tanstack/react-query';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { clearUser } from 'store/reducers/userSlice';
import { setToken, clearToken } from 'store/reducers/tokenSlice';

import { getCookie, removeCookie } from 'src/utils/cookie';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const refreshToken = getCookie('refreshToken');
  const isLoggedIn = useSelector((state: RootState) => state.user.email);

  const dispatch = useDispatch();
  const router = useRouter();

  const queryClient = useQueryClient();

  const handleLogout = () => {
    dispatch(clearUser());
    clearToken();
    removeCookie('refreshToken');

    router.push('/');

    queryClient.clear();
  };
  return (
    <Styled.Wrapper>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <EventBanner />
      <Styled.Header>
        <Styled.Menu onClick={() => setShowMenu(true)}>
          <Icon name="menu" width={32} height={32} />
        </Styled.Menu>
        <Link href="/">
          <Styled.Logo>
            <Image
              src="/assets/images/home/headerLogo.png"
              alt="headerLogo"
              width={150}
              height={33}
            />
          </Styled.Logo>
        </Link>
        <Styled.Utils>
          {isLoggedIn && refreshToken && (
            <Link href="/">
              <Icon
                onClick={handleLogout}
                name="logout"
                width={36}
                height={32}
              />
            </Link>
          )}
          <li>
            <Link href={isLoggedIn && refreshToken ? '/mypage' : '/login'}>
              <Icon name="myPage" width={32} height={32} />
            </Link>
          </li>
          <li>
            <Link href="/search">
              <Icon name="search" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href={isLoggedIn && refreshToken ? '/mypage/cart' : '/login'}>
              <Icon name="cart" width={33} height={30} />
            </Link>
          </li>
        </Styled.Utils>
      </Styled.Header>
    </Styled.Wrapper>
  );
};

export default Header;
