import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../../styles/card.module.css'

export default function dataCard({photo,firstname,lastname,location}) {
  return (

    <div className={'container'}
    onClick={()=>router.push(`/`)}>
        <div className={style.dataCard}>
            <img src={photo} className={style.card_short_image} ></img>
            {/* <Link href="/dashboard"> */}
            <a>
            <div className={style.card_short_description}>
                <h3><b>{firstname}</b></h3>
                <div className='row'>
                    <div className='col-7'><h6>{lastname}</h6></div>
                    <div className='col'>
                      </div>
                </div> 
            </div>
            </a>
            {/* </Link> */}
            
    </div>
    </div>
    // <div className={styles.dataCard}>
    //     <div className='row'>
    //         <div className='col'>
    //             <div style={{ width: '18rem' }}>
    //                 <Card.Img src={photo} />
    //                     <Card.Body>
    //                         <Card.Title>{firstname}</Card.Title>
    //                         <Card.Text>{lastname}</Card.Text>
    //                         <Card.Text>{location}</Card.Text>
    //                     </Card.Body>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}
