$(function () {

  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 80;
    $('body,html').animate({ scrollTop: top }, 1200);

  });


  $('.slider__inner').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  }).on('breakpoint', function () {

    $('[data-fancybox^="quick-view"]').fancybox({
      animationEffect: "fade",
      animationDuration: 300,
      margin: 0,
      gutter: 0,
      touch: {
        vertical: false
      },
      baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
        '<div class="fancybox-bg"></div>' +
        '<div class="fancybox-inner">' +
        '<div class="fancybox-stage"></div>' +
        '<div class="fancybox-form-wrap">' +
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<svg viewBox="0 0 40 40">' +
        '<path d="M10,10 L30,30 M30,10 L10,30" />' +
        '</svg>' +
        '</button></div>' +
        '</div>' +
        '</div>',
      onInit: function (instance) {
        var current = instance.group[instance.currIndex];
        instance.$refs.form = current.opts.$orig.parent().find('.product-form');

        instance.$refs.form.appendTo(instance.$refs.container.find('.fancybox-form-wrap'));

        var list = '',
          $bullets;

        for (var i = 0; i < instance.group.length; i++) {
          list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + '</span></a></li>';
        }

        $bullets = $('<ul class="product-bullets">' + list + '</ul>').on('click touchstart', 'a', function () {
          var index = $(this).data('index');

          $.fancybox.getInstance(function () {
            this.jumpTo(index);
          });

        });

        instance.$refs.bullets = $bullets.appendTo(instance.$refs.stage);

      },
      beforeShow: function (instance) {

        instance.$refs.stage.find('ul:first')
          .children()
          .removeClass('active')
          .eq(instance.currIndex)
          .addClass('active');

      },
      afterClose: function (instance, current) {

        instance.$refs.form.appendTo(current.opts.$orig.parent());

      }

    });
  });

  $('[data-fancybox^="quick-view"]').fancybox({
    animationEffect: "fade",
    animationDuration: 300,
    margin: 0,
    gutter: 0,
    touch: {
      vertical: false
    },
    baseTpl:
      '<div class="fancybox-container" role="dialog" tabindex="-1">' +
      '<div class="fancybox-bg"></div>' +
      '<div class="fancybox-inner">' +
      '<div class="fancybox-stage"></div>' +
      '<div class="fancybox-form-wrap">' +
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
      '<svg viewBox="0 0 40 40">' +
      '<path d="M10,10 L30,30 M30,10 L10,30" />' +
      '</svg>' +
      '</button></div>' +
      '</div>' +
      '</div>',
    onInit: function (instance) {
      var current = instance.group[instance.currIndex];
      instance.$refs.form = current.opts.$orig.parent().find('.product-form');

      instance.$refs.form.appendTo(instance.$refs.container.find('.fancybox-form-wrap'));

      var list = '',
        $bullets;

      for (var i = 0; i < instance.group.length; i++) {
        list += '<li><a data-index="' + i + '" href="javascript:;"><span>' + (i + 1) + '</span></a></li>';
      }

      $bullets = $('<ul class="product-bullets">' + list + '</ul>').on('click touchstart', 'a', function () {
        var index = $(this).data('index');

        $.fancybox.getInstance(function () {
          this.jumpTo(index);
        });

      });

      instance.$refs.bullets = $bullets.appendTo(instance.$refs.stage);

    },
    beforeShow: function (instance) {

      instance.$refs.stage.find('ul:first')
        .children()
        .removeClass('active')
        .eq(instance.currIndex)
        .addClass('active');

    },
    afterClose: function (instance, current) {

      instance.$refs.form.appendTo(current.opts.$orig.parent());

    }

  });


  new WOW().init();

  $('.burger-btn').on('click', function () {
    $('.menu__list').slideToggle();
  });


  var mixer = mixitup('.pets__inner-box');

});