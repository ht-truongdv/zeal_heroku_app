jQuery(document).ready(function ($) {
    //ユーザーエージェント判定
    var ua = navigator.userAgent;
    if ((ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) && ua.indexOf('Mobile') > 0) {
        //電話番号をリンクに変換
        $('.sp-tel-link').each(function () {
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }

    $('.item-file .label').on('click', function () {
        $(this).closest('.item-file').find('input[type=file]').click();
    });

    $('.item-file input[type=file]').on('change', function () {
        let file = this.files[0];
        $(this).closest('.item-file').find('input[type=text]').val(file.name);
    });

    $('.important-image').on('click', function () {
        let target = $(this).data('target');
        let modal = document.getElementById(target);
        $(modal).fadeIn();
        return false;
    });

    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });

    $('.important-image-box .icon-close').on('click', function () {
        $(this).closest('.important-box').remove();
    });

    function updatePatientImage() {
        $('input[type=file][name=patient_img_upload]').click();
    }

    function thisFileUpload() {
        $('input[type=file][name=patient_video_upload]').click();
    }

    $("#datepicker-from,#datepicker-to").datepicker({
        closeText: "閉じる",
        prevText: "前",
        nextText: "次",
        currentText: "今日",
        monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月" ],
        monthNamesShort: [ "1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月" ],
        dayNames: [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ],
        dayNamesShort: [ "日", "月", "火", "水", "木", "金", "土" ],
        dayNamesMin: [ "日", "月", "火", "水", "木", "金", "土" ],
        weekHeader: "週",
        dateFormat: "yy年mm月dd",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "年"
    });

    $('.input-date-filter input').on('click', function (e) {
        $(this).parent().find('img').click();
    })
});