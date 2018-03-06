import fetch from 'cross-fetch'

export const REQUEST_IMG = 'REQUEST_IMG'
export const RECEIVE_IMG = 'RECEIVE_IMG'
export const REQUEST_ERROR = 'REQUEST_ERROR'

export const requestImages = tags => {
  return {
    type: REQUEST_IMG,
    tags
  }
}

export function receiveImages(tags, json) {
  return {
    type: RECEIVE_IMG,
    tags,
    payload: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    error
  }
}

export function fetchImages(tags) {
  return dispatch => {
    dispatch(requestImages(tags))
    return fetch('https://api.flickr.com/services/feeds/photos_public.gne?'+tags)
      .then(response => response.json())
      .then(json => dispatch(receiveImages(tags, json)))
      .catch(error => dispatch(requestError(error)))
  }
}
