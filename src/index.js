import React from 'react';
import NumItem from './NumItem';
import styles from './index.less';

const unitKey = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
export default class extends React.Component {

  state = {
    numArr: [],
    count: 0
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { count } = nextProps;
    if(count !== prevState.count) {
      const arr = String(count).split('');
      return { count,  numArr: arr };
    }

    return null;
  }

  render() {
    const { numArr } = this.state;
    return (
      <div className={styles.numContainer}>
        {numArr.map((item, index) => {
          return (
            <NumItem key={index} num={Number(item)} {...this.props}/>
          )
        })}
      </div>
    )
  }
}