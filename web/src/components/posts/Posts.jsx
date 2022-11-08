import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
// import { makeRequest } from '../../services/axios';
import Post from "../post/Post";
import "./posts.scss";

const baseUrl = 'http://localhost:8000/api/'

const Posts = () => {


  const { isLoading, error, data } = useQuery(["posts"], () =>
      axios.get(`${baseUrl}posts`).then((res)=>{
      return res.data
    })
  )

  console.log(data)

  return <div className="posts">
    {
      isLoading ? 'Loading...'
      : data.map((post)=><Post post={post} key={post.id}/>)
    }
    </div>;
};

export default Posts;
