import React, { useState } from 'react'

export const PostModal = ({ content, onClose ,isModal }) => {

    const [question, setQuestion] = useState();
    const [answer, setAnswer] = useState();

    return (
        <>
            <div  className={isModal?'overflow-hidden fixed top-0 bottom-0 left-0 right-0  w-full bg-bills-skyblue/15 h-screen z-30 flex items-center justify-center backdrop-blur-sm' : 'fixed top-0 bottom-0 left-0 right-0  w-full bg-bills-skyblue/15 h-screen z-30 flex items-center justify-center backdrop-blur-sm'} >

                <div className="bg-white p-4 w-full md:w-1/3 ">
                <div>
                    <h2>Edit Post</h2>
                    <label>Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className=" w-full p-2 rounded-md  ring-2 ring-bills-lightgrey focus:ring-2 focus:ring-bills-darkblue placeholder-black/60" 
                    />
                    <label>Content</label>
                    <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className=" w-full p-2 rounded-md  ring-2 ring-bills-lightgrey focus:ring-2 focus:ring-bills-darkblue placeholder-black/60" 
                    ></textarea>

                    <button onClick={onClose}>Cancel</button>

                </div>
                    

                </div>
            </div>
        </>
    )
}
