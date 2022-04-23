import './data.js';
import './util.js';
import './upload-form.js';
import {createSimilarMiniatures} from './miniature.js';
import {generateMorePosts} from './data.js';
import { openForm } from './upload-form.js';
import { closeForm } from './upload-form.js';

const posts = generateMorePosts();
createSimilarMiniatures(posts);
openForm();
closeForm();
