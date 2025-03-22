import BigText from '../../atoms/big-text/big-text'
import ScreenBlock from '../../atoms/screenblock/screenblock'
import SepiaMask from '../../atoms/sepia-mask/sepia-mask';

import './end.css';

function gotoGiftList() {
    const url = 'https://www.mercadolivre.com.br/presentes/charlen-e-mirla-z4cwt?utm_source=link_criado&utm_medium=social';
    window.open(url, '_blank');
}

function goToConfirmationList() {
    const url = 'https://forms.gle/ZabC27m5FyUoKk6HA';
    window.open(url, '_blank');
}


export default function P5() {
    return <>
        <ScreenBlock className='p5 flex flex-col justify-center items-center w-full h-full'>
            <SepiaMask className='flex flex-1 justify-center items-center flex-col'>
                <div className="sm:w-full w-full flex sm:max-w-[80%] text-center justify-center items-center cursor-pointer link" onClick={gotoGiftList}>
                    <BigText className="text-2xl"> Lista de presentes </BigText>
                </div>
                <div className="sm:w-full w-full flex sm:w-max[80%] flex-row text-center justify-center items-center cursor-pointer link" onClick={goToConfirmationList}>
                    <BigText> Confirmar Presença </BigText>
                </div>
            </SepiaMask>
        </ScreenBlock>
    </>
}