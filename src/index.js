class UnsplashSourceES6 {
  constructor() {
    this.url = 'https://source.unsplash.com';
    this.collection;
    this.weekly;
    this.daily;
    this.search;  // ?term or ?term1,term2
  }

  // get Image by its ID
  id(photoId) {
    this.photoId = photoId;

    return this;
  }

  // get image by category
  category(category) {
    // only allowed categories are buildings, food, nature, people, technology, objects
    this.section = category;

    return this;
  }

  // get random image from a user
  user(user) {
    this.username = user;

    return this;
  }

  // sets the photo dimension, if only one parameter is given, height is taken same as width
  size(width, height = width) {
    this.dimension = {
      width: width,
      height: height
    };

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
  fetch() {
    if (this.photoId) {
      this.url += `/${this.photoId}`;
    }
    else if (this.section) {
      this.url += `/category/${this.section}`;
    }
    else if (this.username) {
      this.url += `/user/${this.username}`;
    }
    else {
      this.url += '/random';
    }
    this._addDimensions();
    return this.url;
  }
}

export default UnsplashSourceES6;
