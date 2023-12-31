"use client"
import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface CardProps {
    title: string;
    imageUrl: string;
    link: string;
  }

const Card: React.FC<CardProps> = ({title, imageUrl, link}) => {
    const router = useRouter();

    const handleInputClick = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        if (event.target instanceof HTMLInputElement) {
            event.target.setSelectionRange(0, event.target.value.length);
        }
    };

    const handleCopyClick = () => {
        const inputElement = document.getElementById('copyInput') as HTMLInputElement;

        if (inputElement) {
            inputElement.select();
            document.execCommand('copy');
        }
    };
    
    const handleNavigate = (): void => {
        const navTo = link.split("/")
        router.push(navTo[3])
    }

    return (
        <div className="flex flex-col items-center max-w-sm">
            <p onClick={handleNavigate} className="text-lg cursor-pointer">{title}</p>
            <Image onClick={handleNavigate} width={'400'} height={'400'} className='w-[100%] cursor-pointer max-w-sm border-2 border-black rounded-3xl my-2' src={imageUrl} alt="" />
            <input
                id="copyInput"
                type="text"
                value={link}
                readOnly
                onClick={handleInputClick}
                className='max-w-40 text-black'
            />
            <button className="bg-black rounded-3xl text-white w-16" onClick={handleCopyClick}>Copiar</button>
        </div>
    );
}

export default Card;