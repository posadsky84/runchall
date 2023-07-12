import styled from 'styled-components';



const CaledarArea = styled.div`
  display: flex;
`;

const DoubleCalendar = styled.div`
  display: flex;
  max-width: 70%;
  margin: 0 auto;
  border-style: dotted;
  border-color: blue;
`;

const Month = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  border-style: dashed;
  border-color: bisque;
  flex-grow: 1;
`;


const DayItem = styled.div`
  box-sizing: border-box;
  flex-basis: calc(100% / 7);
  border-style: solid;
  border-color: grey;
  height: 60px;
  flex-grow: 1;
`;

const Calendar = () => {

const ddateb = new Date(2023, 6, 7);
const ddatee = new Date(2023, 7, 7);


return (<>
  <CaledarArea>
  <DoubleCalendar>
  <Month>
    {new Array(30).fill(0).map((item, index) => <DayItem>{index+1}</DayItem>)}
  </Month>
    <Month>
      {new Array(30).fill(0).map((item, index) => <DayItem>{index+1}</DayItem>)}
    </Month>
  </DoubleCalendar>
  </CaledarArea>
  </>);

};

export default Calendar;