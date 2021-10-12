import {FC, memo} from "react";
interface Props{
}
const navbar: FC<Props> = (props) =>{
return (
 <div className=" ">
     <div > 
         
     </div>
       <ul className="flex float-right p-5" >
         <li className="px-10"><a href="">Home</a></li>
         <li className="px-10"><a href="">About</a></li>
         <li className="px-10"><a href="">Login</a></li>
         <li className="px-10"><a href="">Contact</a></li>
         <li className="px-10"><a href="">My Account</a></li>
     </ul>
 </div>
);
};
navbar.defaultProps={
}
export default memo(navbar);