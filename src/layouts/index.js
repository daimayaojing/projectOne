import withRouter from 'umi/withRouter';
import App from './app';

export default withRouter(({children})=>{
  return <App>{children}</App>
})