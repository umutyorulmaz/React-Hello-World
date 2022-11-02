import React from 'react';
import Timer from './Timer';
import LikeButton from './LikeButton';



const Comment = (props) => {
    return<>
    {props.text}
    <LikeButton></LikeButton>
    <Timer></Timer>      

    </>
}
 
export default Comment;