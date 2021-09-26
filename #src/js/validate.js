jQuery.validator.addMethod("isName", function(value, element) {
  return this.optional(element) || /^[А-ЯЁа-яё]{1,40}$/.test(value);
  },
);


$('.contacts__form-btn').on('click', formValidate);

function formValidate() {

  $('.contacts__form').validate({
    rules: {
      name: {
        isName: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: 'Пожалуйста, введите ваше имя',
        isName: 'Пожалуйста, введите правильное имя',
      },
      email: {
        required: 'Пожалуйста, введите адрес электронной почты',
        email: 'Пожалуйста, введите правильный адрес электронной почты',
      },
    }
  });
}