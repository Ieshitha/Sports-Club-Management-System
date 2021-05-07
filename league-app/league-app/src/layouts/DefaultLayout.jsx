import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import Footer from "../components/footer/Footer";
import Delete from "../modules/delete/Delete";



const DefaultLayout =(ViewComponent) =>{
    return class extends React.Component{
        render(){
            return(
                <div>
                <Navbar color="light" light expand="md">
                  <NavbarBrand href="/">LEAGUE CHAMPIONS</NavbarBrand>
                  <NavbarToggler/>
                  <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink href="/" >Add Sports Club</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/delete">Delete Sports Club</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/Update">Update Sports Club</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/table">League Table</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/dashBoard">Dashboard</NavLink>
                      </NavItem>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                  </Collapse>
                </Navbar>
                <ViewComponent/>
            
                <Footer/>
              </div>
           

            )
           
        }
        
    }
}
export default DefaultLayout;