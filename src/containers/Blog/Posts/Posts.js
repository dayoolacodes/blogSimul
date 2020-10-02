import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: [],
        clickedId: null,
        clickedContent: null
    }
    render() { 
        const posts = this.state.posts.map(post => {
            return <Post
            key={post.id} 
            title={post.title} 
            author={post.author} 
            clicked={()=>this.handlePost(post.id)}
            />
        })
        return ( 
            <section className="Posts">
                {posts}
            </section>
         );
    }
}
 
export default Posts;