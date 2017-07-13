class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		}
	}

	handleChange(e) {
		this.setState({ input: e.target.value });
  }

  render() {
  	let _t = this;
  	return (
		  <div className="search-bar form-inline">
		    <input className="form-control" type="text" onChange={this.handleChange.bind(this)} />
		    <button className="btn hidden-sm-down" id="current" onClick={function() {_t.props.handleClick(_t.state.input)}}>
		      <span className="glyphicon glyphicon-search"></span>
		    </button>
		  </div> 
		)
  }


}




// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" onChange={props.handleChange.bind(this)} />
//     <button className="btn hidden-sm-down" onClick={props.handleClick.bind(this)} >
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
