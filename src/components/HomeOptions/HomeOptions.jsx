import React, {useState} from 'react';
import Modal from 'react-modal';
import './HomeOptions.css'
import newTweet from '../newTweet/newTweet';

function HomeOptions(){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    return (
        <div className="optionContainer">
            <a href='/'>
            <img src="data:image/png;base64,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" width='35px' height='30px'/>
            </a>
            <a id='explore' href='/'># Explore</a>
            <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg>Settings</a>
<a id='explore' href='/profile'> # Profile</a>
<button className='tweet-btn' onClick={setModalIsOpenToTrue} data-bs-toggle="modal" data-bs-target="#exampleModal">Tweet</button>
<Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <newTweet/>
            </Modal>
        </div>
    )
}

export default HomeOptions;