import { useEffect, useState } from 'react'
import PageView from './PageView'

const PageWraper = () => {

   const [ usersData, setUsersData ] = useState([])
   const [ exchange, setExchange ] = useState([])
   

   useEffect(() => {
      const getData = async () => {
         const users = await fetch('https://api.npoint.io/324f4ca2cdd639760638').then(res => res.json())
         const exchangeData = await fetch('https://api.ratesapi.io/api/latest').then(res => res.json())

         setUsersData(users)
         setExchange(exchangeData.rates)
         console.log('usersData', usersData)
         console.log('usersData', exchange)
      }
      getData()
   }, [])

   const getAge = number => {
      const dateOfBirth = new Date(number),
            now = new Date(),

            bYear = dateOfBirth.getFullYear(),
            bMonth = dateOfBirth.getMonth(),
            bDay = dateOfBirth.getDate(),

            cYear = now.getFullYear(),
            cMonth = now.getMonth(),
            cDay = now.getDate()

      let age = cYear - bYear

      return cMonth > bMonth || cDay > bDay ? age : --age
   }

   const parsHeight = str => {
      const pos = str.indexOf("'"),
            ft = +(str.slice(0, pos)),
            dm = +(str.slice(pos + 1, str.length - 1))

      const height = (ft * 12 + dm) * 2.54

      return Math.floor(height / 100) + 'м ' + Math.round(height % 100) + 'см'
   }

   const thead = [
      {

      },
      {
         title: '№',
      },
      {
         title: 'ФИО',
      },
      {
         title: 'Возраст (Лет)',
      },
      {
         title: 'Рост',
      },
      {
         title: 'Вес',
      },
      {
         title: 'Зарплата',
      },
      {

      }
   ]

   const tbody = []

   usersData.map((user, idx) => {
      tbody.push({
         chekbox: 'c',
         number: ++idx,
         name: user.first_name + ' ' + user.last_name,
         age: getAge(user.date_of_birth),
         height: parsHeight(user.height),
         weight: Math.round(user.weight / 2.20462) + ' кг',
         salary: '$' + Math.round(user.salary * exchange.USD),
         buttons: [
            {
               type: 'edit',
            },
            {
               type: 'delete',
            },

         ]
      })
   })
   
   return <PageView thead={thead} tbody={tbody} />
}

export default PageWraper