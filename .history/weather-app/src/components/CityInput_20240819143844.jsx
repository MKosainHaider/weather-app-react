import React from "react";

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.city.trim()) {
      this.props.onCityChange(this.state.city);
    }
  };

  render() {
    return (
      <div className="mb-8">
        <form
          onSubmit={this.handleSubmit}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleInputChange}
            placeholder="Enter city name"
            className="w-64 p-3 mb-4 text-center border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
          >
            Get Weather
          </button>
        </form>
      </div>
    );
  }
}

export default CityInput;
