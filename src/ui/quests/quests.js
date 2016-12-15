"use strict";

function Quests() {
    return {
        "tutorial-start": {
            name: {
            	"jp": "チュートリアルスタート",
                "en": "Tuition start",
                "ru": "Начало обучения"
            },
            voice: true,
            desc: {
            	"jp": [
                	"jp": "チュートリアル開始","ようこそ！開拓者.",
                    "ここに訪れたすべての人が私のアカデミーを受講します。 私の仕事はサバイバルの基礎を教えることです。",
                    "あなたへの報酬: <i>3000 exp and 4 gold</i>.",
                ],
                "en": [
                    "en": "Tuition start","Hello, settler.",
                    "Everyone who arrives here gets my Academy. My job here is to teach you survival basics.",
                    "You will receive: <i>3000 exp and 4 gold</i>.",
                ],
                "ru": [
                    "Здравствуй, поселенец.",
                    "Всякий, кто прибывает в эти земли, сначала попадает сюда, в мою Академию. Здесь я обучу тебя основам выживания.",
                    "По завершению ты получишь награду: <i>3000 опыта и 4 золотых монеты</i>.",
                    // "Если ты решишь уйти сейчас, дело твое, но помни, что ты лишишься всех преимуществ ученика, и выжить тебе будет очень сложно.",
                ],
            },
            final: {
            	"en": "素晴らしい！それでは始めましょう、それと覚えておいてください: <i>あなたが10レベルになるまで、獣はあなたを攻撃しません。あなたのバッグは死体に残るということを。</i>",
                "en": "Great, let's begin. Remember: <i>wild beasts won't attack you 'till you get 10 level, and your bag will stay with you after death.</i>",
                "ru": "Отлично, приступим. Запоминай: <i>до 10 уровня на тебя не нападут дикие животные, а при смерти ты останешься со своей сумкой.</i>",
            },
        },
        "craft-1": {
            name: {
            	"jp": "リソースの採取",
                "en": "Picking resources",
                "ru": "Сбор ресурсов",
            },
            voice: true,
            desc: {
            	"jp": "この自然の地を生き残るためには道具が必要です。 道具にはリソースが必要です。 四つの石と二つの枝と小枝を選びなさい。",
                "en": "You need some tools to survive this wild lands; and for tools you need resources. Pick four stones, two boughs and a branch.",
                "ru": "Для выживания в этих диких землях тебе необходимы инструменты, а чтобы их создать, нужны ресурсы. Собери четыре камня, два сучка и веточку.",
            },
            tip: {
            	"jp": "その辺の木を右クリックして <rmb>枝と小枝を採取</rmb>それらを右クリックして<rmb>処理</rmb> すると, 葉が処理され枝が得られます. 石は地面から拾ってください。<lmb></lmb>.",
                "en": "Right click on a tree and pick <rmb>Get a bough/a branch</rmb>. Right click and <rmb>Break</rmb> on a bough gives a stick, and breaking a branch gives a twig. Pick stones from the ground <lmb></lmb>.",
                "ru": "По дереву: <rmb>Сорвать ветку/сук</rmb>.<br><rmb>сломать</rmb> по суку даст палку, а из ветки выйдет прутик.<br>Собрать камни с земли <lmb></lmb>.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "craft-2": {
            voice: true,
            name: {
            	"en": "ナイフの作成",
                "en": "Making a knife",
                "ru": "Делаем нож",
            },
            desc: {
            	"en": "用意はできました。 これらのリソースを使って、あなたはナイフを作成することができます。",
                "en": "All right, everything is gathered. With all of these, you have to craft a  knife.",
                "ru": "Отлично, все необходимое собрано. Из этого всего тебе нужно сделать нож.",
            },
            tip: {
            	"en": "<lmb></lmb> クエストアイテムをクリックすると、クラフトダイアログが開き、レシピが見つかります。 <lmb></lmb> クラフトリストから必要なリソースがわかります。",
                "en": "<lmb></lmb> on a quest item opens a craft dialog and finds the recipe. <lmb></lmb> on an ingredient will find it in the craft list.",
                "ru": "<lmb></lmb> по иконке квестового предмета откроет окно крафта и найдет нужный рецепт. <lmb></lmb> по ингредиенту найдет его в списке крафта.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "craft-3": {
            voice: true,
            name: {
            	"jp": "武器の作成",
                "en": "Making a weapon",
                "ru": "Делаем оружие",
            },
            desc: {
            	"jp": "さてと、私はあなたへ最初の武器である鋭いスティックをの作成を教えます。",
                "en": "Ok, now we are going to craft a sharp stick — your first weapon.",
                "ru": "Ок, теперь будем крафтить острую палку — твое первое оружие.",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "stat-1": {
            voice: true,
            name: {
            	"jp": "喉の渇き",
                "en": "Thirst",
                "ru": "Жажда",
            },
            desc: {
            	"jp": "これから私は食べ物と水の取得方法を教えます。 次の部屋には小さな水源があります。 木から樹皮を剥がしてマグカップを作ってから、水源に立ち水を汲んでください。 心配しないでいいですよ、ここの水はできれいですから。",
                "en": "Now I shall teach you to obtain food and water. You'll find a small water source in the next room. Rip off some bark from a tree and make yourself a mug, then fill it with water from that source. Don't worry, the water is clean here.",
                "ru": "Теперь я научу тебя, как добывать еду и воду. В следующей комнате ты найдешь небольшой водоем. Сорви кору с дерева и сделай кружку, затем наполни ее водой из источника. Не волнуйся, вода здесь чистая.",
            },
            tip: {
                "en": "<rmb>Drink</rmb> on a mug will increase your stamina. <br>You should stay in a shallow water to fill a mug.<br> Click on your avatar in the upper left corner to get character's data.",
                "ru": "<rmb>Пить</rmb> по кружке увеличит вашу выносливость. <br>Чтобы наполнить кружку, встаньте в мелкую воду.<br>Чтобы получить информацию по персонажу, кликните по иконке персонажа в верхнем левом углу.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "stat-2": {
            voice: true,
            name: {
            	"jp": "空腹",
                "en": "Hunger",
                "ru": "Голод",
            },
            desc: {
            	"jp": "そろそろおなかが減ってくる頃じゃないですか？ ニワトリを殺してそれを刈り取ったり、木からリンゴをむしり取るのも自由です。ですが注意してください、必要以上に食べていまうと食料からビタミンの効力が発揮されません。 ステータスやスキルを向上させるためにはビタミンの効力が必要です。 もし食べ過ぎたのなら、私の隣にあるトイレを使いなさい。見たりしませんよ",
                "en": "It's the time to get some food and have it. Kill a chicken and gut it, or pick some apples from a tree. Be careful, don't eat more you need, otherwise, food won't help you with vitamins. You need vitamins to improve your stats and skills. By the way, if you've overate, use the toilet next to me.",
                "ru": "Самое время добыть еды и поесть. Убей и разделай курицу, либо нарви яблок с дерева. Будь внимателен, не переедай, иначе еда не принесет тебе пользы в виде витаминов. Витамины нужны для улучшения твоих характеристик, а характеристики влияют на твои навыки. Если ты вдруг переел, туалет тут рядом, воспользуйся им. ",
            },
            tip: {
                "en": "Vitamins amount displays in the \"Stats\" dialog. You cannot level your skill upper than the stat related to it. You shall also check your skill level in the \"Skills\" dialog. New skills levels open with your learning points.",
                "ru": "Информация по витаминам в окне \"Характеристики\". Навык невозможно повысить выше связанного с ним стата. При это надо следить за уровнем навыка в окне \"Навыки\". Изучаются навыки при помощи очков опыта.",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "fight": {
            voice: true,
            name: {
            	"jp": "戦闘中のコンボ",
                "en": "Fight and fighting combos",
                "ru": "Бой и боевые комбинации",
            },
            desc: {
            	"jp": "さてと、私はあなたへ最初の戦いの準備をしました。 次の部屋には戦闘訓練用のマネキンがあります。 右手にあなたの鋭い棒を持って、それを切ったり叩いたりしてください。",
                "en": "Well, I see you prepared for your first fight. You'll find a combat mannequin in the next room. Take your sharp stick in the right hand and hit it.",
                "ru": "Вот ты и готов к своему первому бою. В следующей комнате стоит боевой менекен. Возьми в правую руку свою острую палку и ударь его.",
            },
            tip: {
            	"jp": "右手（上）に鋭い棒を装備することです。 戦闘コマンドは画面左下にパネルでグループ分けされています。 例として3-2-1-1という戦闘コンボを使用した場合に最も効果を発揮します。 パネルの最大のボタンは、あなたが装備しているアイテムで可能なアクションを表示します。",
                "en": "You should take the sharp stick in the right (upper) hand. The fight commands are grouped at the panel below. The best effect reached when using fight combos, like 3-2-1-1 and others. The biggest button at the panel shows a possible action with the item in your hand.",
                "ru": [
                    "Острую палку нужно поместить в правую (верхнюю) руку персонажа. На панели внизу приведены кнопки боя, но эффективнее использовать боевые комбинации. Например, 3-2-1, 1. Есть и другие комбо. Большая кнопка на нижней панели отражает возможное действие с предметом в руках.",
                ],
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "dead": {
            voice: true,
            name: {
            	"jp": "死亡時",
                "en": "Death",
                "ru": "Смерть",
            },
            desc: {
            	"en": "すばらしいです！ あなたよりも強い敵を攻撃するか、攻撃的な獣が狙われた時、逃げきることができず、おそらく死ぬでしょう。 恐るべきことに死は、あなたのビタミン、ラーニングポイント、更に装備やアイテムのすべてを失うことを意味します。 あなたは自分が設置したスポーンストーンの隣に復活するか、あなたがそれを持っていなければ町で復活します。 戦闘に挑戦したい場合は、Diegoと話をすることです、彼は割安な料金で狩猟場に連れて行ってくれます。 それからアリーナでは特別に殺人の罰金なしで他の人々と戦うことができます。",
                "en": "Great! If you attack the enemy who is stronger than you or aggressive beast follows you, you will hardly run away and possibly die. But death only means you lose all your vitamins, learning points and all your gear and stuff. You will spawn next to your spawn stone or, if you don't have one, in the town. If you want to contest your fighting abilities, talk to Diego, he can lead you to the hunting places for a modest fee. Also you can fight other people at the arena with no fines for death and murder.",
                "ru": "Отлично! Если ты нападешь на противника, а он окажется сильнее тебя, либо на тебя побежит агрессивное животное, то вряд ли у тебя выйдет убежать на своих двоих и ты умрешь. Но тут смерть значит лишь потерю витаминов, что накопились в твоем организме, небольшая амнезия, из-за которой ты потеряешь опыт, а так же свои вещи. Оживешь ты около своего респауна или в городе. Если хочешь проверить свои силы, можешь поговорить с Диего, он наверняка знает места, где собираются коты и может тебя отвести за скромную плату. А с другими игроками ты можешь сразиться на арене, не получив при этом штрафов за смерть и убийство.",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "claim": {
            voice: true,
            name: {
            	"jp": "所有地の主張",
                "en": "Your claim is your fortress",
                "ru": "Клейм - твоя крепость",
            },
            desc: {
            	"jp": "誰でもあなたを攻撃することができます。 あなたの財産を維持するための拠点を建設する必要があります。  チャールズから8ゴールドの所有地のライセンスを得ることで盗まれたり攻撃されたりする恐れなしに建てて耕すことができる小さな土地を所有することができます。",
                "en": "Anyone can attack you. You need to build a claim to keep your property. With a claim, you will protect a tiny patch of land on which you can build and garden with no fear of being robbed or attacked. You may obtain a claim license from Charles for 8 gold.",
                "ru": "Помимо всего, на тебя может напасть и другой человек. Чтобы не потерять нажитое тобой имущество, тебе необходимо построить клейм. С его помощью ты оградишь для себя небольшой участок, на нем можно строить, возделывать землю, не боясь, что на тебя нападут или украдут все нажитое. Лицензию на клейм ты можешь получить у Чарльза за 8 золотых.",
            },
            tip: {
            	"jp": "あなたアイテムを作成したり敵を撃退する時に経験値を取得し。 いくつかの敵から金を奪うことで町でアイテムを売買することもできます。",
                "en": "Experience gained when you craft items and kill enemies. Some enemies loot money; you may also trade stuff in the town.",
                "ru": "Опыт накапливается при создании предметов и при убийствах противников. Монеты падают с некоторых противников, а так же можно продать ресурсы на Рынке в городе.",
            },
            final: {
                "en": "",
                "ru": "",
            },
        },
        "finish": {
            voice: true,
            name: {
            	"jp": "これでチュートリアルは終了です。",
                "en": "The end of tuition",
                "ru": "Конец обучения",
            },
            desc: {
            	"jp": "仕事も終わったことですし。 町に戻る時間です。",
                "en": "Well, I did my job. It's time to move to the town.",
                "ru": "Ну вот я и обучил тебя основам выживания в этих землях. Пора отправляться в город.",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "in-city": {
            voice: true,
            name: {
            	"jp": "町へ",
                "en": "To the town",
                "ru": "В город",
            },
            desc: {
            	"en": [
                    "町の周りを見てください。",
                    "オークションをチェックして、そこで自分のアイテムを販売することや。銀行に口座を作り、お金を貯めて置いたりアイテムを預けたりすることができます。",
                    "この町のパブでは、飲み物、食べ物、そしてチェスゲームを提供しています。ああ、ええ、マルゴを訪問してください、彼女は素晴らしいです。",
                    "クラフトマンタウンでは、手に入れることができないものを買うことができます。教会は、銀行の近くにあります。アリーナは反対側にあります。",
                    "また、あなたはランダムな自然の地に到達するポータルをあちこちで見かけるでしょう。 なにかあっても復活時にはこの町に戻れますよ、 とにかく幸あれ！",
                ],
                "en": [
                    "Look around the town.",
                    "Check the bargain house, you may trade your stuff there. You better keep money in the bank; and you can pay for your claim from your account.",
                    "Our pub can offer you drinks, food and some kinds of chance games. Ah, yeah, go visit Margo, she's amazing.",
                    "At the Craftsmantown you can buy stuff you cannot craft. Arena and Church are near the Bank.",
                    "Also, you can find portals through which you will get to a random wild lands. Build a respawn stone to return to town. Well, good luck!",
                ],
                "ru": [
                    "Осмотрись в городе.",
                    "Загляни на Рынок, там ты сможешь продать легкодобываемые ресурсы. Деньги лучше хранить в Банке, там же можно и оплатить свой клейм.",
                    "В Таверне ты сможешь перекусить, выпить, а так же сыграть в азартные игры. Ах да, и с Марго познакомься, удивительная девушка.",
                    "В Квартале ремесленников можно приобрести ресурсы, которые вряд ли ты сможешь сделать на данный момент. Тут же Арена и Церковь.",
                    "Помимо этого, в городе есть порталы, с помощью которых ты попадешь в дикие земли. В город можно вернуться, построив респаун. Ну что ж, в добрый путь!",
                ]
            },
            tip: {
            	"en": "複数の復活地点を設置した場合は、どちらかの復活地点を選択します。 <rmb></rmb>復活地点を選択 \"Set the spawn\"",
                "en": "If you consider to build more than 1 respawn set the one you will spawn next to. <rmb></rmb> on respawn and pick \"Set the spawn\"",
                "ru": "При построении нескольких респаунов следует отмечать тот, на который нужно будет вернуться через ПКМ по респауну -> Назначить место возрождения.",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },



        "faction-daily-1": {
            name: {
            	"jp": "Help your fraction (daily)",
                "en": "Help your fraction (daily)",
                "ru": "Помощь фракции (ежедневный)",
            },
            desc: {
            	"jp": "Increase your status within the fraction",
                "en": "Increase your status within the fraction",
                "ru": "Повысить статус внутри фракции",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "garland-daily": {
            name: {
            	"jp": "Garland (daily)",
                "en": "Garland (daily)",
                "ru": "Гирлянда (ежедневный)",
            },
            desc: {
            	"jp": "Help Santa to make a garland",
                "en": "Help Santa to make a garland",
                "ru": "Помоги деду морозу сделать гирлянду",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "chrismas-flags-daily": {
            name: {
            	"jp": "Flags (daily)",
                "en": "Flags (daily)",
                "ru": "Флажки (ежедневный)",
            },
            desc: {
            	"jp": "Help Santa to make some paper flags",
                "en": "Help Santa to make some paper flags",
                "ru": "Помоги Деду Морозу сделать бумажные флажки",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "chrismas-decoration-daily-1": {
            name: {
            	"jp": "Decoration (daily)",
                "en": "Decoration (daily)",
                "ru": "Бумажные украшения (ежедневный)",
            },
            desc: {
            	"jp": "Help Santa's daughter make some paper decorations",
                "en": "Help Santa's daughter make some paper decorations",
                "ru": "Помоги Снегурочке сделать бумажные украшения",
            },
            final: {
            	"jp": "",
                "en": "",
                "ru": "",
            },
        },
        "chrismas-decoration-daily-2": {
            name: {
            	"jp": "Glass decoration (daily)",
                "en": "Glass decoration (daily)",
                "ru": "Стеклянные украшения (ежедневный)",
            },
            desc: {
            	"jp": "Help Santa's daughter make some glass decorations",
                "en": "Help Santa's daughter make some glass decorations",
                "ru": "Помоги Снегурочке сделать стеклянные украшения",
            },
            final: {
            	"jp": "",            	
                "en": "",
                "ru": "",
            },
        },
    };
};
