
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components';
import { LayoutWrapper } from '../layouts/layout.style';


const StyledDiv = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  overflow:hidden;
  color:white;
  flex-direction: column;
  align-items: center;
  color:'white';

  .descripcion {
    font-size:14px;
  }

 .div{
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top:50px;
}

.boton{
  color:white;
  margin-top: 15px;
  text-align: center;
  border: none;
  border-radius: 4px;
  background-color: #CE0031;
  padding:8px 30px;
}

.div2{
  display: flex;
  flex-direction: column;
  height:100%;
  align-items: start;
  margin-right:40px;
}
.description{
  margin-right:20px;
}
  .posts{
    margin-top:50px;
  }

  .title{
    font-size:40px;
    font-weight: bold;
    margin-bottom:10px;
  }

  @media screen and (max-width: 840px) {
    .div{
      width:90%;
      display: flex;
      flex-direction: column;
      height:100%;
      align-items: center;
    }
    .boton{
      margin-bottom:30px;
      width:100%; 
    }
  }
  @media screen and (max-width: 600px) {
    width:100%;
    .div{
      display: flex;
      flex-direction: column;
      height:100%;
      align-items: center;
    
    }
   
    img{
      width:50%;
    }
    .boton{
      margin-bottom:30px;
      width:100%; 
    }

  }
`;



const Proyectos = () => {
    //const tag = posts.tags.split(',');
     // console.log(posts);
      return (
        <LayoutWrapper>
          <Head>
            <title>Proyects</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
         
          <StyledDiv>
          <div className="div"> 
            <div className='div2'>
              <span className="title">Epsilon</span>
              <p className="description">Mobile app for tracking workouts at gym.</p>
              <p className='descripcion'>Track your lifts and go to the next level. This app is available on my Github.</p>
              <button className="boton">Contact me</button>
            </div>
              
              <Image
               src="/assets/flipps.png"
               alt="serdev logo"
               width={220}
               loading='lazy'
               height={400}
              />
            </div>
            <div className="div"> 
            <div className='div2'>
              <span className="title">Flipps App</span>
              <p className="description">Mobile app for Restaurant Offers and much more created with React Native and MongoDB</p>
              <p className='descripcion'>Private code.</p>
              <button className="boton">Contact me</button>
            </div>
              
              <Image
               src="/assets/flipps.png"
               alt="serdev logo"
               width={220}
               loading='lazy'
               height={400}
              />
            </div>
            <div className="div"> 
            <div className='div2'>
              <span className="title">SSR Ecommerce App</span>
              <p>Ecommerce app with Next.JS, GraphQL & Nestjs</p>
              <span>Available soon</span>
              <button className="boton">Contact me</button>
            </div>
              
              <Image
               src="/assets/mobile.png"
               alt="serdev logo"
               width={300}
               loading='lazy'
               height={300}
              />
            </div>
            <div className="div"> 
            <div className='div2'>
              <span className="title">Mercandona web clone</span>
              <p>Mercadona ecommerce app clone with stack MERN</p>
              <p className='descripcion'>Private code.</p>
              <button className="boton">Contact me</button>
            </div>
              
              <Image
               src="/assets/mobile.png"
               alt="serdev logo"
               width={300}
               loading='lazy'
               height={'100%'}
              />
            </div>
          
          </StyledDiv>
        </LayoutWrapper>
      )
    }
    
    
    
    export default Proyectos;
    