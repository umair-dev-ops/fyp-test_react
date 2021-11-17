import react from "react";
// import App from "./Map/App";
import NavbarH from "./NavbarH";
import Filter from "./FilterBar";
import 'leaflet/dist/leaflet.css';
import ProminentAppBar from "./NavbarH";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Map from "./Map/Map";
import Map_S from "./Cluster/Cluster"
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const Main= ()=>{




    
     
    return (
        <>
        {/* <NavbarH></NavbarH> */}
        <ProminentAppBar/>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
          
     
        />
       
        <Filter></Filter>

        <QueryClientProvider client={queryClient}>
      <Map />
    </QueryClientProvider>
     

        </>
    )
}




export {Main}