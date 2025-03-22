import BigText from "../../atoms/big-text/big-text";
import LittleWhiteText from "../../atoms/little-white-text/little-white-text";
import ScreenBlock from "../../atoms/screenblock/screenblock";
import SepiaMask from "../../atoms/sepia-mask/sepia-mask";
import TextBlock from "../../atoms/text-block/text-block";
import './horizon.css'


export default function P3() {

    return <>
        <ScreenBlock className='screenbox p3 flex flex-col justify-center items-center'>
            <SepiaMask>
                <div className='flex flex-1 flex-col lg:flex-row w-full items-center justify-center'>
                    <div className="flex lg:flex-1/2  sm:flex-1/2 flex-col items-center justify-center">
                        <TextBlock className='white-text destaque mb-8 text-4xl lg:text-8xl mt-10'>Local e Horário</TextBlock>
                        <LittleWhiteText className="text-4xl">Paraíso Verde Festas</LittleWhiteText>
                        <BigText className='white-text'>16:30h</BigText>
                        <LittleWhiteText className="text-2xl">Rua Dr. Álvaro Camargos, 514</LittleWhiteText>
                        <LittleWhiteText className="text-2xl">Bairro São João Batista | Belo Horizonte - MG</LittleWhiteText>
                        <LittleWhiteText className="text-3xl">CEP: 31515-200</LittleWhiteText>
                    </div>
                </div>
            </SepiaMask>
        </ScreenBlock>
    </>
}