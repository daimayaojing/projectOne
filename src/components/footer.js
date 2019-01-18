import React,{Component} from 'react';
import styles from './footer.less'

class Footer extends Component{
    render(){
        const {children} = this.props;
        return(
            <div className={styles['footer-box']}>
                前端语言整理系统尾部研发中心
            </div>
            
        )
    }
}

export default Footer;