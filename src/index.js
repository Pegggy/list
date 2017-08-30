import _ from 'lodash';
import $ from 'jquery';

function component() {
  var element = $('<div></div>');
  // Lodash, now imported by this script
  element.html(_.join(['Hello', 'PenFan'], ' ')) ;

  return element.get(0);
}

document.body.appendChild(component());