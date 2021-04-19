import { svgSprite } from './components/svgSprite'
import { Table, THead, TBody, Th, Tr, Td, TableBtn, CheckBox } from './components/components'

const TableView = ({
   thead,
   tbody
}) => {


   return (
      <Table>
         <THead>
            <tr>
               { 
                  thead && thead.map(th => {
                     switch (th.type) {
                        case 'checkbox':
                           return (
                              <Th key={Math.random() * Date.now()}>
                                 <CheckBox checked={th.checked}>
                                    <div></div>
                                 </CheckBox>
                              </Th>
                           )
                        default: 
                        return <Th key={Math.random() * Date.now()}>{ th.title }</Th> 
                     }
                  })
               }
            </tr>
         </THead>
         <TBody>
            { tbody.length !==0 
               ? tbody.map(tr => {
                  return(
                     <Tr key={Math.random() * Date.now()}>
                        {
                           Object.keys(tr).map(td => {
                              switch (td) {
                                 case 'buttons' :
                                    return (
                                       <Td key={Math.random() * Date.now()}>
                                          { tr[td].map(btn => {
                                             return (
                                                <TableBtn onClick={btn?.handler} data-id={tr.number}> 
                                                   {svgSprite(btn.type)}
                                                </TableBtn>
                                             )
                                          })}
                                       </Td>
                                    )
                                 case 'chekbox':
                                    return (
                                       <Td key={Math.random() * Date.now()}>
                                          <CheckBox checked={tr[td].checked}>
                                             <div></div>
                                          </CheckBox>
                                       </Td>
                                    )
                                 default: 
                                 return <Td key={Math.random() * Date.now()}>{ tr[td] }</Td>
                              }
                           })
                        }
                     </Tr>
                  )
               }) 
               :  <Tr>
                     <Td as="td" colspan="999">Нет записей</Td>
                  </Tr>
            }
         </TBody>
      </Table>
   )
}
 

export default TableView