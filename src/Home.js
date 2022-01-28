import {useState} from 'react';

const Home = () => {
    // let firstName = 'ravi';
    const [firstName, setfirstName] = useState('ravi');

    const handleClick = () => {
       setfirstName('Jamal');
    }
    
    return ( 
        <div className="home">
          <h2>Homepage</h2>
          <p>{ firstName }</p>
          <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;