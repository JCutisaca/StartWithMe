"use client"
import { useEffect, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface ButtonPosition {
    x: number | string;
    y: number | string;
}

export default function StartWithMe() {
    const [page, setPage] = useState({
        title: "",
        imageUrl: "",
        html: "",
        message: ""
    });
    const [error, setError] = useState("");

    const pathname: Array<string> = usePathname().split('/');
    const topics: Array<string> = [
        'shrek',
        'superMario',
        'toyStory',
        'dragonBall',
        'harryPotter',
        'piratasDelCaribe',
    ];
    const router: AppRouterInstance = useRouter();

    const [buttonPosition, setButtonPosition] = useState<ButtonPosition>({ x: "initial", y: "initial" });

    const handleMouseEnter = (): void => {
        const pos = calcularCoordenadas();
        setButtonPosition({ x: pos.posx, y: pos.posy });
    };

    const calcularCoordenadas = (): { posx: number, posy: number } => {
        const ancho = window.innerWidth - 100;
        const alto = window.innerHeight - 200;
        const posx = Math.random() * (ancho - 0) + 0;
        const posy = Math.random() * (alto - 0) + 0;
        return { posx, posy };
    };

    const handleButtonClick = (): void => {
        Swal.fire({
            title: page?.message,
            html: page?.html,
            showCloseButton: true,
            showConfirmButton: false,
        });
    };

    const handleSetTopic = (): void => {
        const topic = pathname[1];

        if (topic === "shrek") {
            setPage({
                ...page,
                title: "¿Quieres ser mi Novia? Por ti, baby, sería Batman.🦇",
                imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703902231/gato_con_botas_xxwdwe.png",
                html: '<iframe style="width: 100%; height: 16rem;" src="https://www.youtube.com/embed/jUsKBqs2h3I?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                message: "Ya sabía que querías ser mi novia😉"
            })
            return
        }
        if (topic === "superMario") {
            setPage({
                ...page,
                title: "Princesa Peach, aquí me tienes. Jejeje. Creo que el amor nos obliga a salir del caparazón. Gobernemos el mundo juntos por siempre, ¿Te gustaría ser mi novia?",
                imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703880431/Super_mario_g62udg.png",
                html: '<iframe style="width: 100%; height: 16rem;" src="https://www.youtube.com/embed/U2ybLufNxAc?autoplay=1" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                message: "¡Gracias por aceptar este viaje mágico a nuestro propio Reino Champiñón! 🍄💖"
            })
            return

        }
        if (topic === "toyStory") {
            setPage({
                ...page,
                title: "¿Quieres ser mi novia? Por favor, ya no quiero ser tu juguete.😢",
                imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703881351/barbie_m8fwpt.jpg",
                html: '<iframe style="width: 100%; height: 16rem;" src="https://www.youtube.com/embed/t7tiQm4DOgU?autoplay=1&start=15" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                message: "Ya lo sabía bb, ¿lista para el flamenco del amor? uwu"
            })
            return
        }
        if (topic === "dragonBall") {
            setPage({
                ...page,
                title: "¿Quieres ser mi compañera en esta batalla del amor? ¡Sácame de la friendzone, maldita insecta!",
                imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703835489/vegeta_z0bwij.jpg",
                html: '<iframe style="width: 100%; height: 16rem;" src="https://www.youtube.com/embed/UW-OqLmaSiQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                message: "SIUUUU Este fue el momento exacto en el que me enamore de ti 😄"
            })
            return
        }
        if (topic === "harryPotter") {
            setPage({
                ...page,
                title: "¿Quieres ser mi novia y juntos hacer magia? Porque cuando estás cerca, siento que mi corazón Wingardium leviosa de la emoción. 😄",
                imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703884352/asustado-potter_hmctee.png",
                html: '<iframe style="width: 100%; height: 16rem;" src="https://www.youtube.com/embed/D9Lzab69AFA?autoplay=1&start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                message: "Lo sabia bb 😘 Uesaaa c festeja con el cumbion del harry"
            })
            return
        }
        if (topic === "piratasDelCaribe") {
            setPage({
                ...page,
                title: "¿Te gustaría navegar los misteriosos mares del amor conmigo? Sabe.☠️",
                imageUrl: "https://res.cloudinary.com/dvuhnhe50/image/upload/v1703888634/Hoy_es_un_gran_d%C3%ADa_para_morir_vz0e5r.png",
                html: '<iframe style="width: 100%; height: 16rem;" src="https://www.youtube.com/embed/e5DIQXoedhE?autoplay=1&start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                message: "Hoy recordaran el dia como en el que casi rechazan al capitan Jack Sparrow 😅"
            })
            return
        }
    }

    useEffect(() => {
        if (topics.includes(pathname[1])) {
            handleSetTopic();
        } else {
            setError("error")
        }
    }, [])

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            {page.imageUrl && <div className="flex flex-col items-center">
                <h1 className='text-2xl text-center'>
                    {page.title}
                </h1>
                <Image
                    width={'400'}
                    height={'400'}
                    className='w-[100%] max-w-xl rounded-3xl my-2'
                    src={page?.imageUrl}
                    alt={''}
                />
                <div>
                    <button className='w-16 ml-[-4rem] bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl rounded-lg' onClick={handleButtonClick}> Si </button>
                    <button
                        id="btnno"
                        className="absolute w-16 ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl rounded-lg"
                        onMouseEnter={handleMouseEnter}
                        onClick={handleMouseEnter}
                        style={{ left: `${buttonPosition.x}px`, top: `${buttonPosition.y}px` }}
                    > No </button>
                </div>
            </div>}
            {error?.length ?
                <div className='flex'>
                    <h1 className="inline-block m-0 pr-4 text-2xl font-semibold align-top leading-49 border-r border-solid border-black border-opacity-30">404</h1>
                    <h2 className="text-base font-normal leading-49 m-0">This page could not be found.</h2>
                </ div>
                : null}
        </div>
    );
}