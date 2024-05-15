import { Base_Url, options, specification } from "./Constants";


export const fetchData = ( url , setter ) => {
    fetch(`${Base_Url}/${url}?${specification}`, options)
      .then((res) => res.json() )
      .then((res) => {
        console.log(res)
        // setter((p) => [...new Set([...(p || [] ), res.results ])] )
        setter(res)
      })
      .catch((e) => console.log(e));
}
