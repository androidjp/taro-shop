import Taro, {Component} from '@tarojs/taro'
import {AtCard} from 'taro-ui';
import {View, Image} from '@tarojs/components';
import './index.less'

class Product extends Component {
  render () {
    return (
      <AtCard title={this.props.title} extra={'$' + this.props.price}>
        <View className='product-body'>
          <Image src={this.props.img} className='product-img'/>
        </View>
      </AtCard>
    );
  }
}

export default Product;
