/**
 *
 * share.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-11
 * @update 2014-12-11
 */

(function () {

  'use strict';

  var S = {
    one: function (selector) {
      return document.querySelector(selector);
    },

    all: function (selector) {
      return document.querySelectorAll(selector);
    }
  };

  ({

    init: function () {

      this.wrapper = S.one('#wrapper');
      this.currentSlide = S.one('.current');
      this.prevSlide = S.one('.prev');
      this.nextSlide = S.one('.next');

      this.bindEvent();

    },

    bindEvent: function () {

      var _this = this;

      document.addEventListener('keydown', function (e) {
        var code = e.keyCode;

        // 空格
        if (code == 32) {
          _this.switchSlide();
        }

      });

      document.addEventListener('touchend', function () {
        _this.switchSlide();
      });
    },

    switchSlide: function () {
      var _this = this;

      _this.wrapper.classList.add('active');

      // 有前一张
      if (_this.prevSlide) {
        _this.prevSlide.classList.remove('prev');
        _this.prevSlide.classList.add('hidden');
      } else {

      }

      // 还有后一张的话
      if (_this.nextSlide !== null) {
        // 当前的变成prev
        _this.currentSlide.classList.remove('current');
        _this.currentSlide.classList.add('prev');
        // 后一张变成当前一张
        _this.nextSlide.classList.remove('next');
        _this.nextSlide.classList.add('current');

        // 没有更多了
        if (_this.nextSlide.nextElementSibling !== null) {
          _this.nextSlide.nextElementSibling.classList.remove('hidden');
          _this.nextSlide.nextElementSibling.classList.add('next');

          _this.prevSlide = _this.currentSlide;
          _this.currentSlide = _this.nextSlide;
          _this.nextSlide = _this.nextSlide.nextElementSibling;
        }
      }

      setTimeout(function () {
        _this.wrapper.classList.remove('active');
      }, 500);
    }

  }).init();

})();