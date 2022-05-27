import React from 'react'
import styles from '../../styles/card.module.css'
import DataCard from './DataCard'

export default function Card({students}) {

  return (
    <>

    <div className={styles.card}>
          <div className={styles.wrapper}>
            {students.map(std=>(
              <DataCard 
                key={std.id}
                firstname={std.firstname}
                lastname={std.lastname}
                photo={std.photo}
                location={std.location}
              />
            ))}
            <DataCard/>
          </div>
          
    </div>
    </>
  )
}
// export async function getStaticProps(){
//   const students = await fetch('https://fejs-c7-api.herokuapp.com/api/students/?populate=*')
//   .then(res=> res.json());
//   return{
//   props: {
//       students:students.data,
//   }

//   }}