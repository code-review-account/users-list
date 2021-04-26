import TableWraper from '../widjets/table/TableWraper'
import styled, { css } from 'styled-components'

const Wraper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   padding-top: 33px;
`

const Title = styled.h1`
   font-size: 24px;
   color: #4c4c4c;
   margin: 0 0 16px;
`
const Button = styled.button`
   background-color: #0085be;
   width: 215px;
   height: 48px;
   border-radius: 6px;
   color: #fff;
   font-size: 14px;
   border: none;
   cursor: pointer;

   &:hover {
      background-color: #02597e;
   }
   &:active {
      background-color: #002abe;
   }

   ${props => props.disabled && css`
      background-color: #fff;
      color: #dadada;
      border: 2px solid #dadada;
      cursor: default;

      &:hover {
         background-color: #fff;
      }
   `}
`
const Footer = styled.footer`
   display: flex;
   justify-content: end;
`

const PageView = ({ thead, tbody }) => {

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