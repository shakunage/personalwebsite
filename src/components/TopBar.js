import { Link, useLocation } from "react-router-dom";
import { Toolbar } from "@mui/material";
import { Home } from '@mui/icons-material/';
import { useMediaQuery } from 'react-responsive'

const TopBar = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const location = useLocation();

  if (isDesktop || (location.pathname === "/" && !isDesktop)) {
    return (
      null
    );
  } else {
    return (
      <Toolbar variant="dense"style={{position: "sticky", top: 0, zIndex: 1, backgroundColor: "#efefef"}}>
        <Link style={{color: "inherit", marginRight: 30}} to="/"> <Home/> </Link>
        Veikka Sakari Junttila
      </Toolbar>
    )
  }
}

export default TopBar;