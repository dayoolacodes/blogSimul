import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
  

    componentDidMount (){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const posts = res.data.slice(0,5)
            const updatedPost = posts.map(r => {
                return {
                    ...r,
                    author: "dayo"
                }
            })
            this.setState({posts: updatedPost})
        })
        
    }

    handlePost =(id)=>{
        this.setState({clickedId:id})
    }

    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
                <section>
                    <FullPost id={this.state.clickedId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;