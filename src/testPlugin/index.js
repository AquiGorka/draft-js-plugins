import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';

const hashtagPlugin = (config) => ({
  compositeDecorators: [
    { // standard plugin property
      strategy: hashtagStrategy,
      component: (config !== undefined && config.Hashtag !== undefined ? config.Hashtag : Hashtag),
    },
  ],
  Hashtag,
});

export default hashtagPlugin;
