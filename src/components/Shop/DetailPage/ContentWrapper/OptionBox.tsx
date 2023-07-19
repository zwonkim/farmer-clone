import styled from '@emotion/styled';
import theme from '@styles/theme';
import heart from '@assets/images/shop/optionBoxHeart.svg';
import { useState } from 'react';

const OptionBox = () => {
  const [isShowOptions, setShowOptions] = useState(false);
  const [selectList, setSelectList] = useState([]);
  const tempList = [
    { id: 0, option: '01. 피쉬본 단품', price: '0' },
    { id: 1, option: '02. 피쉬본 단품+심플화분', price: '1,500' },
    { id: 2, option: '03. 피쉬본 단품+심플화분+영양제', price: '3,000' },
    { id: 3, option: '04. 피쉬본 선물 세트(화분+영양제+포장)', price: '5,000' },
  ];
  return (
    <Styled.Wrapper>
      <Styled.Upper>
        <Styled.SelectBox onClick={() => setShowOptions(prev => !prev)}>
          <Styled.Label>상품을 선택하세요.</Styled.Label>
          <Styled.SelectOptions show={isShowOptions}>
            {tempList.map(item => (
              <Styled.Option
                key={item.id}
                onClick={() =>
                  setSelectList([
                    ...selectList.filter(i => i.id != item.id),
                    { id: item.id, option: item.option, price: item.price },
                  ])
                }
              >
                <div>
                  <ColorOption>{item.option}</ColorOption>
                  <div>+{item.price}원</div>
                </div>
              </Styled.Option>
            ))}
          </Styled.SelectOptions>
        </Styled.SelectBox>
        {selectList.map(item => (
          <Styled.SelectedOption key={item.id}>
            <div>{item.option}</div>
            <div>+{item.price}원</div>
          </Styled.SelectedOption>
        ))}
      </Styled.Upper>
      <Styled.Lower>
        <Styled.TotalPrice>
          <div>주문금액</div>
          <div>0원</div>
        </Styled.TotalPrice>
        <Styled.Buttons>
          <button>장바구니</button>
          <button>바로구매</button>
        </Styled.Buttons>
      </Styled.Lower>
    </Styled.Wrapper>
  );
};

const ColorOption = styled.div``;
const Styled = {
  Wrapper: styled.div`
    width: 302px;
    height: 720px;
    margin-left: 69px;
    cursor: pointer;
  `,
  Upper: styled.div`
    display: flex;
    flex-direction: column;
    height: 548px;
  `,
  SelectBox: styled.div`
    position: relative;
    height: 66px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.black};
    color: #606060;
    font-size: 16px;
    font-weight: 500;
    padding-left: 15px;
    display: flex;
    align-items: center;
    &::before {
      content: '⌵';
      position: absolute;
      top: 15px;
      right: 16px;
      color: #747474;
      font-size: 20px;
      font-weight: 600;
    }
  `,
  Label: styled.label`
    margin-left: 4px;
    text-align: center;
    color: #59b941;
    font-size: 16px;
    font-weight: 500;
    
  `,
  SelectOptions: styled.ul<{ show: boolean }>`
    position: absolute;
    list-style: none;
    top: 74px;
    left: 0;
    width: 100%;
    overflow: hidden;
    height: fit-content;
    max-height: ${props => (props.show ? 'none' : '0')};
    border-radius: 5px;
    border: ${props => (props.show ? '1px solid #000' : '')};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    & > li:last-child > div {
      border: none;
    }
  `,
  Option: styled.li`
    height: fit-content;
    font-size: 15px;
    font-weight: 500;
    line-height: 19px;
    padding: 6px 8px;
    transition: background-color 0.2s ease-in;
    display: flex;
    justify-content: center;
    padding: 15px 14px 0 14px;
    & > div {
      height: fit-content;
      width: 271px;
      border-bottom: 1px solid #a6a6a6;
      display: flex;
      flex-direction: column;
    }
    & > div > div:first-child {
      margin-bottom: 5px;
    }
    & > div > div:last-child {
      color: #727272;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 15px;
    }
    &:hover ${ColorOption} {
      color: #33b822;
    }
  `,
  SelectedOption: styled.div`
    height: 66px;
    border-radius: 5px;
    background-color: #ceeec9;
    color: #606060;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 8px;
  `,
  Lower: styled.div`
    height: 100px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  TotalPrice: styled.div`
    & > div:first-child {
      font-size: 14px;
    }
    & > div:last-child {
      font-size: 20px;
    }
  `,
  Buttons: styled.div`
    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-radius: 5px;
      width: 145px;
      height: 53px;
    }
    & > button:first-child {
      color: ${theme.colors.green1};
      border: 1px solid ${theme.colors.green1};
      
    }
    & > button:last-child {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green1};
    }
  `,
  HeartIcon: styled(heart)``,
};

export default OptionBox;
