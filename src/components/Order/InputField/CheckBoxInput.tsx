import styled from '@emotion/styled'
import { ICheckBoxInputProps } from 'src/types/order/types'

const CheckBoxInput = ({label, smallBox}: ICheckBoxInputProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Input type='checkbox'/>
      <Styled.Label smallBox={smallBox}>{label}</Styled.Label>
    </Styled.Wrapper>
  )
}

export default CheckBoxInput

const Styled = {
  Wrapper: styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
  `,
  Input: styled.input`
  `,
  Label: styled.label<{smallBox: boolean}>`
    font-size: ${({smallBox}) => smallBox ? '14px' : '16px'};
  `,
}