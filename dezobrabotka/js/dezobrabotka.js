
  //Раскрывающиеся пункты списка
    $(document).ready(function() {


      // Скроем блоки, которые не должны быть видимы
      $('.js-b-rollUp__LiHidden').hide();

      // Нажали на ссылку "подробнее"
      $('.js-b-rollUp__LiMore').on("click", function() {
        // Найдем родительский блок с пунктом списка
        var rollUp__Li = $(this).closest('.js-b-rollUp__Li');
        // Если у блока есть класс открытого (значит он открыт, закроем его)
        if (rollUp__Li.hasClass('b-rollUp__Li--open')) {
          // Скроем видимую часть
          rollUp__Li.find('.js-b-rollUp__LiHidden').slideUp(500);
          //Добавляем "Плюс"
          rollUp__Li.find('.b-rollUp__LiMore').addClass('rollUp__mark--plus');
          //Убираем "Минус"
          rollUp__Li.find('.b-rollUp__LiMore').removeClass('rollUp__mark--minus');
          // Уберем класс открытого блока
          rollUp__Li.removeClass('b-rollUp__Li--open');
        }
        // Если у блока нет класса открытого (значит он закрыт, откроем его)
        else {
          // Откроем невидимую часть
          rollUp__Li.find('.js-b-rollUp__LiHidden').slideDown(500);
          //Добавляем "Минус"
          rollUp__Li.find('.js-b-rollUp__LiMore').addClass('rollUp__mark--minus');
          //Убираем "Плюс"
          rollUp__Li.find('.js-b-rollUp__LiMore').removeClass('rollUp__mark--plus');
          // Дадим класс открытого блока
          rollUp__Li.addClass('b-rollUp__Li--open');
        }
      });
    });
