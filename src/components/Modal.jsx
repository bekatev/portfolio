import React, { useState } from 'react';
import { useLockBodyScroll } from "@uidotdev/usehooks";



function ModalBox({ handleModal }) {
    useLockBodyScroll();
    return (   
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999] bg-white rounded-xl p-5 text-center justify-center'>
            <h1 className='sm:text-xl md:text-3xl'>INFO</h1>
            <p className='sm:text-lg md:text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus sunt eaque hic ad magni. Temporibus obcaecati modi omnis voluptatem laborum officiis ex ullam odit minus earum expedita, at assumenda suscipit.</p>
            <button className='sm:text-lg md:text-xl bg-primary px-4 py-2' onClick={handleModal}>close</button>
        </div>
    )
}

export default function Modal() {
    const [openModal, setopenModal] = useState(false)   
    return (
        <>
            {openModal && <ModalBox handleModal={() => setopenModal(false)} />}
            <div className='text-left justify-left items-left'>
                <button className="bg-bckg rounded-b-xl py-2 px-4 transform transition duration-500 hover:scale-110" onClick={() => setopenModal(true)}>
                    openModal
                </button>
            </div>
        </>
    ) 
}