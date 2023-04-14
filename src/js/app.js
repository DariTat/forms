import createPopover from './forms';

const button = document.querySelector('.btn');
createPopover(button.dataset.content);
