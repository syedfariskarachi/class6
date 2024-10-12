export default function Home(){
  return(
    <>
    <div className="font-serif bg">Home</div>
    <img src="/download.png" width={400} alt="" />
    <form className="text-black">
      <label htmlFor="name" className="text-white">Name</label>
      <input type="text" />
      <label htmlFor="password"className="text-white">Password</label>
      <input type="password" />
      <label htmlFor="submit" className="text-white" ></label>
      <input type="submit" />
      
    </form>
    </>
  )
}