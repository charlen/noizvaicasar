import ScreenBlock from "../../atoms/screenblock/screenblock";
import TextBlock from "../../atoms/text-block/text-block";
import TextBlockGroup from "../../molecules/text-block-group/text-block-group";
import { useEffect, useState } from "react";
import './countdown.css';
import BigText from "../../atoms/big-text/big-text";
import DateBox from "../../atoms/date/date";

interface dateInterface {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return <>
        <ScreenBlock className="screenbox flex flex-col justify-center items-center">
            <div className='flex flex-1 flex-col lg:flex-row w-full items-center justify-center lg:justify-start lg:pt-10'>
                <div className="flex flex-col text-center lg:w-[50%]">
                    <TextBlock className='destaque mb-8 text-4xl lg:text-8xl mt-10'>Mirla & Charlen</TextBlock>
                    <BigText className=''>Marque na Agenda</BigText>
                    <DateBox className="" />
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
            <div className="flex h-[20%]">
            </div>
        </ScreenBlock>
    </>
}