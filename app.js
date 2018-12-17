const ValidationMessage = props => {
  const { txt } = props;
  return <p>{txt}</p>;
};

const OrderForm = props => {
  const { submit, checked, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={checked} />
      <label htmlFor="age"> I am at least 16 years old.</label>
      <br />
      <button type="submit">Buy ticket</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isChecked: false,
    isFormSubmitted: false
  };
  handleCheckboxChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
      isFormSubmitted: false
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isChecked) {
        return <ValidationMessage txt="You can watch the movie. Enjoy!" />;
      } else {
        return (
          <ValidationMessage txt="You can not watch the movie. You are under 16!" />
        );
      }
    } else {
      return null;
    }
  };
  render() {
    const { isChecked, isFormSubmitted } = this.state;
    // console.log(this.state.isChecked);
    return (
      <React.Fragment>
        <h1>Buy a ticket for horror of the year!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isChecked}
        />
        {this.displayMessage()}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
