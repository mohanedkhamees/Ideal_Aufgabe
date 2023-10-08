 import Navbar from 'react-bootstrap/Navbar'

 
 
 
 export const Nav = ()=>{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiar"  >
            <Navbar.Brand >
              <img
                id='nav-logo'
                alt="React Bootstrap logo"
                src='	https://www.ideal-versicherung.de/templates/masterbootstrap/images/elements/IDEAL-Logo.svg'
              />
            </Navbar.Brand>
          </Navbar>
        
        
        </>
    )
}