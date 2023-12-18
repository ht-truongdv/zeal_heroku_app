<template>
    <div class="l-inner l-inner-login">
    <h2 class="l-heading text-center">ログイン</h2>

    <div class="error-box">
      <strong>ユーザー名とパスワードを確認してください。それでもログインできない場合は、システム管理者にお問い合わせください。
        <br />エラーコード：X0000111000</strong>
    </div>

    <form method="POST">
        <div class="form-item-box mt-2 pt-2">
            <div class="label"><span class="text">ユーザー名</span></div>
            <div class="item">
                <div class="input-wrap">
                    <input type="password" name="password" placeholder="メールアドレス" maxlength="20"/>
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
                    <input type="password" name="new_password" id="newPassword" placeholder="パスワード入力"
                           maxlength="20"/>
                    <!-- <div class="error-text">入力してください。</div> -->
                </div>
            </div>
        </div>
        <div class="submit-box form-item mb-5">
            <ul class="btn-horizontal d-flex justify-center">
                <li><a href="Z101-求人情報閲覧.html" class="l-btn-base l-btn-active">ログイン</a>
                </li>
            </ul>
        </div>
        <div class="text-right">
            <a href="#" class="link-danger">パスワードをお忘れですか?</a>
        </div>
    </form>
</div>
  </template>
  
  <script>
    export default {
    };
  </script>
  
  <style>
  </style>