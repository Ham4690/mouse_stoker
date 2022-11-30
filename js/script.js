class MouseStalker {
  constructor() {
    // マウスストーカー部分の要素を作成
    this.stalker = document.createElement("div");
    //マウスポインターのX座標の初期値
    this.posX = 0;
    //マウスポインターのY座標の初期値
    this.posY = 0;
    //デフォルトのマウスストーカーの大きさを縮小
    this.stalker.style.transform = `scale(.3)`;

    //処理
    this._init();
  }

  _init() {
    //マウスストーカーにclass属性「c-stalker」を追加
    this.stalker.classList.add("c-stalker");
    //body要素の末尾にマウスストーカー要素を追加
    document.body.appendChild(this.stalker);

    this._on();
  }

  _on() {
    //画面上でマウスが動いたらイベント発生
    document.addEventListener("mousemove", this._move.bind(this));
  }

  _move(e) {
    //X座標の位置を取得
    this.posX = e.clientX;
    //Y座標の位置を取得
    this.posY = e.clientY;
    //transformプロパティにthis.posXとthis.posYを追加
    this.stalker.style.transform = `translate(${this.posX}px,${this.posY}px)`;
  }
}

new MouseStalker();