import * as React from 'react'

export class HeaderComponent extends React.Component{
    render() {
        return (
           <header className='header'>
                   <div className='wrapper'>
            <h1 className='logo'><span>charter</span>.boatpilot.me</h1>
            <ul className='features'>
                <li><img className='icon' src={require('img/icons/globe.png')} width='31' height='31' alt=''/> Worldwide journeys</li>
                <li><img className='icon' src={require('img/icons/piggy.png')} width='31' height='31' alt=''/> Only best&nbsp;price</li>
                <li><img className='icon' src={require('img/icons/guaranty.png')} width='31' height='31' alt=''/> Satisfaction guaranty</li>
            </ul>
            <ul className='language'>
                <li className='active'><a href='?lang=en' data-icon='us'>En</a></li>
                <li><a href='?lang=de' data-icon='de'>De</a></li>
                <li><a href='?lang=ru' data-icon='ru'>Ru</a></li>
            </ul>
        </div> 
           </header>
        )
    }
}