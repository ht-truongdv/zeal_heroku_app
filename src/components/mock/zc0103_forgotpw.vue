<!-- <template>
    <div class="form-forgot-container">
        <div class="form-forgot-container_header">
            <div style="display: flex;justify-content: center;">
                <img style="height: 30px;" src="./header_logo.png" alt="logo" />
            </div>
            <h2 class="text-bold" style="padding: 15px 0px;">パスワード初期化</h2>
            <h3 class="font-size-normal">パスワードを初期化するには、ユーザ名を入力してください。</h3>
        </div>
        <div class="form-forgot-container_body">
            <div class="form-forgot-container_body_input_pw">
                <form>
                    <div class="form-group">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text font-size-normal" id="basic-addon2"><i class="bi bi-person-fill"></i></span>
                            </div>
                            <input type="email" class="form-control input-custom border-left-none font-size-normal" placeholder="ユーザー名" aria-label="Username"
                                aria-describedby="basic-addon2">
                        </div>

                    </div>
                    <button type="submit" class="btn btn-secondary btn-submit-custom font-size-normal">送信</button>
                </form>
            </div>
            <div class="form-forgot-container_footer_input_pw">
                <router-link to="/">パスワードを変更</router-link>
            </div>
        </div>
    </div>
    <div class="form-inital-container_footer">
        <p style="text-align: center; font-size: 14px;">© 2021 Medical the small amount short term insurance.,Inc. All rights reserved.</p>
    </div>
</template>

<style>
.form-forgot-container {
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
.form-forgot-container_header{
    padding: 20px 0;
}
.form-forgot-container_body_input_pw {
    padding: 30px;
}

.form-forgot-container_footer_input_pw {
    font-size: 14px;
}
.font-size-normal{
    font-size: 15px;
}
</style> -->

<template>
    <div class="l-inner l-inner-login">
        <h2 class="l-heading text-center">パスワードをお忘れですか?</h2>

        <div class="error-box1 mb-2">
            <p>パスワードを初期化するには、ユーザ名を入力してください。</p>
        </div>

        <form method="POST">
            <div class="form-item-box mt-2 pt-2">
                <div class="label"><span class="text">ユーザー名</span></div>
                <div class="item">
                    <div class="input-wrap">
                        <input type="email" name="password" placeholder="メールアドレス" maxlength="20" />
                        <div class="error-text">入力してください。</div>
                    </div>
                </div>
            </div>
            <div class="submit-box form-item mb-5">
                <ul class="btn-horizontal d-flex justify-center">
                    <li>
                        <RouterLink to="/mock/zc0104" class="l-btn-base l-btn-active">次へ</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="text-center">
                <RouterLink to="/mock/zc0101">キャンセル?</RouterLink>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
};
</script>
  
<style></style>