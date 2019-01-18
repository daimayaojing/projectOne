import React,{Component,Fragment} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import styles from './index.less';

class App extends Component{
    render(){
        const {children} = this.props;
        return(
            <Fragment>
                <Header></Header>
                <div className='container'>
                    <div className={styles['breadChrum']}>我是面包屑暂时不出现</div>
                    {children}
                </div>
                <Footer></Footer>
            </Fragment>
            
        )
    }
}

export default App;