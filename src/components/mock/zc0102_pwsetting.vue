<template>
    <div class="l-inner l-inner-login">
        <h2 class="l-heading text-center">パスワードを変更する</h2>

        <div class="p-2">
            <ul class="list-unstyled">
                <li>新しいパスワードを入力してください。少なくとも次のものを含めてください。
                    <ul>
                        <li>8文字以上</li>
                        <li>1個以上の文字</li>
                        <li>1個以上の数字</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="form-item-box mt-2 pt-2">
            <div class="label"><span class="text">新しいパスワード</span></div>
            <div class="item">
                <div class="input-wrap">
                    <input type="password" name="password" placeholder="新しいパスワード" maxlength="20" />
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
                    <input type="password" name="new_password" id="newPassword" placeholder="新しいパスワードの確認" maxlength="20" />
                    <!-- <div class="error-text">新しいパスワードと再入力パスワードが一致しません。</div> -->
                </div>
            </div>
        </div>
        <div class="submit-box form-item mb-5">
            <ul class="btn-horizontal d-flex justify-center">
                <li>
                    <button class="l-btn-base l-btn-active" data-toggle="modal" data-target="#exampleModal">パスワードを変更</button>
                </li>
            </ul>
        </div>
    </div>

    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="l-heading text-center">パスワード変更完了しました。</h2>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <router-link style="width: 80%;margin: auto;" to="/mock/zc0101" class="l-btn-base l-btn-active" data-dismiss="modal" aria-label="Close">閉じる</router-link>
      </div>

    </div>
  </div>
</div>
</template>
  