import { Outlet, useNavigate } from "react-router";

export default function UserLayout(){
    const navigate=useNavigate()

    const logout=()=>{
        localStorage.removeItem('user')
        navigate('/login')
    }

    return <div>
        <nav class="navbar navbar-dark bg-success navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{justifyContent:"space-between"}}>
                <ul class="navbar-nav">
                    <li className="nav-link" style={{color:"white",fontFamily:"Roboto Slab"}} onClick={()=>navigate("/userhome")}>Products</li>
                    <li className="nav-link" style={{color:"white",fontFamily:"Roboto Slab"}} onClick={()=>navigate("/kart")} >Cart </li>
                    <li className="nav-link" style={{color:"white",fontFamily:"Roboto Slab"}} onClick={()=>navigate("/bill")} >Bill</li>
                    <li className="nav-link" style={{color:"white",fontFamily:"Roboto Slab"}} onClick={()=>navigate("/userprofile")} >Profile</li>
                </ul> 
                <ul class="navbar-nav">
                    <li className="nav-link" style={{color:"white",fontFamily:"Roboto Slab",margin:"5px"}} onClick={()=>logout()} >LogOut</li>
                </ul>
            </div>
        </nav>
        <Outlet/>
    </div>
}