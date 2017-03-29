class UnsplashSourceES6 {
  constructor() {
    this.url = 'https://source.unsplash.com';
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

  // get a liked image from a user
  liked(user) {
    this.username = user;
    this.likes = true;

    return this;
  }

  // get a random image from a collection
  collection(collectionId) {
    this.collectionId = collectionId;

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

  // sets the change frequency of image
  frequency(freq) {
    if (freq === 'daily' || freq === 'weekly') {
      this.freq = freq;
    }
    else {
      console.error(`Unsplash allows frequency to be 'daily' or 'weekly' only, found ${freq}`);
    }

    return this;
  }

  // adds search tags
  search(tags) {
    // using spread operator so that the API can't accidentally modify the passed array object
    if (Array.isArray(tags)) {
      this.tags = [...tags];
    }
    else {
      console.error('search() API expects array');
    }

    return this;
  }

  // add this.dimension (dimensions) to the url
  _addDimensions() {
    if (this.hasOwnProperty('dimension')) {
      this.url += '/' + this.dimension.width + 'x' + this.dimension.height;
    }

    return this;
  }

  // adds this.freq to the url
  _addFreq() {
    if (this.freq) {
      this.url += `/${this.freq}`;
    }

    return this;
  }

  // adds the tags from the array to the end of url
  _addTags() {
    if (this.tags) {
      this.url += '/?' + this.tags.reduce(
        (all, tag) => `${all},${tag}`
      );
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
      if (this.likes) {
        this.url += '/likes';
      }
    }
    else if (this.collectionId) {
      this.url += `/collection/${this.collectionId}`;
    }
    else {
      this.url += '/random';
    }
    this._addDimensions();
    this._addFreq();
    this._addTags();

    return this.url;
  }
}

export default UnsplashSourceES6;
