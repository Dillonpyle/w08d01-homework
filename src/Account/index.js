import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    }



  }



  handleDeposit = e => {
    e.preventDefault();
    const amount = parseInt(this.inputBox.value, 10);
    const newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }

  handleWithdraw = e => {
    e.preventDefault();
    if (!this.inputBox.value.length) {
      alert('you must enter a value')
    } else {
      if (this.state.balance - this.inputBox.value <= 0) {
        alert('you dont have money')
      }
      else {
        const amount = parseInt(this.inputBox.value, 10);
        const newBalance = this.state.balance - amount;
        this.setState({
          balance: newBalance
        })
        this.inputBox.value = '';
      }

    }

  }



  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }


    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>"
        <input type="text" placeholder="enter an amount" name="inputBox" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={this.handleDeposit} />
        <input type="button" value="Withdraw" onClick={this.handleWithdraw} />
      </div>
    )
  }
}

export default Account;
