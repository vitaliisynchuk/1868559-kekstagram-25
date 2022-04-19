import './data.js';
import './util.js';
import './upload-form.js';
// import './comments-loader.js';
import {createSimilarMiniatures} from './miniature.js';
import {createBigPicture} from './big-picture.js';
import {generateMorePosts} from './data.js';
import { openForm } from './upload-form.js';
import { closeForm } from './upload-form.js';

const posts = generateMorePosts();
createBigPicture(posts);
createSimilarMiniatures(posts);
openForm();
closeForm();
