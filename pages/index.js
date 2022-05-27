import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import axios from 'axios'
import Zoom from 'react-medium-image-zoom'



export default function Home() {
  const [students, setStudents] = useState([])
  var imageSize ={
    width:"300px", height:"400px"
  }

  useEffect( () => {
    axios.get('https://fejs-c7-api.herokuapp.com/api/students/?populate=*')
  .then( res => {
    setStudents([...res.data.data])
  })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='d-flex'>
      {students.map((student) => {
          return(
            <div key={student.id} >
              <div className="d-flex">
                  <div className="card" style={{width:'18rem'}}>
                  { student.attributes.photo.data !== null &&
                        <Zoom>
                          <img className="card-img-top img-thumbnail"src={student.attributes.photo.data.attributes.url} style={imageSize} />
                        </Zoom>
                      }
                      <div className="card-body">
                        <p className="card-text">First Name: {student.attributes.firstname}</p>
                        <p className="card-text">Last Name: {student.attributes.lastname}</p>
                        <p className="card-text">Location: {student.attributes.location}</p>
                      </div>
                </div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
  )


}