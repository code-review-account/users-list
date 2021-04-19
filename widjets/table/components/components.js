import styled, { css }  from 'styled-components'

export const Table = styled.table`
   width: 100%;
   border-spacing: 0;
   border-radius: 6px;
   box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
   margin-bottom: 24px;
   padding-bottom: 16px;
`
export const THead = styled.thead`
   background-color: #f0f0f0;
   border-radius: 6px;
`
export const TBody = styled.tbody`

`
export const Th = styled.th`
   height: 48px;
   text-align: left;

   &:first-child {
      text-align: center;
      width: 60px;
   }
`
export const Tr = styled.tr`
   &:nth-child(even) {
      background-color: #fafafa;
   }
`
export const Td = styled.td`
   height: 48px;
   &:first-child {
      text-align: center;
      width: 60px;
   }
   &:last-child {
      text-align: right;
   }
`
export const TableBtn = styled.button`
   border: none;
   background: transparent;
   width: 25px;
   height: 25px;
   cursor: pointer;
   margin-right: 26px;
   padding: 0;

   &:hover {
      color: red;
   }
`
export const CheckBox = styled.div`
   width: 18px;
   height: 18px;
   border: solid 2px #e8e8e8;
   border-radius: 6px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   
   ${props => props.checked && css`
      div {
         width: 12px;
         height: 12px;
         border-radius: 3px;
         background: #82af00;
      }
   `}
`