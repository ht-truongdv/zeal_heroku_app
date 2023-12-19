<!-- <template>
    <div class="form-inform-sent-container">
        <div class="form-inform-sent-container_header">
            <div style="display: flex;justify-content: center;">
                <img style="height: 30px;" src="./header_logo.png" alt="logo" />
            </div>
            <h2 class="text-bold" style="padding: 15px 0px;">メールを送信しました。</h2>
          
        </div>
        <div class="form-inform-sent-container_body">
            <div class="form-inform-sent-container_body_input_pw">
                <h3 class="font-size-normal">パスワードを初期化するには、ユーザ名を入力してください。</h3>
            </div>
            <div class="form-inform-sent-container_footer_input_pw">
                <router-link to="/">パスワードを変更</router-link>
            </div>
        </div>
    </div>
    <div class="form-inital-container_footer">
        <p style="text-align: center; font-size: 14px;">© 2021 Medical the small amount short term insurance.,Inc. All rights reserved.</p>
    </div>
</template>

<style>
.form-inform-sent-container {
    width: 40%;
    margin: auto;
    text-align: center;
    background-color: white;
    padding: 20px;
    
}

.input-custom {
    height: 40px;
    border-radius: 5px;
}
.input-group-prepend{
    border-right-style: none;
    
}
.input-group-text{
    background-color: white;
}
.border-left-none{
    border-left-style: none;
}
.btn-submit-custom {
    height: 40px;
    border-radius: 5px;
    width: 100%;
}
.form-inform-sent-container_header{
    padding: 20px 0;
}
.form-inform-sent-container_body_input_pw {
    padding: 30px;
}

.form-inform-sent-container_footer_input_pw {
    font-size: 14px;
}
.font-size-normal{
    font-size: 15px;
}
</style> -->

<template>
    <div class="l-inner l-inner-login">
        <h2 class="l-heading text-center">メールを送信しました。</h2>
        <div class="error-box1 mb-2 text-center" style="height: 150px;">
            <p>パスワードを変更するには、お送りしたメールのURLにアクセスしてください。</p>
        </div>
        <div class="text-center">
            <RouterLink to="/mock/zc0101">ログイン画面に戻る</RouterLink>
        </div>
    </div>
</template>
  
<script>
export default {
};
</script>
  
<style></style>