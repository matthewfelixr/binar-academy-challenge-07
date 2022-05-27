import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/Card/Card'
import axios from 'axios'
import ZoomIn from 'react-medium-image-zoom'
import useRouter from 'next/router'
import 'react-medium-image-zoom/dist/styles.css'



export default function Home() {
  const router = useRouter
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
      <div className={styles.card} >
      {students.map((student) => {
        const id = student.id
          return(
            <div key={student.id} >
              <div className={styles.card_container}>
                  <div className="card" style={{width:'18rem'}}>
                  { student.attributes.photo.data !== null &&
                    <ZoomIn>
                          <img className="card-img-top img-thumbnail"src={student.attributes.photo.data.attributes.url} style={imageSize} />
                    </ZoomIn>
                      }
                      <div className="card-body" onClick={()=>router.push(`/students/${id}`)}>
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
