import {useState} from "react";
import React from 'react';
import './SocialPosts.css';
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import Post from "./PostInterface";

export default function SocialPosts() {
    const [hiddenClass, setHiddenClass] = useState("hidden");
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");

    const [posts, setPosts] = useState<Post[]>([
        {title:"The Quick Fox", thought:"The quick brown fox jumps over the lazt dog"},
        {title:"Lorem Ipsun", thought:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas molestiae obcaecati exercitationem iste?"},
        {title:"Bacon Ipsum", thought:"Bacon ipsum dolor amet meatball pig picanha boudin, shoulder prosciutto cow beef ribs frankfurter."}
    ]);

    const deletePost = (i: number) => {
        let copyOfPosts = [...posts];
        copyOfPosts.splice(i, 1);
        setPosts(copyOfPosts);
    };

    function onSubmit() {
        let copyOfPosts = [...posts];
        copyOfPosts.unshift({title: title, thought: thought});
        setPosts(copyOfPosts);
        setTitle("");
        setThought("");
    }
    function visibility() {
        hiddenClass === "hidden" ? setHiddenClass("not-hidden") : setHiddenClass("hidden");
    }
    return (
        <div className="SocialPosts">
            <header>
                <h1>My Thoughts</h1>
            </header>
            <button onClick={visibility}>New Thought</button>
            {/* <button onClick={() => {setHiddenClass("not-hidden")}}>New Thought</button> */}
            
            
            <div >
            {posts.map((post, index) => (
                <PostInList key={index} post={post} onDelete={() => {deletePost(index)}} />
            ))}
            </div>
            
            {hiddenClass === "not-hidden" ? 
            <PostForm 
                onSubmit={() => {
                    onSubmit();
                    visibility();
                }}
                setTitle={setTitle}
                setThought={setThought}

                
            /> : ""}
        </div>
    );
};
