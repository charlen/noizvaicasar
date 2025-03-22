import QuotedText from "../../atoms/quoted-text/quoted-text";
import ScreenBlock from "../../atoms/screenblock/screenblock";
import SepiaMask from "../../atoms/sepia-mask/sepia-mask";
import TextBlock from "../../atoms/text-block/text-block";
import './invite.css'

export default function P2() {
    return <>
        <ScreenBlock className='screenbox p2 flex flex-col'>
            <SepiaMask>
                <QuotedText className="text-justify text-lg lg:text-1xl p-0 max-w-[800px] lg:p-8 sm:p-0">
                    <TextBlock className="text-left destaque white-text lg:text-8xl pb-[1rem] w-full">Nosso Convite Especial</TextBlock>
                    
                    <p className='white-text'>
                    <span className="big-quotes text-left">"</span>Você está convidado a participar do maior capítulo da nossa história, a nossa festa e cerimônia de casamento.
                    </p>
                    <p className='white-text'>
                        Se você está recebendo esse convite, é porque você faz parte da nossa história. Dentre tantas pessoas incríveis, você foi selecionada para o momento mais importante das nossas vidas.
                    </p>
                    <p className='white-text'>
                        Você é mais do que um convidado, é uma testemunha da nossa amorosa jornada. Vamos juntos celebrar com risadas, lágrimas e amor incondicional!
                    </p>
                    <p className='white-text'>
                        Vamos criar novos sonhos, compartilhar histórias e reafirmar a nossa promessa de amar até o fim.
                    </p>
                    <p className='white-text'>
                        Por favor, venha nos receber com os seus sorrisos e amor. Estamos ansiosos para celebrar com você e criar mais memórias inesquecíveis!<br/>&nbsp;
                    <span className="big-quotes text-right"><br/>"</span>
                    </p>
                    <p className='white-text text-right w-full'>
                        Com carinho. <br/>Mirla & Charlen
                    </p>
                </QuotedText>
            </SepiaMask>
        </ScreenBlock>
    </>
}