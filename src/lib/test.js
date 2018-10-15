/* eslint-env browser */
const say = function () {
  const div = document.createElement('div');
  const body = document.getElementById('body');
  div.style.background = '#330099';
  div.innerHTML = '<p>Some text</p>';
  body.appendChild(div);
};
export default say;
