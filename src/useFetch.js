import { useState, useEffect } from "react";
const useFetch =(url)=>{
    const [blogs,setBlogs]=useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        // console.log("use effect run");

        const abortCont=new AbortController();

        setTimeout(()=>{
            fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("Sorry...Data does not found!!!")
            }
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setBlogs(data);
            setisPending(false);
        })
        .catch(err =>{
            if(err.message==="AbortError"){
                console.log("Fetch Abort");
            }
            else{
                setisPending(false);
            setError(err.message);
            }
            
        });
        },1000);

        return ()=> abortCont.abort();
        
    },[url]);

    return {blogs,isPending,error}
}

export default useFetch;