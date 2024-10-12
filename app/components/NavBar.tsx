export default function Navbar(){
    return(
        <nav style={{display:"flex",backgroundColor:"blue"}}>
            <div style={{border:"2px solid red"}}>logo</div>
            <ul style={{border:"2px solid green",display:"flex",gap:"20px",listStyle:"none",backgroundColor:"blue"}}>
                <li><a href="/" style={{textDecoration:"none",fontSize:"14px",color:"red"}}>Home</a></li>
                <li><a href="about" style={{textDecoration:"none",fontSize:"14px",color:"red"}}>About us</a></li>
                <li><a href="contactus" style={{textDecoration:"none",fontSize:"14px",color:"red"}}>contact us</a></li>
            </ul>
        
        </nav>
    )
}