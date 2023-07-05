import React, {useEffect, useState, useRef} from 'react';
import "index.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TextComp = () =>{
  const [selection, setSelection] = useState('');
  const handleSelection = () => {
  const tmpSelection = document.getSelection();

  console.log(tmpSelection);
  var text = tmpSelection.toString();
  var startIndex = 0;
  var endIndex = 0;

  if(tmpSelection.anchorNode != null){
    let position = tmpSelection.anchorNode.compareDocumentPosition(tmpSelection.focusNode);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING){
      var el = tmpSelection.anchorNode;
      startIndex = 0;
      endIndex = tmpSelection.anchorNode.length - tmpSelection.anchorOffset;
    }
    else if (position & Node.DOCUMENT_POSITION_PRECEDING){
      var el = tmpSelection.focusNode;
      startIndex = 0;
      endIndex = tmpSelection.focusNode.length - tmpSelection.focusOffset;
    }

    var index = -1;
    var i=1;
      while (el) {
        //console.log('start : ' + startIndex + '  end : ' + endIndex);
        if(el.hasChildNodes()){
          //console.log(el.nodeName);
          if(el.nodeName === 'RT'){
            var delEl = el;
            var tmpBefore = text.substring(0, startIndex);
            var tmpAfter = text.substring(endIndex);
            var tmpRT = text.substring(startIndex, endIndex);
            //console.log(tmpBefore +' | ' + tmpRT + ' | ' + tmpAfter);
            console.log('RT' + delEl.innerText);
            tmpRT = tmpRT.replace(delEl.innerText, '');
            text = tmpBefore + tmpRT + tmpAfter;
            endIndex -= delEl.innerText.length;
            el = el.parentNode; //RUBY로
          }
          else{
            var delEl = el.firstChild.nextSibling;
            //console.log(delEl.innerText);

            //console.log(delEl);
            //console.log(text);
            //console.log('start : ' + startIndex + '  end : ' + endIndex);
            var tmpBefore = text.substring(0, startIndex);
            var tmpAfter = text.substring(endIndex);
            var tmpRT = text.substring(startIndex, endIndex);
            //console.log(tmpBefore +' | ' + tmpRT + ' | ' + tmpAfter);
            console.log('RUBY' + delEl.innerText);
            tmpRT = tmpRT.replace(delEl.innerText, '');
            text = tmpBefore + tmpRT + tmpAfter;
            endIndex -= delEl.innerText.length;
          }
        }

        if(el.nodeName === '#text'){
          startIndex = endIndex;
        }
        else{
          startIndex += el.textContent.length;
        }

        //console.log("elNode");
        //console.log(el);

        el = el.nextSibling;

        if(el){
          if(el.nodeName ==='#text'){
            endIndex += el.length;
          }
          else{
            endIndex += el.textContent.length;
          }
        }

        i++;
      }
    }
    if (text) {
      console.log(text);
      setSelection(text);
    }
  }
  useEffect(() => {
      document.addEventListener('selectionchange', handleSelection);
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
    };
  }, [selection]);

  return(
    <div>
      <Row>
        <Col xl={8}>
        第一章
        　僕は37歳で、そのときボーイング747のシートに座っていた。その巨大な飛行機は分厚い雨雲をくぐり抜けて降下し、ハンブルク空港に着陸しようとしているところだった。十一月の冷ややかな雨が大地を暗く染め、<ruby>雨合羽<rt>あまがっぱ</rt></ruby>を着た整備工たちや、のっぺりとした空港ビルの上に立った旗や、BMWの広告板やそんな何もかもをフランドル派の陰うつな絵の背景のように見せていた。やれやれ、またドイツか、と僕は思った。
        　飛行機が着地を完了すると禁煙のサインが消え、天井のスピーカーから小さな音でBGMが流れはじめた。それはどこかのオーケストラが甘く演奏するビートルズの「ノルウェイの森」だった。そしてそのメロディーはいつものように僕を混乱させた。いや、いつもとは比べものにならないくらい激しく僕を混乱させ揺り動かした。
        　僕は頭が張り裂けてしまわないように身を屈めて両手で顔を覆い、そのままじっとしていた。やがてドイツ人のスチュワーデスがやってきて、気分が悪いのかと英語で訊いた。
        　「本当に大丈夫?」
        　「大丈夫です、ありがとう」と僕は言った。スチュワーデスはにっこりと笑って行ってしまい、音楽はビリー・ジョエルの曲に変わった。僕は頭を下げて北海の上空に浮かんだ暗い雲を眺め、自分がこれまでの人生の過程で失ってきた多くのもののことを考えた。失われた時間、死にあるいは去っていた人々、もう戻ることのない思い。
        　飛行機が完全にストップして、人々がシートベルトを外し、物入れの中からバックやら上着やらを取り出し始めるまで、僕はずっとあの草原の中にいた。僕は草の匂いをかぎ、肌に風を感じ、鳥の声を聴いた。それは1969年の秋で、僕はもうすぐ二十歳になろうとしていた。
        　前と同じスチュワーデスがやってきて、僕の隣に腰を下ろし、もう大丈夫かと訊ねた。
        　<p>「大丈夫です、ありがとう。ちょっと<ruby>哀<rt>かな</rt></ruby>しくなっただけだから」と僕は言って微笑んだ。</p>
        　「そういうこと私にも時々ありますよ。よく分かります」彼女はそう言って首を振り、席から立ち上がってとても素敵な笑顔を僕に向けてくれた。「良い御旅行を。さようなら」
        　「Auf Wiedersehen!」と僕も言った。
        　18年という歳月が過ぎ去ってしまった今でも、僕はあの草原の風景をはっきりと思い出すことができる。何日か続いたやわらかな雨に夏の間のほこりをすっかり洗い流された<ruby>山肌<rt>やまはだ</rt></ruby>は深く<ruby>鮮<rt>あざ</rt></ruby>やかな<ruby>青<rt>あお</rt></ruby>みをたたえ、十月の風はすすきの穂をあちこちで揺らせ、細長い雲が凍りつくような青い天頂にぴたりとはりついていた。空は高く、じっと見ている目が痛くなるほどだった。風は草原をわたり、彼女の髪をかすかに揺らせて<ruby>雑木林<rt>ぞうきばやし</rt></ruby>に抜けていった。<ruby>梢<rt>こずえ</rt></ruby>の葉がさらさらと音を立て、遠くの方で犬の鳴く声が聞こえた。まるで別の世界の入口から聞こえてくるような小さくかすんだ鳴き声だった。その他にはどんな物音もなかった。どんな物音も我々の耳に届かなかった。誰一人ともすれ違わなかった。真っ赤な鳥が二羽草原の中から何かに<ruby>怯<rt>おび</rt></ruby>えたように飛び上がって雑木林の本に飛んでいくのを見かけただけだった。歩きながら直子は僕に<ruby>井戸<rt>いど</rt></ruby>の話をしてくれた。
        　記憶というのはなんだか不思議なものだ。その中に実際に身を置いていたとき、僕はそんな風景に<ruby>殆<rt>ほと</rt></ruby>んど注意なんて払わなかった。特に印象的な風景だとも思わなかったし、18年後もその風景を細部まで覚えているかもそれないとは考えつきもしなかった。正直なところ、その時の僕には風景なんてどうでもいいようなものだったのだ。僕は僕自身のことを考え、その時隣を並んで歩いていた一人の美しい女のことを考え、僕と彼女とのことを考え、結局全てはブーメランのように自分自身の手もとに戻ってくるという年代だったのだ。おまけに僕は恋をしていて、その恋はひどくややこしい場所に僕を運び込んでいた。周りの風景に気持ちを向ける余裕なんてどこにもなかったのだ。
        　でも今では僕の<ruby>脳裏<rt>のうり</rt></ruby>に最初に浮かぶのはその草原の風景だ。草の匂い、かすかな<ruby>冷<rt>ひや</rt></ruby>やかさを含んだ風、山の<ruby>稜線<rt>りょうせん</rt></ruby>、犬の鳴く声、そんなものがまず最初に浮かび上がってくる。とてもくっきりと。それらはあまりにもくっきりとしているので、手を伸ばせば一つ一つ指でなぞれそうな気がするくらいだ。しかしその風景の中には人の姿は見えない。誰もいない。直子もいないし、僕もいない。我々はいったいどこに消えてしまったんだろう、と僕は思う。どうしてこんなことが起こりうるんだろう、と。あれほど大事そうに見えたものは、彼女やその時の僕や僕の世界は、みんなどこに行ってしまったんだろう、と。そう、僕には直子の顔を今すぐ思い出すことさえできないのだ。僕が手にしているのは人影のない背景だけなのだ。
        　もちろん時間さえかければ僕は彼女の顔を思い出すことができる。小さな冷たい手や、さらりとした手触りのまっすぐな綺麗な髪や、やわらかな丸い形の耳たぶやそのすぐ下にある小さなホクロや、冬になるとよく着ていた。上品なキャメルのコートや、いつも相手の目をじっと覗き込みながら質問する癖や、時々何かの加減で<ruby>震<rt>ふる</rt></ruby>え気味になる声 ‘まるで強風の吹く丘の上でしゃべっているみたいだった’ や、そんなイメージを一つ一つ積み重ねていくと、ふっと自然に彼女の顔が浮かび上がってくる。まず横顔が浮かび上がってくる。これは多分僕と直子がいつも並んで歩いていたせいでろう。だから僕が最初に思い出すのはいつも彼女の横顔なのだ。それから彼女は僕の方を向き、にっこりとよぎる小さな魚の影を探し求めるみたいに。
        　でもそんな風に僕の頭の中に直子の顔が浮かんでくるまでには少し時間がかかる。そして年月が経つにつれてそれに要する時間はだんだん長くなってくる。哀しいことではあるけれど、それは真実なのだ。最初は5秒あれば思い出せたのに、それが10秒になり30秒になり1分になるまねで夕暮の影のようにそれはどんどん長くなる。そしておそらくやがては夕闇の中に吸い込まれてしまうことになるのだろう。そう、僕の記憶は直子の立っていた場所から確実に遠ざかりつつあるのだ。ちょうど僕がかつての僕自身が立っていた場所から確実に遠ざかりつつあるように。そして風景だけが、その十月の草原の風景だけがまるで映画の中の象徴的なシーンみたいに繰り返し繰り返し僕の頭の中に浮かんでくる。そしてその風景は僕の頭のある部分を<ruby>執拗<rt>しつよう</rt></ruby>に蹴り続けている。おい、起きろ、僕はまだここにいるんだぞ、起きろ、起きて理解しろ、どうして俺がまだここにいるのかというその理由を。痛みはない。痛みは全くない。<ruby>蹴<rt>け</rt></ruby>とばすたびにうつろな音がするだけだ。そしてその音さえも多分いつかは消えてしまうのだろう。他の何もかもが結局は消えてしまったように。しかしハンブルク空港のルフトハンザ機の中で、彼らはいつもより長くいつもより強く僕の頭を蹴り続けていた。起きろ、理解しろ、と。だからこそ僕はこの文章を書いている。僕は何ごとによらず文章にして書いてみないことには物事をうまく理解できないというタイプの人間なのだ。
        　彼女はその時何の話をしていたんだっけ?
        　そうだ、彼女は僕に野井戸の話をしていたんのだ。そんな井戸が本当に存在してたのかどうか、僕にはわからない。あるいはそれは彼女の中にしか存在しないイメージなり記号であったのかもしれない——あの暗い日々に彼女がその頭の中で<ruby>紡<rt>つむ</rt></ruby>ぎだした他の数多くの事物と同じように。でも直子がその井戸の話をしてくれた後では、僕はその井戸の姿なしには草原の風景を思い出すことができなくなってしまった。実際に目にしたわけではない井戸の姿が、僕の頭の中では<ruby>分離<rt>ぶんり</rt></ruby>することのできない一部として風景の中にしっかりと焼きつけられているのだ。僕はその井戸の様子を細かく描写することだってできる。井戸は草原が終わって雑木林が始まるそのちょうど境い目あたりにある。大地にぽっかりと開いた直径1メートルばかりの暗い穴を草が巧妙に覆い隠している。まわりには<ruby>柵<rt>しがらみ</rt></ruby>もないし、少し高くなった石囲いもない。ただその穴が口を開けているだけである。緑石は風雨にさらされて奇妙な<ruby>白濁<rt>はくだく</rt></ruby>色に変色し、ところどころでひび割れて倒れ落ちている。小さな緑色のトカゲがそんな石の隙間にスルスルと潜り込むのが見える。身をのりだしてその穴の中を覗き込んでみても何も見えない。僕に唯一わかるのはそれがとにかく恐ろしく深いということだけだ。見当もつかないくらい深いのだ。そして穴の中には<ruby>暗黒<rt>あんこく</rt></ruby>が——世の中のあらゆる種類の暗黒を煮つめたような<ruby>濃密<rt>のうみつ</rt></ruby>な暗黒が——つまっている。
        「それは本当に——本当に深いのよ」と直子は丁寧に言葉を選びながら言った。彼女はときどきそんな話し方をした。正確な言葉を探し求めながらとしてもゆっくりと話すのだ。
        </Col>
        <Col xl={2}>
          <DictBtn selection={selection}/>
        </Col>
      </Row>
    </div>
  );
}

const DictBtn = (props) => {
  if(props.selection){
    return(
      <div>
        <iframe src={'https://ja.dict.naver.com/?m=mobile#/search?range=all&query=' + props.selection} height="1800px" width="500px"></iframe>
      </div>
    )
  }
  else{
    return(
      <div>
        <a href={'https://ja.dict.naver.com/#/search?range=all&query=' + props.selection} target="_blank">네이버 일본어 사전</a>
      </div>
    )
  }

}

export default TextComp;
