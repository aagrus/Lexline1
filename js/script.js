$(document).ready(function() {

    //Бургер
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });

    //Карусель
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop:true,
        dots: true,
        responsiveClass: true,
        autoplay:true,
        autoplayTimeout: 13000,
        autoplaySpeed:7000,
        autoplayHoverPause:true,
        margin: 60,
    });

    //Скрыть PopUp при загрузке страницы
    PopUpHide();

    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }

    // ---------- Валидация формы ----------
    $('form').on('submit', formSend)

    async function formSend() {
        // e.preventDefult ();

        if($('._error').length > 0){
          $('._error').each(function(){
            console.log(this)
              formRemoveError($(this))
          })
        }

        function nameTest(input) {
            if(typeof input == "undefined"){
              return false;
            }
            var re = /^[A-zА-яЁё]+$/i;
            return re.test(input)
        }
        function emailTest(input) {
            if(typeof input == "undefined"){
              return false;
            }
            var re = /\S+@\S+\.\S+/;
            return re.test(input)
        }
        function tellTest(input) {
            if(typeof input == "undefined"){
              return false;
            }
            var re = /^\d+$/;
            return re.test(input)
        }

        function checker(input){
            if($(input).prop('checked')){
                $('#submit').attr('disabled', false);
            }else{
                $('#submit').attr('disabled', true);
            }
        }

        function formAddError(input) {
            $(input).addClass('_error')
        }

        function formRemoveError(input) {
            input.removeClass('_error')
        }

        let err_count = 0;
        if(emailTest($('#formEmail')[0].value) != true) {
            err_count++
            formAddError('#formEmail');
        }
        if(tellTest($('#formTel')[0].value) != true) {
            err_count++
            formAddError('#formTel');
        }
        if(nameTest($('#formName')[0].value) != true) {
            err_count++
            formAddError('#formName');
        }
        if($("#formCheck").prop('checked') != true){
            err_count++
            formAddError($("#formCheckLabel"))
        }

        if(err_count == 0){
            // console.log($("#form"))
            alert("данные успешно отправлены😁");
            $("#form")[0].submit()
        }else{
          alert("Исправте пожалуйста ошибки");
        }
    }
})    
