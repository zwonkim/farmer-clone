import Link from 'next/link';
import Styled from './styles';
import Plant from './Plant';

//나중에 Common에 넣어주시는 데이터에 따라 코드 가져오거나 새로 하거나 해야할 것 같음
const plantsData = [
  { id: 1, name: '다육이', router:'fleshy'},
  { id: 2, name: '선인장', router: 'cactus' },
  { id: 3, name: '호접란', router:'phalaenopsis'},
  { id: 4, name: '스킨답서스', router:'scindapsus'},
  { id: 5, name: '야자목', router:'palm'},
  { id: 6, name: '키움용품', router:'petProduction'},
];

const Category = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title >카테고리</Styled.Title>
      <Styled.Plants>
        {plantsData.map(plant => (
          <Link href={`/shop/${plant.router}`}  key={plant.id}>
            <Plant name={plant.name} src={plant.router} />
          </Link>
        ))}
      </Styled.Plants>
    </Styled.Wrapper>
  );
};

export default Category;