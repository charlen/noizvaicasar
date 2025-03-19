import './App.css'
import MainPage from './components/pages/main/main-page'
import P1 from './components/pages/p1/p1'
// import P2 from './components/pages/p2/p2'
// import P3 from './components/pages/p3/p3'
// import P4 from './components/pages/p4/p4'
// import P5 from './components/pages/p5/p5'

export default function App() {



    return <div className='app flex flex-col items-center justify-center w-[100%]'>
        <MainPage className='w-[100%]'>
            <P1 />
            {/* <P2 />
            <P3 />
            <P4 />
            <P5 /> */}
        </MainPage>
    </div>
}