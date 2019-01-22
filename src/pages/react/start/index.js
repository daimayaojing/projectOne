import React, { Component } from 'react';
import styles from './index.less';
import { Tooltip, Icon } from 'antd';
import { Result } from 'ant-design-pro';
import { Bar, Pie, Radar, ChartCard, MiniArea } from 'ant-design-pro/lib/Charts';
import MenuSlider from '../../../components/menusSlider';
import { visitData } from '../../../utils/homeConfig';
import moment from 'moment';

class homePage extends Component {
  render() {
    const salesData = [];
    const radarData = [];
    const radarOriginData = [
      {
        name: '个人',
        ref: 10,
        koubei: 8,
        output: 4,
        contribute: 5,
        hot: 7,
      },
      {
        name: '团队',
        ref: 3,
        koubei: 9,
        output: 6,
        contribute: 3,
        hot: 1,
      },
      {
        name: '部门',
        ref: 4,
        koubei: 1,
        output: 6,
        contribute: 5,
        hot: 7,
      },
    ];

    for (let i = 0; i < 6; i += 1) {
      salesData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }

    const radarTitleMap = {
      ref: '引用',
      koubei: '口碑',
      output: '产量',
      contribute: '贡献',
      hot: '热度',
    };

    radarOriginData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key !== 'name') {
          radarData.push({
            name: item.name,
            label: radarTitleMap[key],
            value: item[key],
          });
        }
      });
    });

    const visitData = [];
    const beginDay = new Date().getTime();
    for (let i = 0; i < 20; i += 1) {
      visitData.push({
        x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
    return (
      <div className={styles['home-box']}>
        <div className={styles['chart-one']}>
          <Bar height={180} title="React阅读量" data={salesData} />
        </div>
        <div className={styles['chart-two']}>
          <Pie percent={82} subTitle="antd市场使用率82%" height={140} />
        </div>
        <div className={styles['chart-three']}>
          <MiniArea line color="#cceafe" height={145} data={visitData} />
        </div>
        <div className={styles['chart-four']}>
          <ChartCard title="Vue使用比列">
            <Radar hasLegend height={180} data={radarData} />
          </ChartCard>
        </div>
        <div className={styles['chart-five']}>789413</div>
      </div>
    );
  }
}
const HomeSlider = MenuSlider(homePage)('homeSlider');
export default HomeSlider;
