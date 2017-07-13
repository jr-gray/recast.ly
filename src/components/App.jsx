class App extends React.Component {
	constructor() {
		super();
		searchYouTube({'query': 'red velvet', 'max': 5, 'key': 'AIzaSyCZnKznIq99IDHH4EaFnJi-vVtTZgg72K0'});
		this.onVideoClick = this.onVideoClick.bind(this);
		this.state = {
			vids: exampleVideoData[1]
		};
	}

	onVideoClick(video) {
		this.setState({
			vids: video
		});
	}

	render() {
		return (
      <div>
		    <Nav />
		    <div className="col-md-7">
		      <VideoPlayer video={this.state.vids}/>
		    </div>
		    <div className="col-md-5">
		      <VideoList videos={exampleVideoData} onVideoClick={this.onVideoClick} />
		    </div>
	 		</div>
		);
	}

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
