<template>
    <div class="l-inner l-inner-login">
        <h2 class="l-heading text-center">パスワードをお忘れですか?</h2>
        <div class="p-2">
            <ul class="list-unstyled">
                <li>パスワードを初期化するには、ユーザ名を入力してください。</li>
            </ul>
        </div>

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
                    <router-link to="/mock/zc0104" class="l-btn-base l-btn-active">次へ</router-link>
                </li>
            </ul>
        </div>
        <div class="text-center">
            <router-link to="/mock/zc0101">キャンセル</router-link>
        </div>
    </div>
</template>