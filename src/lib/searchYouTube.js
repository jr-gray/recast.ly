var searchYouTube = (options, callback) => {

	let base = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
	let query = '&q=' + options.query;
	let max = '&maxResults=' + options.max;
  let embed = '&type=video&videoEmbeddable=true';
	let key = '&key=' + options.key;

  $.ajax({
      url: base + query + max + embed + key,
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        callback(data.items);
      },
      error: function (data) {
        console.error('Recastly: Failed to send message', data);
      }
    });
};

window.searchYouTube = searchYouTube;
