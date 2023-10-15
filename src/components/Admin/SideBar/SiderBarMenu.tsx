import Link from 'next/link';
import Icon from './Icon';
import { sideMenuProps } from '../../../types/admin/types';
import SubMenu from './SubMenu';
import { SideBarMenuStyled as Styled } from './styles';

const SiderBarMenu = (props: sideMenuProps) => {
  const { href, currentPage, imageName, text, pathName } = props;
  const isCurrentPage: boolean = currentPage === imageName;

  return (
    <Link href={href}>
      <Styled.WholeWrapper>
        <Styled.Wrapper isClicked={isCurrentPage}>
          <Styled.InnerWrapper>
            <Icon imageName={imageName} isCurrentPage={isCurrentPage} />
            <Styled.MenuText>{text}</Styled.MenuText>
          </Styled.InnerWrapper>
          <>{isCurrentPage ? <Styled.UpArrow /> : <Styled.DownArrow />}</>
        </Styled.Wrapper>
        <SubMenu menuName={imageName} currentPage={currentPage} pathName={pathName}/>
      </Styled.WholeWrapper>
    </Link>
  );
};

export default SiderBarMenu;
