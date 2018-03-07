import $ from 'jquery';

export const FETCH_IMG = 'FETCH_IMG'
export const FETCH_IMG_PENDING = 'FETCH_IMG_PENDING'
export const FETCH_IMG_FULFILLED = 'FETCH_IMG_FULFILLED'
export const FETCH_IMG_REJECTED = 'FETCH_IMG_REJECTED'


export function fetchPending(tags) {
  return {
    type: FETCH_IMG_PENDING,
    tags
  }
}

export function fetchFulfilled(tags, json) {
  return {
    type: FETCH_IMG_FULFILLED,
    tags,
    payload: json,
    receivedAt: Date.now()
  }
}

export function fetchRejected(error) {
  return {
    type: FETCH_IMG_REJECTED,
    error
  }
}

export function fetchImages(tags) {
  return dispatch => {
    dispatch(fetchPending(tags))
    return $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',{format: "json",tags:tags})
      .then(json => json.items.map(obj => {
        let rObj = {}
        rObj['title'] = obj.title
        rObj['link'] = obj.media.m
        return rObj
      }))
      .then(json => dispatch(fetchFulfilled(tags, json)))
      .catch(error => dispatch(fetchRejected(error)))
  }
}

// export function fetchImages(tags){
//   return {
//     type: FETCH_IMG,
//     payload: $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',{format: "json",tags:tags}),
//   }
// }
