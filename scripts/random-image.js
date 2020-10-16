'use strict';

module.exports.randomImage = function (hexo) {
  hexo.extend.helper.register('random_image', function () {
    var config = hexo.theme.config;
    var data = hexo.locals.get('data');
    var res = config.post_image.default;
    if (config.post_image.random && data.galleries) {
      var galleries = data.galleries;
      var images = [];
      for (var item of galleries) {
        item.photos.forEach(function (item) {
          images.push(item);
        });
      }
      var count = images.length;
      res = images[Math.floor(Math.random() * (count + 1))];
    }
    return res;
  });
}