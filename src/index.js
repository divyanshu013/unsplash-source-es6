class UnsplashSourceES6 {
  constructor() {
    this.url = 'https://source.unsplash.com';
    this.category;
    this.user;  // user and likes
    this.collection;
    this.weekly;
    this.daily;
    this.search;  // ?term or ?term1,term2
    this.specifiphoto;
  }

  // get Image by its ID
  id(photoId) {
    this.photoId = photoId;

    return this;
  }

  // sets the photo dimension, if only one parameter is given, height is taken same as width
  size(width, height = width) {
    this.dimension.width = width;
    this.dimension.height = height;

    return this;
  }

  // add this.dimension (dimensions) to the url
  _addDimensions() {
    if (this.hasOwnProperty('dimension')) {
      this.url += '/' + this.dimension.width + 'x' + this.dimension.height;
    }

    return this;
  }

  // get the Image URL
  getURL() {
    if (this.photoId) {
      this.url += '/' + this.photoId;
    }
    else {
      this.url += '/random';
    }
    this._addDimensions();
    return this.url;
  }
}

export default UnsplashSourceES6;
