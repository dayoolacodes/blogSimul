import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={
       loadedPosts: null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedPosts || (this.state.loadedPosts.id !== this.props.id)){
                axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(res => {
                    console.log(res.data)
                    this.setState({loadedPosts:res.data})
                    })
            }
        }
    }

    
    render () {
        let post = <p style={{textAlign:"center", fontWeight:"bolder"}}>Please select a Post!</p>;

        if (this.props.id){
             post = <p style={{textAlign:"center", fontWeight:"bolder"}}>Loading...!</p>;
        }
        if (this.state.loadedPosts){
            post = (
                <div className="FullPost">
                <h1>{this.state.loadedPosts.title}</h1>
                    <p>{this.state.loadedPosts.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
    );
}
        return post;
    }
}


export default FullPost;