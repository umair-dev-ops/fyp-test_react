import react from "react";
 import '../style/filter.css'
 import Box from '@mui/material/Box';
 import Slider from '@mui/material/Slider';
 import Typography from '@mui/material/Typography';

 const Filter= ()=>{


    function valuetext(value) {
        return `${value}°C`;
      }

    
     
    return (
        <>
         <section id="sidebar">
    
    <div class="border-bottom pb-2 ml-2">
        <h4 id="burgundy">Filters</h4>
    </div>
    <Box className="border-bottom pb-2 ml-3 mt-2" >
    <Typography id="input-slider" gutterBottom>
    Min. Salary
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
    <div class="py-2 border-bottom ml-3">
        <h6 class="font-weight-bold">Job Title</h6>
        <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">Fresh Artisan Breads</label> </div>
            <div class="form-group"> <input type="checkbox" id="breakfast"/> <label for="breakfast">Breakfast Breads</label> </div>
            <div class="form-group"> <input type="checkbox" id="healthy"/> <label for="healthy">Healthy Breads</label> </div>
        </form>
    </div>
    <div class="py-2 border-bottom ml-3">
        <h6 class="font-weight-bold">Experience</h6>
        <Box className="border-bottom pb-2 ml-3 mt-2" >
        <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
        {/* <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input type="checkbox" id="tea"/> <label for="tea">Tea Cakes</label> </div>
            <div class="form-group"> <input type="checkbox" id="cookies"/> <label for="cookies">Cookies</label> </div>
            <div class="form-group"> <input type="checkbox" id="pastries"/> <label for="pastries">Pastries</label> </div>
            <div class="form-group"> <input type="checkbox" id="dough"/> <label for="dough">Cookie Dough</label> </div>
            <div class="form-group"> <input type="checkbox" id="choco"/> <label for="choco">Chocolates</label> </div>
        </form> */}
    </div>
    <div class="py-2 ml-3">
        <h6 class="font-weight-bold">Skills</h6>
        <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
            <div class="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on artisan breads</label> </div>
        </form>
    </div>
</section>
        </>
    )
}

export default Filter;