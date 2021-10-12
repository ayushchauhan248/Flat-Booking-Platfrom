import {FC, memo} from "react";
import { Link } from "react-router-dom";
interface Props{
}
const HomePage: FC<Props> = (props) =>{
return (
 <>
 <div>This is Home Page</div>
 <Link to="/signup"><span className=" text-blue-500"> Signup</span> </Link>
 <Link to="/login"><span className=" text-blue-500"> Login</span> </Link>
 <Link to="/navbar"><span className=" text-blue-500"> Navbar</span> </Link>
 <Link to="/footer"><span className=" text-blue-500"> Footer</span> </Link>
 <Link to="/card"><span className=" text-blue-500"> Card</span> </Link>
 <Link to="/overview"><span className=" text-blue-500"> Overview</span> </Link>
 <Link to="/card2"><span className=" text-blue-500"> Card2</span> </Link>
 </>
);
};
HomePage.defaultProps={
}
export default memo(HomePage);