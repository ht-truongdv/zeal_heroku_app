<template>
    <div class="l-inner l-inner-login">
        <h2 class="l-heading text-center">ログイン</h2>

        <div class="error-box">
            <strong>ユーザー名とパスワードを確認してください。それでもログインできない場合は、システム管理者にお問い合わせください。
                <br />エラーコード：X0000111000</strong>
        </div>

        <form @submit.prevent="loginHandle">
            <div class="form-item-box mt-2 pt-2">
                <div class="label"><span class="text">ユーザー名</span></div>
                <div class="item">
                    <div class="input-wrap">
                        <input type="password" name="password" placeholder="メールアドレス" maxlength="20" />
                        <!-- <div class="error-text">入力してください。</div> -->
                    </div>
                </div>
            </div>
            <div class="form-item-box no-border-top mt-0">
                <div class="label">
                    <label class="text" for="newPassword">パスワード</label>
                </div>
                <div class="item">
                    <div class="input-wrap">
                        <input type="password" name="new_password" id="newPassword" placeholder="パスワード入力" maxlength="20" />
                        <!-- <div class="error-text">入力してください。</div> -->
                    </div>
                </div>
            </div>
            <div class="submit-box form-item mb-5">
                <ul class="btn-horizontal d-flex justify-center">
                    <li>
                        <router-link to="/mock/zc0301" class="l-btn-base l-btn-active">ログイン</router-link>
                    </li>
                </ul>
            </div>
            <div class="text-right">
                <router-link to="/mock/zc0103">パスワードをお忘れですか?</router-link>
            </div>
        </form>
    </div>
</template>