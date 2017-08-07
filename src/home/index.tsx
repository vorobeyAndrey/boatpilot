import * as React from 'react'
import { HeaderComponent } from '../layout'
import { MainComponent } from './main'

export class Home extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <HeaderComponent />
                <MainComponent />
                <main className='page'>
                    <article className='wrapper'></article>
                </main>
            </div>
        )
    }
}