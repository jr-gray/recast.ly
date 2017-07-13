class App extends React.Component {

	constructor(props) {
		super(props);
		this.onVideoClick = this.onVideoClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			vids: exampleVideoData[1],
			exampleVideoData: exampleVideoData,
			input: 'cat'
		};
	}

	componentDidMount() {
		this.props.searchYouTube({'query': 'red velvet', 'max': 5, 'key': YOUTUBE_API_KEY}, function(data) {
			this.setState({
				vids: data[0],
				exampleVideoData: data
			});
		}.bind(this));
	}

  handleClick(val) {
    this.props.searchYouTube({'query': val, 'max': 5, 'key': YOUTUBE_API_KEY}, function(data) {
			this.setState({
				vids: data[0],
				exampleVideoData: data
			});
		}.bind(this));
  }

	onVideoClick(video) {
		this.setState({
			vids: video
		});
	}

	render() {
		return (
      <div>
		    <Nav handleClick={this.handleClick} />
		    <div className="col-md-7">
		      <VideoPlayer video={this.state.vids}/>
		    </div>
		    <div className="col-md-5">
		      <VideoList videos={this.state.exampleVideoData} onVideoClick={this.onVideoClick} />
		    </div>
	 		</div>
		);
	}

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
