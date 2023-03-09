import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import{useNavigate} from 'react-router-dom';

const BlogDetails = () => {
    const {id}=useParams();
    const {blogs,isPending,error}=useFetch('http://localhost:8000/blogs/'+id);

    const Navigate= useNavigate();

    const handleClick=(e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/blogs/'+blogs.id , {
            method:"DELETE"    
        }).then(()=>{
            Navigate("/");
        })
    }


    return ( 
        <div className="BlogDetails">
            <h2>Blog details - {id}</h2>
            <article>
            {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
                {blogs && 
                <div>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <p>{blogs.body}</p>
                    <button onClick={handleClick} >Delete Blog</button>
                </div>
                }
            </article>
        </div>
     );
}
 
export default BlogDetails;