import React, { Component } from 'react';
import styles from './index.less';
// import { ChartCard, MiniBar } from '@/components/Charts';
import {Tooltip, Icon} from 'antd';
import { Result } from 'ant-design-pro';
import {ChartCard, MiniBar} from 'ant-design-pro/lib/Charts';
import MenuSlider from '../components/menusSlider';
import {visitData} from '../utils/homeConfig';

class homePage extends Component {
  render() {
    return (
      <div className={styles['home-box']}>
        <div className={styles['home-continer']}>
            <ChartCard
              title="支付笔数"
              action={
                <Tooltip title="支付笔数反应交易质量">
                  <Icon type="exclamation-circle-o" />
                </Tooltip>
              }
              total="6,500"
              contentHeight={46}
            >
              <MiniBar height={46} data={visitData} />
            </ChartCard>
        </div>
      
      </div>
    );
  }
}
const HomeSlider = MenuSlider(homePage)('homeSlider');
export default HomeSlider;
