import './index.scss';

export default function Header() {

    return (
        <div className='header-main'>
            <h1>João Paulo</h1>
            <div>
                <div className='link-box'>
                    <a>Home</a>
                </div>
                <div className='link-box'>
                    <a>Projects</a>
                    <div className='dialog-box'>
                        <a>Ecommerce</a>
                        <a>Locadora de veículos</a>
                        <a>Chat</a>
                    </div>
                </div>
                <div className='link-box'>
                    <a>Mini Games</a>
                    <div className='dialog-box'>
                        <a>BlackJack</a>
                        <a>Forca</a>
                    </div>
                </div>
                <div className='link-box'>
                    <a>Notion</a>
                    <div className='dialog-box'>
                        <a>React</a>
                        <a>API e MySql</a>
                        <a>Algorithms</a> 
                    </div>
                </div>
                <div className='link-box'>
                    <a>Resume</a>
                </div>
                <div className='link-bigger-box'>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
}
