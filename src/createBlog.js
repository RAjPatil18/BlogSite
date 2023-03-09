import { useState } from "react";
import useFetch from "./useFetch";
import{useNavigate} from 'react-router-dom';


const CreateBlog = () => {

    const [title,setTitle]= useState('');
    const [body,setBody]= useState('');
    const [author,setAuthor]= useState('Mario');

    const [isfetchpending,setisfetchpending]= useState(false);

    const Navigate= useNavigate();


    


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        console.log(blog);

        setisfetchpending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(blog)
        }).then(()=>{
            setisfetchpending(false);
            console.log("added");
            Navigate("/")
        })
    }

    return ( 
        <div className="create">
            <h2>Add New Blog...</h2>

            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="">Blog title : </label>
                <input type="text" value={title} required  onChange={(e)=>setTitle(e.target.value)}/>
                <label htmlFor="">Blog body : </label>
                <textarea required value={body}  onChange={(e)=>setBody(e.target.value)} ></textarea>
                <label htmlFor="">Author : </label>
                <select value={author}  onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {isfetchpending && <button  disabled>Adding Blog</button> }
                {!isfetchpending && <button>Add Blog</button> }
                
            </form>

        </div>
     );
}
 
export default CreateBlog;