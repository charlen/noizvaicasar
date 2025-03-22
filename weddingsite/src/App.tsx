import './App.css'
import MainPage from './components/pages/main/main-page'
import CountDown from './components/pages/countdown/countdown'
import Invite from './components/pages/invite/invite'
import Ourstart from './components/pages/ourstart/ourstart'
import Horizon from './components/pages/horizon/horizon'
import End from './components/pages/end/end'

export default function App() {



    return <div className='app flex flex-col items-center justify-center w-[100%]'>
        <MainPage className='w-[100%]'>
            <CountDown />
            <Invite />
            <Ourstart />
            <Horizon />
            <End />
        </MainPage>
    </div>
}