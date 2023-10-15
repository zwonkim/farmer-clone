import Link from 'next/link';
import { useRouter } from 'next/router';
import Styled from './styles';
import SiderBarMenu from './SiderBarMenu';
import { sideBarMenuItems, MenuRoute } from 'src/utils/admin/sideBarMenu';


const SideBar = () => {
  const router = useRouter();
  let category: string;

  let menuName = MenuRoute(router.pathname);
  if (menuName == undefined) {
    category = 'home';
  } else {
    category = menuName;
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.Header>
          <Link href="/">
            <Styled.Logo />
          </Link>
        </Styled.Header>
        {sideBarMenuItems.map((item, index) => (
          <SiderBarMenu
            key={index}
            href={item.href}
            currentPage={category}
            imageName={item.imageName}
            text={item.menuName}
            pathName = {router.pathname}
          />
        ))}
      </Styled.Wrapper>
    </>
  );
};

export default SideBar;
