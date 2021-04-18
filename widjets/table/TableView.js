import styled from 'styled-components'
import { svgSprite } from './components/svgSprite'

const Table = styled.table`
   width: 100%;
   border-spacing: 0;
   border-radius: 6px;
   box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
   margin-bottom: 24px;
   padding-bottom: 16px;
`
const THead = styled.thead`
   background-color: #f0f0f0;
   border-radius: 6px;
`
const TBody = styled.tbody`

`
const Th = styled.th`
   height: 48px;
   text-align: left;

   &:first-child {
      text-align: center;
      width: 60px;
   }
`
const Tr = styled.tr`
   &:nth-child(even) {
      background-color: #fafafa;
   }
`
const Td = styled.td`
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

const TableView = ({
   thead,
   tbody
}) => {


   return (
      <Table>
         <THead>
            <tr>
               { thead && thead.map(th => {
                  return <Th key={Math.random() * Date.now()}>{ th.title }</Th> 
               }) }
            </tr>
         </THead>
         <TBody>
            { tbody.length !==0 
               ? tbody.map(tr => {
                  return(
                     <Tr key={Math.random() * Date.now()}>
                        {
                           Object.keys(tr).map(td => {
                              if (td === 'buttons') {
                                 return (
                                    <Td key={Math.random() * Date.now()}>
                                       { tr[td].map(btn => {
                                          return (
                                             <TableBtn>
                                                {svgSprite(btn.type)}
                                             </TableBtn>
                                          )
                                       })}
                                    </Td>
                                 )
                              }
                              return <Td key={Math.random() * Date.now()}>{ tr[td] }</Td>
                           })
                        }
                     </Tr>
                  )
               }) 
               : <Tr>
                  Нет записей
               </Tr>
            }
         </TBody>
      </Table>
   )
}
 

export default TableView