#TypeScript :

TypeScript Its jus SuperSet of JavaScript
So any Code js will be Avalid Ts Code "العكس غير صحيح "

كود الجافا سكريبت قابل انو ينحط في ملف تايب سكريبت والعكس غير صحيح
طبعا ما ننسى او لازم احول كود التايب سكريب ل جافا سكريبت عشان البراوزر انجن يفهموا ف رح اسميه
transpilation to js

```
PS C:\Users\HP\Desktop\TypeScript\TypeS> npm i -g typescript // For install TS

added 1 package in 3s
PS C:\Users\HP\Desktop\TypeScript\TypeS> npm list -g // To see All Packges
C:\Users\HP\AppData\Roaming\npm
├── @sanity/cli@4.10.3
├── depcheck@1.4.7
├── live-server@1.2.2
├── npm@11.6.2
├── typescript@5.9.3
└── vite@6.1.1

PS C:\Users\HP\Desktop\TypeScript\TypeS> tsc -version //Show TS Version
Version 5.9.3
PS C:\Users\HP\Desktop\TypeScript\TypeS>

```

حجر الاساس في تايب سكريب هي ال
Types

في تحديد التايبس استخدم كل التايبس ال جايالك من تايب سكريبت وليس جافا سكريبت
ال هي تبدا بسمول لتر

tsc "Type Script comandLine" => هي تول نزلت معي لمن نزلت تايب سكريبت من خلالها بعمل مجموعه من الاوامر ال بستخدمها لل تايب سكريبت

# لمن احول التايب سكريبت لجافا سكريبت عشان يفهمها المتصفح

```
tsc [the name of file] // the defult of behavior conviert to Es5

```

في الغالب بتفصل الكود ال بتسوي في ديفولمنت عن المكان ال رح تعمل رفع للكود فيه
عشان ما يظهر مشكله ل
replacement
انك بتحاول تعيد كتابة ملف لانو الجافا سكريت اعترت انو ملفها هو ملف تايب سكريبت صالح الاستخدام لانهم في نفس المكان

distripution "dist" الملف المجهز لنقله للبرودكشنز

```
tsc --init  // رح ينشئ الكونفيجيوريشن بدي اترجم التايب سكريب من فايل او سوري معين الى ديستوريبيوشن فايل معين

    "rootDir": "./src", الملفات ال هيتم تحويلها الانبوت سورس ال هحوله ل جافا سكريبت
    "outDir": "./dist", اي اشي بترجملي اياه حطوا في الديستريبيوشن
وبهيك حلينا مشكله التجويل ال ريبليسمنت تعت الملفات لانو فهم انو ملف ال
js ال تم انشائه هو ملف منفصل

وعشان ما اضل كل مره اعمل ابديت للملفات ال هيتم تحويله بكتب
tsc
فقط وهو ماباشرتا رح يحول اي ملف في ال
src
ال ذكرتوا في الكونفيجيوريشن رح يتم تحويله مباشره في الملف ال 3
dist



```

# عشان ما اقعداحول كل مره ل js

tsc --watch بقلو راقبلي التغيرات ال هتصير واعكسها
