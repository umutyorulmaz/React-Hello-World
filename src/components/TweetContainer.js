import React from 'react';
import Comment from './Comment';

const TweetContainer = (props) => {
    return <>
    
    {props.status}
    <form>
    <label>
    Name:
    <input type="text" name="name" />
    </label>
    <input type="submit" value="Submit" />
    <button onClick='post'></button>
    </form>
    <Comment text = 'Go Green!'/>
    <Comment text = 'No, Argentina will be the champion'/>
    <Comment text = 'My favourite is Bad Bunny'/>

    </>
      
};
    

 
export default TweetContainer ;