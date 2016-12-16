EffectDesc.effects = {
    "Overeat": {
        "class": "バッド",
        "effect": "キャラクターの移動速度が 45.",
        "desc": "キャラクターの満腹感が100以上になると付与される。",
        "note": "この状態で更に食べ物を摂取すると、ビタミンもゼロ以下にまで減少します。効果を取り除く最速の方法は、トイレを利用することですが50％のヘルスを失います。 飲料水は過食を早く取り除くのにも役立ちます。",
    },
    "Starving": {
        "class": "バッド",
        "effect": "あなたの健康を少し低下させる",
        "desc": "キャラクターの満腹感が0になったときに付与される。",
        "note": "あなたは餓えて死ぬかもしれません。",
    },
    "Thirsty": {
        "class": "バッド",
        "effect": "キャラクターの移動速度が 45 and health slightly falls off. You cannot dig dirt, mine ore and lift items.",
        "desc": "キャラクターのスタミナが0になったときに付与される。",
        "note": "",
    },
    "Lifting": {
        "class": "",
        "effect": "キャラクターの移動速度が 45.",
        "desc": "あなたのキャラクターがアイテムを持ち上げて移動するときに付与される。",
        "note": "",
    },
    "Fire": {
        "class": "バッド",
        "effect": "キャラクターは定期的なダメージを受ける (５秒間隔で３０ダメージ).",
        "desc": "Gained when attacked by some kinds of weapon or creatures.",
    },
    "Bleed": {
        "class": "バッド",
        "effect": "キャラクターは定期的なダメージを受ける.",
        "desc": "クリーチャーによって攻撃されたときに受ける",
    },
    "Hangover": {
        "class": "",
        "effect": " +9 力, -9 素早さ.",
        "desc": "キャラクターがアルコールを飲んでいるときに得られる (beer, wine).",
        "note": "重複効果なし",
    },
    "Sitting": {
        "class": "グッド",
        "effect": "渇きとスタミナの損失は速度の低下を招く。 食べ物を食べるとテーブルの横に座って満腹感が増します。",
        "desc": "キャラクターが椅子、玉座または切り株に座ったときに付与される。",
        "note": "",
    },
    "MushroomTrip": {
        "class": "",
        "effect": "移動速度を135に上げ、幻覚を取り消し、1ダメージで3回のヘルス・ダメージを引き起こす。",
        "desc": "キャラクターがマッシュルームを食べると得られる",
        "note": "マッシュルームを食べた量によって被害は大きくなる",
    },
    "Sex": {
        "class": "グッド",
        "effect": "呪文を10減少させ、,  スタミナが25増加します。",
        "desc": "Margoから頂ける",
        "note": "効果時間　1.5分",
    },
    "Arena": {
        "class": "",
        "effect": "死亡時のカルマ喪失、死の罰金（飢餓、ビタミン、ラーニングポイント、ギアロス）などのペナルティーはありません。",
        "desc": "キャラクターがアリーナにに参加したときに付与される。",
        "note": "",
    },
    "Riding": {
        "class": "グッド",
        "effect": "キャラクターの移動速度が大幅に向上します。 Liftingによるペナルティーは適用されません。",
        "desc": "キャラクターが馬に乗ったときに付与される。",
        "note": "",
    },
    "Slowed": {
        "class": "バッド",
        "effect": "キャラクター移動速度が45減少します。",
        "desc": "呪文を唱えるモンスターの攻撃範囲に内に位置すると得られる。 キャラクターはこのモンスターの範囲に入ってはいけません。",
        "note": "重複効果なし",
    },
    "High": {
        "class": "グッド",
        "effect": "食べ物を食べた時の肥満効果を減少させます。 cigarettesの品質1：5％、cigaresの品質1：10％、jointsの品質1：15％。 品質が高いほどパーセンテージが高くなります。",
        "desc": "cigarettes, cigares,jointsなどを使用すると付与されます。",
        "note": "12ティックで体力の12％を回復します。",
    },
    "Weakness": {
        "class": "バッド",
        "effect": "キャラクターの移動速度は45減少します。 キャラクターは戦闘でほとんどダメージを与えられなくなります。",
        "desc": "死後キャラクターが復活したときに付与される。",
        "note": "strengthening potionを使用すると消えます。",
    },
    "ActivatedCarbon": {
        "class": "グッド",
        "effect": "すべてのビタミンをゼロに設定し、吐き気の悪影響を取り除きます。",
        "desc": "activated carbonを飲むと付与されます。",
    },
    "Drunk": {
        "class": "グッド",
        "effect": "いくつかのヘルスポイントを回復することができます。",
        "desc": "アルコールを飲むと付与される。",
        "note": "あなたが飲み過ぎると、activated carbonでさえ、あなたが大量の二日酔いから救うことはできません。",
    },
    "Plague": {
        "class": "バッド",
        "effect": "あなたのヘルスを奪う。",
        "desc": "セックスをすると付与される場合があります。",
        "note": "anti-plague potionを飲むと治療できます。",
    }
};
