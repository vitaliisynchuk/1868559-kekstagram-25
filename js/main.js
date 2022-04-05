import './data.js';
import './util.js';
import {createSimilarMiniatures} from './miniature.js';
import {createBigPicture} from './big-picture.js';
import {generateMorePosts} from './data.js';

const posts = generateMorePosts();
createBigPicture(posts);
createSimilarMiniatures(posts);
