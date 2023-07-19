import { connect, Provider } from 'react-redux';
import styled from 'styled-components';

const goalKm = 100; //temporary value

const mapStateToProps = state => ({
  list: state.list.items
});


const Tab = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 100px;

  border-radius: 8px;
  border: 1px solid #CDCDCD;
  
`;

const TabRow = styled.div`
  display: flex;
  border-bottom: 1px solid #CDCDCD;
  &:last-child {
    border-bottom: none;
   }  
`;

const HeaderCell = styled.div`
  background-color: bisque;
  width: ${props => props.$width};
  height: 40px;
  font-size: 12px;
  vertical-align: middle;
`;

const Cell = styled.div`
  display: flex;
  color: blue;
  width: ${props => props.$width};
  padding: 8px;
`;

const CellContainer = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
`;

const DdateCell = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: gold;
`;

const CommentCell = styled.div`
  display: flex;
  text-align: left;
  font-size: 12px;
  height: 100%;
  width: 100%;
`;

const SpeedCell = styled.div`
  font-weight: bold;
`;

const ProgressCell = styled.div`
  display: flex;
  height: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: rgba(3, 131, 203, 0.10);
`;

const ProgressLine = styled(ProgressCell)`
  position: absolute;
  top: 0;
  width: ${props => props.$progress * 100 + '%'};
  background-color: #0383CB;
`;

const columns = [
  {name: `Дата`, data: 'ddate', width: '10%', render: (row, item) => <DdateCell>{row[item.data].slice(0, 10)}</DdateCell>},
  {name: `Название`, data: 'name', width: '20%'},
  {name: `Расстояние`, data: 'distance', width: '5%'},
  {name: `Длительность`, data: 'durationsec', width: '5%'},
  {name: `Инт.шаг`, data: 'walkintervalsec', width: '5%'},
  {name: `Инт.бег`, data: 'runintervalsec', width: '5%'},
  {name: `Скорость`, width: '5%', render: (row, item) => {
     const seconds = Math.floor(row.durationsec / row.distance);
     const minutes = Math.floor(seconds / 60);
     return (<SpeedCell>{minutes}:{seconds - 60 * minutes}</SpeedCell>)}
  },
  {name: `Скорость бега`, data: 'vrunkmsec', width: '5%', render: (row, item) => {
     const minutes = Math.floor(row[item.data] / 60);
     const seconds = Math.floor(row[item.data] - minutes * 60);
     return <SpeedCell>{minutes}:{seconds}</SpeedCell>
  }},
  {name: `t на улице`, data: 'temperature', width: '5%'},
  {name: `Комментарий`, data: 'comment', width: '20%', render: (row, item) => <CommentCell>{row[item.data]}</CommentCell>},
  {name: `Прогресс`, width: '20%', render: (row, item) => <><ProgressCell /><ProgressLine $progress={row.accDistance / goalKm}/></>},
];


const BigTable = ({list}) => {

  return (<Tab>
      <TabRow>
      {columns.map(item => <HeaderCell $width={item.width}>{item.name}</HeaderCell>)}
      </TabRow>
      {list.length > 0 &&
       list.map(listItem => {
         return (<TabRow>
             {columns.map(item => <Cell $width={item.width}><CellContainer>{item.render ? item.render(listItem, item) : listItem[item.data]}</CellContainer></Cell>)}
           </TabRow>
         );
       })}
    </Tab>

  );


}

export default connect(mapStateToProps)(BigTable);
