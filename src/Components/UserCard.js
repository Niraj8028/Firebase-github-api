import React from 'react'
import {Card,CardBody,CardText} from "reactstrap"

const UserCard=({user})=>{
  return (
    <Card className='text-center mt-3'>
        <img src='user.https://avatars.githubusercontent.com/u/87138587?v=4' className='img-thumbnail'/>
        <CardBody>
            <Div className='text-primary'>{user.name}</Div>
            <Div className='text-primary'>{user.location}</Div>
            <Div className='text-primary'>{user.bio}</Div>
            <Div className='text-info'>{user.public_repos}</Div>
            <Div className='text-info'>{user.followers}</Div>
            <Div className='text-info'>{user.following}</Div>
        </CardBody>
    </Card>
  )
}

export default UserCard