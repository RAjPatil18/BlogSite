import { useState , useEffect } from "react";
import BlogList from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {

    const [name,setName]=useState("Raj");

    const {blogs,isPending,error}=useFetch("http://localhost:8000/blogs");

    


    const deleteblog = (id)=>{
        // const newblog= blogs.filter(blog=> blog.id!==id);
        // setBlogs(newblog);
    }

     function handleonClick(e) {
        // console.log("CLicked");
        // console.log(e);
        // console.log(name);
        // // console.log(e);
        // name="Raj Patil";

        // console.log(name);
        if(name=="Raj"){
            setName("Raj Patil");
        }
        else{
            setName("Raj");
        }
       
    }

    function handleonClickAgain(name,e) {
         console.log(name);
        // console.log(e);
        name="Raj Patil";

        console.log(name);

    }


    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" deleteblog={deleteblog}/>}

         {/* <BlogList blogs={blogs.filter((blog)=> blog.author==="mario" )} title="Mario blogs" ></BlogList>
  */}
            {/* <h2>Homepage</h2> */}
            {/* <button onClick={handleonClick}>Click Me</button> */}
            {/* <p>{name}</p> */}
            {/* <button onClick={(e)=>{
                handleonClickAgain("Raj",e)
            }}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;