import React, { useState } from 'react'

export const PostModal = ({ content, onClose ,isModal }) => {

    const [question, setQuestion] = useState(content.question);
    const [answer, setAnswer] = useState(content.answer);


    

    return (
        <>
            <div  className='fixed top-0 bottom-0 left-0 right-0  w-full bg-bills-skyblue/15 h-screen z-30 flex items-center justify-center backdrop-blur-sm' >

                <div className="bg-white p-4 w-full md:w-1/3 rounded  ">
                <div>
                    <h2 className='text-2xl mb-3'>Edit Post</h2>
                    <label className='text-xl'>Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className=" w-full p-2 rounded-md  ring-2 ring-bills-lightgrey focus:ring-2 focus:ring-bills-darkblue  my-3" 
                    />
                    <label className='text-xl'>Content</label>
                    <textarea
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className=" w-full p-2 rounded-md my-2 ring-2 ring-bills-lightgrey focus:ring-2 focus:ring-bills-darkblue " 
                    ></textarea>

                    <button onClick={onClose} className='px-6 py-2 text-white bg-bills-darkblue mt-3 rounded'>Cancel</button>

                </div>
                    

                </div>
            </div>
        </>
    )
}
