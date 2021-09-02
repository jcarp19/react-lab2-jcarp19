import React from "react";
import {useState} from "react";
import Post from "./PostInterface";
import "./PostInList.css"

interface Props {
    post: Post;
    onDelete: () => void;
}


export default function PostInList({post, onDelete}: Props) {
    return (
    <div className="single-post">
       <h3>{post.title}</h3>
       <p>{post.thought}</p>
       <i className="fas fa-trash" onClick={() => {
           onDelete();
       }}></i>
    </div>
    )
};
