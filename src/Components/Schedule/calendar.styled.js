import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: #F1F0FE;
    border-radius: 8px 8px 0 0 ;
    position: relative;
    width: 100%;
    overflow: scroll;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
    background-color: transparent;
`;

export const TableCell = styled.td`
  text-align: center;
  color: #636578;
  height: 70px;
    min-height: 70px;
    max-height: 70px;
    caret-color: transparent;
`;

export const TableH = styled.th`
    align-items: center;
    justify-content: center;
    color: ${props => props.$isToday ? '#ffffff' : '#636578'};
    background-color: ${props => props.$isToday ? '#5D3891' : 'defaultBGColor'};
    border-left: 1px solid #ddd;
    text-align: center;
    min-width: 50px;
    height: 70px;
    min-height: 70px;
    max-height: 70px;
`;

export const EventDiv = styled.div`
  position: absolute;
  width: 64px; // w-16 in tailwind
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  z-index: 10;
  caret-color: transparent;
`;