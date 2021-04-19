import TableWraper from '../widjets/table/TableWraper'
import { Wraper, Title, Button, Footer } from './components/components'

const PageView = ({ thead, tbody, setUsersData }) => {

   return (
      <Wraper>
         <Title>Таблица пользователей</Title>
         <TableWraper thead={thead} tbody={tbody} />
         <Footer>
            <Button disabled >Удалить выбранные</Button> 
         </Footer>
      </Wraper>
   )
}

export default PageView