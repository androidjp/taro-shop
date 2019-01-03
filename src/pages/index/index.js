import Taro, {Component} from '@tarojs/taro';
import {View, Button, Text} from '@tarojs/components';
import {connect} from '@tarojs/redux';

import {add, minus, asyncAdd} from '../../actions/counter';

import './index.less';
import {AtList, AtListItem, AtSearchBar, AtTabBar} from 'taro-ui';
import Product from '../../components/product';


@connect(({counter}) => ({
  counter,
}), (dispatch) => ({
  add () {
    dispatch(add());
  },
  dec () {
    dispatch(minus());
  },
  asyncAdd () {
    dispatch(asyncAdd());
  },
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };
  productList = [
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
    {
      img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1546486606&di=8fdfd9a33325c5d9c34d4ba1b53ea2a0&src=http://pic.baike.soso.com/p/20140122/20140122131459-1547906067.jpg',
      title: '雪糕',
      price: 3.50,
    },
  ];


  constructor () {
    super();
    this.state = {
      value: '',
    };
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount () {
  }

  componentDidShow () {
  }

  componentDidHide () {
  }

  onSearchChange () {

  }

  render () {
    return (
      <View className='index'>

        <AtSearchBar
          value={this.state.value}
          onChange={this.onSearchChange.bind(this)}
        />

        <View style={{marginBottom: '60px'}}>
          <AtList>
            {
              this.productList.map((item, index) => {
                return (<View key={index} style={{margin: '8px'}}><Product title={item.title} img={item.img}
                                                                           price={item.price}/></View>);
              })
            }
          </AtList>
        </View>

        <AtTabBar
          fixed
          tabList={[
            {title: '待办事项', iconType: 'bullet-list', text: 'new'},
            {title: '拍照', iconType: 'camera'},
            {title: '我的', iconType: 'user', text: '100', max: '99'},
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Index;
