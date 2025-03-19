import ScreenBlock from "../../atoms/screenblock/screenblock";
import './p2.css'

export default function P2(){
    return <>
            <ScreenBlock className='screenbox p2 flex flex-col'>
                <div className='lg:text-2xl sm:text-sm font-bold flex flex-1/2 flex-col lg:w-[50%] bg-[rgba(0,0,0,0.50)] p-5 '>
                <div className=''> Nosso Convite Especial</div>
                    <p className='white-text'>
                        Você está convidado(a) a participar do maior capítulo da nossa vida...
                    </p>
                    <p className='white-text'>
                        Se você está recebendo esse convite, é porque você faz parte da nossa história. Dentro de tantas pessoas incríveis, você foi selecionada para o momento mais importante da nossa vida.
                    </p>                    
                    <p className='white-text'>
                        Você é mais do que um convidado, é um testemunho da nossa amorosa jornada. Vamos juntos celebrar com risadas, lágrimas e amor incondicional!
                    </p>
                    <p className='white-text'>
                        Vamos criar novos sonhos, compartilhar histórias e reafirmar a nossa promessa de amar até o fim.
                    </p>
                    <p className='white-text'>                   
                        Por favor, venha nos receber com os seus sorrisos e amor. Estamos ansiosos para celebrar com você e criar mais memórias inesquecíveis!
                    </p>
                    <p className='white-text'>
                        Com carinho, Mirla & Charlen
                    </p>
                </div>
            </ScreenBlock>    
    </>
}