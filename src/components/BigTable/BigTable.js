import { connect } from 'react-redux';
import styled from 'styled-components';


const mapStateToProps = state => ({
  list: state.list
});

const Tab = styled.div`
  display: flex;
  border: dashed;
`;



const Cell = styled.div`
  color: blue;
  border: dotted;
  width: ${props => props.$width};
`;

const columns = [{name: `заголовок1`, width: '300px'}, {name: `заголовок2`, width: '400px'}];


const BigTable = () => {

  return (<Tab>
      {columns.map(item => <Cell $width={item.width}>{item.name}</Cell>)}
    </Tab>

  );


}

export default connect(mapStateToProps)(BigTable);