import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';



import '../App.css';


const ProfilCard = ({data}) => {

console.log(data);
//     return(
//         <div class="row row-cols-3 g-3">

//         {data.map((data) =>{
//             return(
//                 <div class="col card-grid" >
                
                

                       
//             <Card className='profil-card'>
//             <Card.Img id='logo-card' variant="top" src={data.image} />
//             <Card.Body className='card-text1'>

//               <Card.Title id='card-titel'>{data.titel}</Card.Title>
//               <Card.Text className='card-text' >
//                 Name : {data.vorname} {data.name}
//               </Card.Text >
//               <Card.Text className='card-text'> telefon : {data.telefon}</Card.Text>
//               <Card.Text className='card-text' > E-mail : {data.email}</Card.Text>
//               <Card.Text className='card-text'>
//                 Adresse:  {data.strasse}, {data.hausnummer}<br/>{data.plz} {data.ort}
//                 </Card.Text>

//             </Card.Body>
//           </Card>
       
//     </div>
       
//        )
//     })}
//    </div>




//    )}
   

     return(
          <Card className='profil-card'>
            <Card.Img id='logo-card' variant="top" src={data.image} />
            <Card.Body className='card-text1'>

              <Card.Title id='card-title'>{data.titel}</Card.Title>
              <Card.Text className='card-text' >
                Name : {data.vorname} {data.name}
              </Card.Text >
              <Card.Text className='card-text'> telefon : {data.telefon}</Card.Text>
              <Card.Text className='card-text' > E-mail : {data.email}</Card.Text>
              <Card.Text className='card-text'>
                Adresse:  {data.strasse}, {data.hausnummer}<br/>{data.plz} {data.ort}
                </Card.Text>

            </Card.Body>
          </Card>
     )
      
    

}


export default ProfilCard;