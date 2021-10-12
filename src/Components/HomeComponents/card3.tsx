import {FC, memo} from "react";
interface Props{
    image:string;
}
const card3: FC<Props> = (props) =>{
return (
 <>
 
<div>
    <img className="bg-red" src={props.image} alt="" />
</div>
 
 </>
);
};
card3.defaultProps={
}
export default memo(card3);