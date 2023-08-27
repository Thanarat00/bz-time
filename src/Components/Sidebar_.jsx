import { useState } from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarBrand,
  CNavbarNav,
  CForm,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Link } from "react-router-dom";

function Sidebar_() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <CSidebar
           style={{
            width: "250px",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <CSidebarBrand>Baezeni</CSidebarBrand>
          <CSidebarNav>
            <CNavItem><Link to="/" className="nav-link">Home</Link></CNavItem>
            <CNavGroup toggler="Day Shift">
              <CNavItem><Link to="/floor_plan" className="nav-link">Floor Plan</Link></CNavItem>
              <CNavItem><Link to="/photo_edit" className="nav-link">Photo Edit</Link></CNavItem>
              <CNavItem><Link to="/su" className="nav-link">SU</Link></CNavItem>
            </CNavGroup>
            <CNavGroup toggler="Work Shift">
              <CNavItem><Link to="/all" className="nav-link">All</Link></CNavItem>
              <CNavItem><Link to="/floor_edit" className="nav-link">Floor Edit</Link></CNavItem>
              <CNavItem><Link to="/photo_edit_edit" className="nav-link">Photo Edit</Link></CNavItem>
              <CNavItem><Link to="/web" className="nav-link">Web</Link></CNavItem>
              <CNavItem><Link to="/3d" className="nav-link">3D</Link></CNavItem>
              <CNavItem><Link to="/cad" className="nav-link">CAD</Link></CNavItem>
              <CNavItem><Link to="/su_" className="nav-link">SU</Link></CNavItem>
            </CNavGroup>
            <CNavGroup toggler="Report">
              <CNavItem><Link to="/holiday" className="nav-link">Holiday</Link></CNavItem>
              <CNavItem><Link to="/sum" className="nav-link">Summary Report</Link></CNavItem>
            </CNavGroup>
            <CNavGroup toggler="Setting">
              <CNavItem href="#">Floor Plan</CNavItem>
              <CNavItem href="#">Photo Edit</CNavItem>
              <CNavItem href="#">SU</CNavItem>
            </CNavGroup>
          </CSidebarNav>
          <div
            style={{ padding: "1rem", backgroundColor: "#333", color: "#fff" ,textAlign: "center" }}
          >
           Logout
          </div>
        </CSidebar>

        <div style={{ flex: "1" }}>
          <CNavbar
            expand="lg"
            colorScheme="light"
            className="bg-light"
            style={{ width: "100%" }}
          >
          
            <CContainer fluid>
              <CNavbarToggler
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisible(!visible)}
              />
              <CCollapse className="navbar-collapse" visible={visible}>
                <CNavbarBrand href="#"></CNavbarBrand>
                <CNavbarNav className="me-auto mb-2 mb-lg-0"></CNavbarNav>
                <CForm className="d-flex">
                  
                </CForm>
              </CCollapse>
            </CContainer>
          </CNavbar>
        </div>
      </div>
    </div>
  );
}

export default Sidebar_;
