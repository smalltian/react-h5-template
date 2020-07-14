import React, { useEffect } from 'react'
import { connect, ConnectProps } from 'umi'
import { ConnectState } from './model'
import styles from './index.less'

export interface DemoTestProps extends Partial<ConnectProps> {

}

const DemoTest: React.FC<DemoTestProps> = props => {

    return (
        <div>
            <h1 className={styles.demo_test}>DemoTest</h1>
        </div>
    )
}

export default connect(({ demoTest }: ConnectState) => ({ data: demoTest.data }))(DemoTest)

