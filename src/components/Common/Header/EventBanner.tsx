import styled from '@emotion/styled';
import theme from '@styles/theme';

import Icon from '../Icon';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setIsBannerClosed } from 'store/reducers/bannerSlice';

import Link from 'next/link';

const EventBanner = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Link href="/shop/event/1">
        <Styled.Wrapper>
          <Styled.Event>
            첫 구매라면 누구나 최대 2만원 할인 받기{' '}
            <Styled.CloseBtn onClick={() => dispatch(setIsBannerClosed())}>
              <Icon name="closeBtn" width={26} height={26} />
            </Styled.CloseBtn>
          </Styled.Event>
        </Styled.Wrapper>
      </Link>
    </>
  );
};

export default EventBanner;

const Styled = {
  Wrapper: styled.div`
    width: 100%;
    background-color: ${theme.colors.green1};
  `,
  Event: styled.div`
    position: relative;
    height: 50px;
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  CloseBtn: styled.div`
    position: absolute;
    right: 10px;
    cursor: pointer;
  `,
};
