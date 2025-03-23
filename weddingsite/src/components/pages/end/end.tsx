import DefaultButton from '../../atoms/default-button/default-button';
import LittleWhiteText from '../../atoms/little-white-text/little-white-text';
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

function copiarLink() {
    const textoParaCopiar = "a38002a7-a1ac-4ccf-a698-78831a0160a8"; // Substitua pelo seu link


    const nav = window.navigator;
    if (nav.clipboard) {
        nav.clipboard.writeText(textoParaCopiar);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        const textarea = document.createElement("textarea");
        textarea.value = textoParaCopiar;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    const el = document.getElementById('text-copied');
    if (el) {
        el.innerHTML = 'Chave aleatória copiada!';
    }
}

export default function P5() {
    return <>
        <ScreenBlock className='p5 flex flex-col justify-center items-center w-full h-full'>
            <SepiaMask className='flex justify-center items-center flex-col'>
                <div className="flex flex-col flex-1 justify-end items-center text-center w-full pb-10">
                    <DefaultButton onClick={gotoGiftList}> Lista de presentes </DefaultButton>
                    <DefaultButton onClick={goToConfirmationList}> Confirmar Presença </DefaultButton>
                    <LittleWhiteText className='text-2xl'>Quer nos dar um Presente em PIX? </LittleWhiteText>
                    <DefaultButton onClick={copiarLink}> Copiar Chave PIX </DefaultButton>
                    <LittleWhiteText id={"text-copied"}></LittleWhiteText>
                </div>
            </SepiaMask>
        </ScreenBlock>
    </>
}