<template>
  <header class="pageTitleArea">
    <h1 class="secTitle">
      <span>Contact</span>
      コンタクト
    </h1>
  </header>
  <div class="contact">
    <h2 style="color: black">お気軽にお問い合わせください。</h2>
    <p style="color: black">ご意見・ご質問などがございましたらご入力の上、入力内容の確認ボタンを押してください。<br>
      <span class="r">必須</span>項目は必ずご記入ください。</p>
    <form id="contactForm">
      <table>
        <tbody>
        <tr>
          <th scope="row">お名前<span class="r">必須</span>
          </th>
          <td class="name">
            <div class="name01">
              姓<input type="text" class="middle-required" placeholder="山田" name="sei" value="">
            </div>
            <div class="name02">
              名<input type="text" class="middle-required" placeholder="太郎" name="mei" value="">
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">お名前（フリガナ）<span class="r">必須</span>
          </th>
          <td class="name">
            <div class="name01">
              姓<input type="text" class="middle-required" placeholder="ヤマダ" value="">
            </div>
            <div class="name02">
              名<input type="text" class="middle-required" placeholder="タロウ" value="">
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">メールアドレス<span class="r">必須</span>
          </th>
          <td class="mail">
            <input type="email" name="email" value="" class="wide-mail-required" placeholder="dummydummy@dummy.com">
            <small>※携帯メールの場合は、メールが受けられるようドメイン受信設定をお願いします。</small>
          </td>
        </tr>
        <tr>
          <th scope="row">メールアドレス（確認）<span class="r">必須</span>
          </th>
          <td class="mail">
            <input type="email" name="conf_email" value="" class="wide-mail-required" placeholder="dummydummy@dummy.com">
          </td>
        </tr>
        <tr>
          <th scope="row">ご質問・お問い合わせ<span class="r">必須</span>
          </th>
          <td class="content">
            <textarea class="wide-required" placeholder="お問い合わせが入ります"></textarea>
          </td>
        </tr>
        <tr>
          <th scope="row"><a href="../privacy/" style="color:#b08d38">プライバシーポリシー</a>に同意する<span class="r">必須</span>
          </th>
          <td class="privacy">
            <label class="privacyCheck"><input type="hidden" name="doui" value="">
              <input type="checkbox" name="doui" id="privacyCheck" class="required" value="同意する">同意する
            </label>
          </td>
        </tr>
        </tbody>
      </table>
      <p class="confirmText">チェックを入れ「確認する」をクリックしてください。</p>
      <p class="submitBtn">
        <button type="submit" disabled>確認する</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="less" scoped>
.pageTitleArea{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #555 no-repeat center / cover;
  height: 530px;
  color: #fff;
  background-image: url("../../assets/bg.jpg");
  .secTitle {
    text-align: center;
    font-weight: 100;
    span {
      display: block;
      font-family: "PT Serif", serif;
      font-weight: 100;
      font-style: italic;
      font-size: 60px;
      letter-spacing: 3px;
      line-height: 1.2;
      color: white;
    }
  }
}
.contact{
  margin-top: 3%;
  padding: 0 10%;
  #contactForm{
    margin-top: 3%;
    tr {
      display: flex;
      th {
        border-spacing: 0;
        margin: 0;
        border: 0;
        font: inherit;
        box-sizing: border-box;
        border-bottom: 1px solid #bfbfbf;
        width: 380px;
        padding: 30px 60px 30px 0;
        text-align: left;
        color: #121b27;
        vertical-align: top;
        display: flex;
        justify-content: space-between;
        .r {
          margin: 0;
          padding: 0;
          border: 0;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
          display: inline-block;
          border-radius: 4px;
          background: #a28137;
          width: 60px;
          line-height: 30px;
          color: #fff;
          text-align: center;
          height: 30px;
        }
      }
      .name {
        display: flex;
        color: #7b8187;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        border-bottom: 1px solid #bfbfbf;
        padding: 20px 0;
        width: 800px;
        justify-content: space-between;
        .middle-required{
          border-collapse: collapse;
          border-spacing: 0;
          width: 350px;
          margin: 0 0 0 15px;
          box-sizing: border-box;
          appearance: none;
          border: 1px solid #bfbfbf;
          border-radius: 4px;
          background-color: #e8e9eb;
          height: 60px;
          line-height: 60px;
          padding: 0 30px;
          font-size: 1rem;
          }
        .name01{
          color: #7b8187;
          border-collapse: collapse;
          border-spacing: 0;
          margin: 0;
          padding: 0;
          border: 0;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
          float: left;
        }
      }
      .mail {
        color: #7b8187;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        border-collapse: collapse;
        border-spacing: 0;
        margin: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
        border-bottom: 1px solid #bfbfbf;
        padding: 20px 0;
        width: 800px;
        .wide-mail-required {
          border-spacing: 0;
          margin: 0;
          width: 100%;
          box-sizing: border-box;
          appearance: none;
          border: 1px solid #bfbfbf;
          border-radius: 4px;
          background-color: #e8e9eb;
          height: 60px;
          line-height: 60px;
          padding: 0 30px;
          font-size: 1rem;
        }
      }
      .content{
        width: 800px;
        padding: 20px 0;
        border-bottom: 1px solid #bfbfbf;
        .wide-required{
          border-spacing: 0;
          margin: 0;
          box-sizing: border-box;
          appearance: none;
          border-radius: 4px;
          background-color: #e8e9eb;
          border: 1px solid #bfbfbf;
          height: 160px;
          line-height: 1.7;
          padding: 20px 30px;
          width: 100%;
          font: inherit;
        }
      }
      .privacy {
        width: 800px;
        border-bottom: 1px solid #bfbfbf;
        .privacyCheck {
          color: #7b8187;
          border-collapse: collapse;
          border-spacing: 0;
          margin-top: 35px;
          font: inherit;
          vertical-align: baseline;
          box-sizing: border-box;
          display: block;
        }
      }
    }
  }
}
.confirmText{
  padding: 50px 0;
  border: 0;
  font-size: 0.9rem;
  vertical-align: baseline;
  box-sizing: border-box;
  margin: 0;
  text-align: center;
  color: #121b27;
}
.submitBtn{
  text-align: center;
  button{
    box-sizing: border-box;
    border: 1px solid #bfbfbf;
    font-size: 1rem;
    border-radius: 0;
    width: 240px;
    height: 75px;
    line-height: 75px;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.15);
    transition: all 0.5s;
    text-align: center;
    margin: auto auto 50px;
    color: #7b8187;
  }
}
</style>
