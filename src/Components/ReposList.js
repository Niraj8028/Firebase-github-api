import React,{useState,useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import axios from 'axios';

const repossList=({repos_url})=> {
    const [repos, setRepos]=useState([]);

    const fetchreposs= async()=>{
        const {data}=await axios.get(repos_url);
        setRepos(data);
    }
    useEffect(()=>(
        fetchreposs()
    ),[repos_url])


  return (
    <ListGroup>
        {repos.map(repo=>{
            <ListGroupItem key={repo.id}>
                <div className='text-primary'>{repo.name}</div>
                <div className='text-primary'>{repo.description}</div>
                <div className='text-primary'>{repo.language}</div>
            </ListGroupItem>
        })}
    </ListGroup>
  )
}

export default repossList