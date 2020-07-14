import React from 'react'

import styles from './index.less'
import ReactDOM from 'react-dom'

export interface LoadingProps {

}

export interface LoadingState {
    show?: boolean;
}

class Loading extends React.Component<LoadingProps, LoadingState> {
    constructor(props: LoadingProps) {
        super(props)
        this.state = {
            show: false,
        }
    }

    loading() {
        this.setState({ show: true })
    }

    close() {
        this.setState({ show: false })
    }

    render() {
        const { show } = this.state
        return (
            <div className={styles.loading_box} style={{ display: show ? 'flex' : 'none' }}>
                <div className={styles.wrapper}>
                    <i/>
                    <span>加载中</span>
                </div>
            </div>
        )
    }
}


let div = document.createElement('div')
let props: any = {}
document.body.appendChild(div)

let LoadingCom = ReactDOM.render(React.createElement(Loading, props), div)

export default LoadingCom
