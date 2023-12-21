<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <h2 class="l-heading text-center">
        会社説明会に関するアンケート
    </h2>
    <div class="form-item-box">
        <div class="label">
            <span class="text">あなたのお名前と会社のお名前を教えていただけますか？</span>
            <span class="required">必須</span>
        </div>
        <p class="note">このアンケートは今後の情報提供を目的としており、結果は統計的に処理されます。<br>特定の個人が識別できる情報として、公表されることはありません。</p>
        <div class="item">
            <div class="input2-wrap">
                <div class="label"><span class="text">お名前</span></div>
                <input class="input-file" type="text" maxlength="40"/>
            </div>
        </div>
        <div class="item mt-3">
            <div class="input2-wrap">
                <div class="label"><span class="text">企業名</span></div>
                <input class="input-file" type="text" maxlength="80"/>
            </div>
        </div>
    </div>

    <div class="form-item-box">
        <div class="label">
            <span class="text">魅力に感じた点を教えてください。</span>
            <span class="required">必須</span>
        </div>
        <div class="item item-pl px-0">
            <div class="input-wrap">
                <textarea name="魅力に感じた点" placeholder="魅力に感じた点"></textarea>
            </div>
        </div>
    </div>

    <div class="form-item-box">
        <div class="label">
            <span class="text">気になる・不安な点を教えてください。</span>
            <span class="required">必須</span>
        </div>
        <div class="item item-pl px-0">
            <div class="input-wrap">
                <textarea name="気になる・不安な点" placeholder="気になる・不安な点"></textarea>
            </div>
        </div>
    </div>

    <div class="form-item-box">
        <div class="label">
            <span class="text">志望度合を教えてください。</span>
            <span class="required">必須</span>
        </div>
        <div class="item">
            <div class="radio-wrap">
                <label><input type="radio" name="志望度合" value="入社したい"/>入社したい</label>
            </div>
            <div class="radio-wrap">
                <label><input type="radio" name="志望度合" value="内定をもらって比較したい"/>内定をもらって比較したい</label>
            </div>
            <div class="radio-wrap">
                <label><input type="radio" name="志望度合" value="ひとまず次回選考に進みたい"/>ひとまず次回選考に進みたい</label>
            </div>
            <div class="radio-wrap">
                <label><input type="radio" name="志望度合" value="辞退したい"/>辞退したい</label>
            </div>
            <!-- <div class="error-text">選択してください。</div> -->
        </div>
    </div>

    <div class="form-item-box">
        <div class="label">
            <span class="text">志望順位を教えてください。</span>
            <span class="required">必須</span>
        </div>
        <div class="input2-wrap">
            <div class="label"><span class="text">▲ 社中</span></div>
            
            <star-rating text-class="custom-star"
                    v-model:rating="rating_c" 
                    v-bind:star-size="20"
                    v-bind:increment="1"
                    v-bind:max-rating="10"
                    v-bind:show-rating="false"
                    active-color="#bd1019"
                    inactive-color="#fff"
                    border-color="#bd1019"
                    border-width="1"/>
        </div>
        <div class="input2-wrap mt-2">
            <div class="label"><span class="text">▲ 位</span></div>
            <star-rating text-class="input-wrap"
                v-model:rating="rating_p" 
                v-bind:star-size="20"
                v-bind:increment="1"
                v-bind:max-rating="10"
                v-bind:show-rating="false"
                active-color="#bd1019"
                inactive-color="#fff"
                border-color="#bd1019"
                border-width="1"/>
        </div>
        <div class="checkbox-input-other">
            <p class="note mb-0">※その順位である理由を教えてください。</p>
            <div class="input-wrap">
                <input type="text"/>
            </div>
        </div>
        <!-- <div class="error-text">選択してください。</div> -->
    </div>

    <div class="form-item-box">
        <div class="label">
            <span class="text">選考中企業を志望度の高い順に教えてください。</span>
        </div>
        <div class="input2-wrap">
            <div class="label"><span class="text">企業①</span></div>
            <input type="text" class="input-file" maxlength="20"/>
        </div>
        <div class="input2-wrap mt-2">
            <div class="label"><span class="text">企業②</span></div>
            <input type="text" class="input-file" maxlength="20"/>
        </div>
        <div class="input2-wrap mt-2">
            <div class="label"><span class="text">企業③</span></div>
            <input type="text" class="input-file" maxlength="20"/>
        </div>
        <div class="input2-wrap mt-2">
            <div class="label"><span class="text">企業④</span></div>
            <input type="text" class="input-file" maxlength="20"/>
        </div>
        <div class="input2-wrap mt-2">
            <div class="label"><span class="text">企業⑤</span></div>
            <input type="text" class="input-file" maxlength="20"/>
        </div>
    </div>

    <div class="submit-box form-item pb-5 mb-5">
        <ul class="btn-horizontal d-flex justify-center">
            <li>
                <router-link to="/enquete/complete" class="l-btn-base l-btn-active">次へ進む</router-link>
            </li>
        </ul>
        <!-- <div class="error-text">入力エラーがあります。入力内容を再度ご確認ください。</div> -->
    </div>
  </template>
<script>
export default {
    data() {
        return{
            rating_c: 5,
            rating_p: 5
        }
    } 
}
</script>