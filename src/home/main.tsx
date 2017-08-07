import * as React from 'react'

export class MainComponent extends React.Component{
    render() {
        return (
            <header className='page-header' style={{ backgroundImage: `url(${require('img/page-header/index.jpg')})` }}>
                <h1 className='heading'>
                    The&nbsp;easiest&nbsp;way to&nbsp; <strong className='color'>find &amp; rent a&nbsp;boat</strong> for&nbsp;weekend</h1>
                <div className='search'>
                    <form action='index.html' method='GET'>
                        <fieldset className='space'>
                            <legend className='hidden'>Search</legend>
                            <span className='form-group'>
                                <select className='selectric' name='country'>
                                    <option value='' selected disabled>Country</option>
                                    <option value='cr'>Cyprus</option>
                                    <option value='eg'>Egypt</option>
                                    <option value='gr'>Greece</option>
                                    <option value='il'>Israel</option>
                                    <option value='it'>Italy</option>
                                    <option value='mo'>Monaco</option>
                                    <option value='mg'>Montenegro</option>
                                    <option value='pr'>Portugal</option>
                                    <option value='sm'>San Marino</option>
                                    <option value='es'>Spain</option>
                                    <option value='tr'>Turkey</option>
                                </select>
                            </span>
                            <span className='form-group'>
                                <select className='selectric' name='boat'>
                                    <option value='' selected disabled>Boat type</option>
                                    <option value='catamaran'>Catamaran</option>
                                    <option value='yacht'>Yacht</option>
                                    <option value='cruiser'>Cruiser</option>
                                </select>
                            </span>
                            <button className='submit' type='submit'>Search<span>&nbsp;now</span></button>
                        </fieldset>
                    </form>
                </div>
                <div className='powered-by'>
                    <img className='logo' src='img/boatpilot.png' width='80' height='80' alt='Powered by Boatpilot.me'/>
                    <p className='free'>BoatPilot is the first FREE interactive pilot and navigator! <br/><a className='more' href='http://boatpilot.me' target='_blank' title='BoatPilot.me - free navigator and interactive pilot for tablets'>Learn more</a></p>
                </div>
            </header>
        )
    }
}