import { Link } from 'react-router-dom';
import background from "../assets/icons/background.jpg"

const Home = () => {
    
    return <>
        <div style={{backgroundImage:`url(${background})`,  
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height:"100vh auto",
            width:"auto",
            marginTop:"0",
            marginBottom:"0"
            }}>
            <div className='home'>
            <h1>Home</h1>
            <h2>click the button explore more products</h2>
            <Link to="/body" ><button className='button-24'>Products</button></Link>
            <h2>Ecommerce app</h2>
            <h3>Allan sam</h3>
            </div>
        </div>
        </>
}

export default Home;
