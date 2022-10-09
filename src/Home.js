import { useState } from "react";


const Home = () => {
    
    // let name = "Developer";
    // const handleClick = (e) => {
        // name = "Reacter";
        // console.log("Thank you for joining " + name, e);
    // } --> this commented portion changes name in console, but not 'reactive' so doesn't change on site
    
    const [name, setName] = useState("Devleoper");
    const [age, setAge] = useState(25);
    
    const handleClick = () =>{
        setName("React Enthusiast"); //can make argument anything
        setAge(30);
    }
    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target);
    // }
    return ( 
        <div className="home">
            <h2>Welcome to GDSC</h2>
            
            <p onClick={handleClick}>{name} is ready to go to 20{age}</p>
            <button onClick={handleClick}>Join Us</button>
            
            {/* <button onClick={(e) => handleClickAgain('Developer', e)}>Click me Again</button> */}
            {/* invoke function ^^^^ */}
        </div>
     );
}
export default Home;