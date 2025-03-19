import { useEffect, useState } from 'react'
import BigText from '../../atoms/big-text/big-text'
import ScreenBlock from '../../atoms/screenblock/screenblock'
import TextBlock from '../../atoms/text-block/text-block'
import TextBlockGroup from '../../molecules/text-block-group/text-block-group'
import './p4.css'

interface dateInterface {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}


export default function P4() {

const [elapsed, setElapsed] = useState({
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
        const beginningDate = new Date('2021-04-17T22:30:00')
        const elapsedTime: number = (dateInitial.getTime() - beginningDate.getTime())

        setTimeToWed(elapsedTime, setElapsed)

        setTimeout(updateDate, 1000)
    }


    useEffect(() => {
        updateDate()
    }, []);    

    return <>
        <ScreenBlock className="p4 screenbox p3 flex flex-col justify-center items-center">
            <div className='flex flex-1 flex-col w-full items-center justify-center'>
                <TextBlock className='destaque mb-8 text-4xl lg:text-8xl mt-20 white-text'>Parece que foi ontem!</TextBlock>
                <BigText className='text-2xl text-amber-50 white-text'>Mas já fazem...</BigText>
            </div>
            <div className='flex flex-1 w-full items-center justify-center'>
                <div className='flex flex-col w-full items-center justify-center bg-[rgba(255,255,255,0.60)]'>
                    <TextBlockGroup className='p-0 w-full lg:w-[50%] font-bold'>
                        <TextBlock className="flex flex-1">{elapsed.days}<span className='text-2xl'>Dias</span></TextBlock>
                        <TextBlock className="flex flex-1">{elapsed.hours}<span className='text-2xl'>Horas</span> </TextBlock>
                        <TextBlock className="flex flex-1">{elapsed.minutes}<span className='text-2xl'>Minutos</span> </TextBlock>
                        <TextBlock className="flex flex-1">{elapsed.seconds}<span className='text-2xl'>Segundos</span> </TextBlock>
                        {/* <TextBlock>Segundos: {date.seconds}</TextBlock> */}
                    </TextBlockGroup>
                </div>
            </div>
        </ScreenBlock>
    </>
}