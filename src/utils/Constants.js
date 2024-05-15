
export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_OPTIONS_AUTH}`
    }
  };

// export const Base_Url = "https://api.themoviedb.org/3/discover/movie";
export const Base_Url = "https://api.themoviedb.org/3/"; 

export const specification = "include_adult=false&language=en-US&page=1"

// const totalPageNo = 43840 ;
export const totalPageNo = 4 ;


  