import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default class NumItem extends React.Component {

  state = {
    prevNum: 0,
    num: 0,
  }

  componentWillMount() {
    this.setState({
      prevNum: 0,
      num: this.props.num,
    }, () => this.changeNum())
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.num != this.props.num) {
      this.setState({
        prevNum: 0,
        num: nextProps.num,
      }, () => this.changeNum())
    }
  }
  
  changeNum = () => {
    const { timeQuantum = 300 } = this.props;
    const timer = setInterval(() => {
      const { prevNum, num } = this.state;
      if(prevNum < num) {
        this.animateNum(prevNum, prevNum + 1);
      } else {
        clearInterval(timer)
      }
    }, timeQuantum)
  }
    
  animateNum = () => {
    const { prevNum } = this.state;
    this.setState({
      prevNum: prevNum + 1
    })

  }

  render() {
    const { prevNum } = this.state;
    return (
      <div className={styles.cardContainer} key={prevNum}>
        <div className={classNames(styles.cardTop)}>
          <div className={classNames(styles.inside, styles.animate, styles[`card-${prevNum-1}`])}></div>
          <div className={classNames(styles.outside, styles.animate, styles[`card-${prevNum}`])}></div>
        </div>
        <div className={classNames(styles.cardBottom)}>
          <div className={classNames(styles.inside, styles.animate, styles[`card-${prevNum}`])}></div>
          <div className={classNames(styles.outside, styles.animate, styles[`card-${prevNum-1}`])}></div>
        </div>
      </div>
    )
  }
}