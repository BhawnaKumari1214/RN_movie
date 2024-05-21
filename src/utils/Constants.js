
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_OPTIONS_AUTH}`
    }
  };


export const Base_Url = "https://api.themoviedb.org/3/"; 

// export const videoParams = 'autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&enablejsapi=1&origin=http://yourdomain.com&start=40';

export const videoParams = 'autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&enablejsapi=1&origin=http://localhost:5173&end=110&loop=1&start=0';
// const videoParams = 'autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&enablejsapi=1&origin=http://localhost:5173&end=110&loop=1&start=0';


// const totalPageNo = 43840 ;
export const totalPageNo = 4 ;


  