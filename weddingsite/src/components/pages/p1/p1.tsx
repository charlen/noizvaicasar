import BigText from "../../atoms/big-text/big-text";
import ScreenBlock from "../../atoms/screenblock/screenblock";
import TextBlock from "../../atoms/text-block/text-block";
import TextBlockGroup from "../../molecules/text-block-group/text-block-group";
import DateBox from "../../atoms/date/date";
import { useEffect, useState } from "react";
import './p1.css'
import StrongText from "../../atoms/strong-text/strong-text";

interface dateInterface {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

function gotoGiftList() {
    const url = 'https://www.mercadolivre.com.br/presentes/charlen-e-mirla-z4cwt?utm_source=link_criado&utm_medium=social';
    window.open(url, '_blank');
}

function goToConfirmationList() {
    const url = 'https://forms.gle/ZabC27m5FyUoKk6HA';
    window.open(url, '_blank');
}

export default function P1() {

    const [date, setDate] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    function setTimeToWed(time: number, toSet: React.Dispatch<React.SetStateAction<dateInterface>>) {
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((time % (1000 * 60)) / 1000)

        toSet({
            days,
            hours,
            minutes,
            seconds
        })
    }

    function updateDate() {
        const dateInitial = new Date()
        const eventDate = new Date('2025-05-17T16:30:00')
        const dateFinal: number = (eventDate.getTime() - dateInitial.getTime())

        setTimeToWed(dateFinal, setDate)

        setTimeout(updateDate, 1000)
    }


    useEffect(() => {
        updateDate()
    }, [])


    return <>
        <ScreenBlock className="screenbox flex flex-col justify-center items-center">
            <div className='flex flex-1 flex-col lg:flex-row w-full items-center justify-center'>
                <div className="flex lg:flex-1/2  sm:flex-1/2 flex-col items-center justify-center">
                    <TextBlock className='destaque mb-8 text-4xl lg:text-8xl mt-10'>Mirla & Charlen</TextBlock>
                    <BigText className=''>Marque na Agenda</BigText>
                    <DateBox className="" />
                </div>
                <div className="hidden lg:flex-col lg:flex lg:flex-1/2 p-4 items-end justify-center lg:h-[30%] w-full pl-50 pt-100"  >
                    <div className="flex flex-row text-center justify-center cursor-pointer link m-4" onClick={gotoGiftList}>
                        <BigText className="text-2xl"> Lista de presentes </BigText>
                    </div>
                    <div className="flex flex-row text-center justify-center cursor-pointer link m-4" onClick={goToConfirmationList}>
                        <BigText> Confirmar Presença </BigText>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-1/3 w-full items-center justify-center sm:h-[12%]'>
                <div className='flex flex-col w-full items-center justify-center bg-[rgba(255,255,255,0.60)]'>
                    <TextBlockGroup className='p-0 w-full lg:w-[50%] font-bold'>
                        <TextBlock className="flex flex-1">{date.days}<span className='text-2xl'>Dias</span></TextBlock>
                        <TextBlock className="flex flex-1">{date.hours}<span className='text-2xl'>Horas</span> </TextBlock>
                        <TextBlock className="flex flex-1">{date.minutes}<span className='text-2xl'>Minutos</span> </TextBlock>
                        <TextBlock className="flex flex-1">{date.seconds}<span className='text-2xl'>Segundos</span> </TextBlock>
                        {/* <TextBlock>Segundos: {date.seconds}</TextBlock> */}
                    </TextBlockGroup>
                </div>
            </div>
            <div className="lg:hidden h-[20%]"  >
                <div className="flex flex-row text-center justify-center cursor-pointer link" onClick={gotoGiftList}>
                    <StrongText className="text-3xl"> Lista de presentes </StrongText>
                </div>
                <div className="flex flex-row text-center justify-center cursor-pointer link" onClick={goToConfirmationList}>
                    <StrongText className="text-3xl"> Confirmar Presença </StrongText>
                </div>
            </div>

        </ScreenBlock>
    </>
}