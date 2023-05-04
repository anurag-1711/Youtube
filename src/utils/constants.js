const GOOGLE_API_KEY = "AIzaSyDK8nbDoO9T1npbHejvzKGhCddyhexW4KM";
const RAPID_API_KEY = '807aa43331msh0eba1904654da5bp15c97fjsnb5e96e3a8d73'


export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const LIVE_CHAT_COUNT = 200;

// export const YOUTUBE_SEARCH_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&regionCode=IN&key=" +
//     GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_VIDEOS_API = "https://youtube-v3-alternative.p.rapidapi.com/search?geo=IN&maxResults=30&lang=en&type=video&rapidapi-key=" +
    RAPID_API_KEY;




