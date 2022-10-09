import { getRoles } from "@testing-library/react";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>GDSC</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/events" 
                //     style={{
                //         color:"white",
                //         backgroundColor: '#f1356d',
                //         borderRadius: '8px'
                // }} <-- HOW TO DO IN-LINE CSS CODE
                >Events</a>
            </div>
        </nav>
    );
}
 
export default Navbar;