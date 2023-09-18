import {img_url} from "../constants"
export const Title =()=>(
    <img 
      className="logo"
      alt ="logo"
      src={img_url}
    />
);


export const Header= ()=>(
       
  
     <div className="header">
       <Title />
       <div className="nav-items">
        
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
        </div>
     </div>
   
);
