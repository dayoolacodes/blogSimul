import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        clickedId: null,
        clickedContent: null
    }

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
        const posts = this.state.posts.map(post => {
            return <Post
            key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={()=>this.handlePost(post.id)}
            />
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                    {/* <Post />
                    <Post />
                    <Post /> */}
                </section>
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