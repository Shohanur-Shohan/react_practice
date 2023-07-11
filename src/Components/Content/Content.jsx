import { useState } from 'react';
import './Content.css'
    

const Content = () => {

    const [text, setText] = useState('');

    
    function showText(){
        setText(document.getElementById("textArea").value);
        
    }


    return (
        <div className='content-container'>
            <textarea id="textArea" cols="10" rows="10"  placeholder='Enter your message'></textarea>
            <button onClick={()=>showText()} className='contentBtn'>Click Here</button>
            <p id="showText">{text}</p>
        </div>
    );
};

export default Content;