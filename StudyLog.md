# study log

学習メモとして作成

### 2023/12/06

1. example.tsがエラー、元からあるpost.tsもエラーが出ている…。
2. post.tsエラーは元からある例と新たに作成したテーブルが微妙に違う事が原因だった。
3. 〇createdAt ×createdeAt　ミススペルで進めていたのも原因だった。手打ちは良くない。

### 2023/12/05

1. const hello = api.post.hello.useQuery({ text: 1 });のようにすると文字列ではないので型エラーが出る。
2. example.tsが無かったので作成した

### 2023/12/04

1. bg-white/10で透明度10％
2. npx prisma studioでprismaのテーブルを見ることが可能。編集も可能。

### 2023/12/03

1. src>pages>api>trpc>index.tsx にてタイトル等設定

### 2023/12/02

1. 学習開始
2. tRPCはバックエンドで型定義を決めることができる
3. コメントアウトはctrl+k,ctrl+c (ctrl+/が使えなかった)
4. t3でつくるとprismaのセットアップが不要で便利
5. httpBatchLinkがエンドポイント
