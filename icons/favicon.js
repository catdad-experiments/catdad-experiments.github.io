/* jshint browser: true */

//  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
//  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
//  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
//  <link rel="manifest" href="/manifest.json">
//  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f9aa3">

(function () {
  function icon(url, size) {
    var type = /\.svg$/.test(url) ? 'image/svg+xml' : 'image/png';

    var link = document.createElement('link');
    link.type = type;
    link.rel = 'icon';
    link.sizes = size;
    link.href = url;

    return link;
  }

  var head = document.querySelector('head');
  var fragment = document.createDocumentFragment();

  fragment.appendChild(icon('/icons/favicon.png'), '92x92');
  fragment.appendChild(icon('/icons/favicon.svg'), 'any');

  head.appendChild(fragment);
}());
