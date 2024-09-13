
import Button from "./Button";

function Navbar({children,onClick, activeTab}) {
 

  return (
    <div  className="flex justify-between bg-black text-white rounded-2xl px-4 py-1 navbar">
      <Button onClick={()=>onClick('AboutMe')} active={activeTab === "AboutMe"}>AboutMe</Button> 
      <Button  onClick={()=>onClick('Experience')} active={activeTab === "Experience"}>Experience</Button> 
      <Button  onClick={()=>onClick('Recomended')} active={activeTab ==="Recomended"}>Recommended</Button> 
    </div>
  )
}

export default Navbar;
