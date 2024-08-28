activeTest = localStorage.getItem('test') ? localStorage.getItem('test') : null;
activePromo = JSON.parse(localStorage.getItem('promo')) ? JSON.parse(localStorage.getItem('promo')) : null;
userScore = localStorage.getItem('score') ? localStorage.getItem('score') : 0;
touchBtn = localStorage.getItem('touch') ? localStorage.getItem('touch') : null;
if ($('.questions-page').length) {
    // User testdan o'tkanini tekshirsh
    if (activeTest === 'active') {
        document.querySelector('.test-box').classList.add('d-none');
        document.querySelector('.header').classList.add('d-none');
        document.querySelector('.warning-block').classList.remove('d-none');
        document.querySelector('#quiz-block').classList.remove('d-none');
        document.querySelector('.result').innerText = `Siz 5 ta savoldan ${userScore} tasini topgansiz`;
    } else {
        document.querySelector('.warning-block').classList.add('d-none');
    }
    // User promo yutkanini tekshirish
    if (activePromo) {
        document.querySelector('.have-promo').classList.remove('d-none');
        document.querySelector('.have-promo span').innerText = activePromo.name;
    }

    // User testdan knopkani bosganmi yoki yoq tekshirish
    if (userScore) {
        localStorage.removeItem('touch');
    } else if (touchBtn == 'inactive') {
        document.querySelector('#warning-text-2').classList.remove('d-none');
    }

    // Savollar ro'yhati
    const quizData = [
        {
            question: "Daraxtda sakkizta olma osilgan edi: uchta qizil va beshta yashil. Ikki kundan keyin yana ikkita olma qizarib ketdi. Hozir daraxtdagi olmalar soni qancha?",
            a: "10",
            b: "6",
            c: "5",
            d: "8",
            correct: "d"
        },
        {
            question: "Bir yilda necha oy 28 kundan iborat?",
            a: "12",
            b: "2",
            c: "1",
            d: "10",
            correct: "a"
        },
        {
            question: "Agar u to'g'ri bo'lsa, bu nima?",
            a: "Xato",
            b: "Haqiqat",
            c: "Yolg'on",
            d: "Savol",
            correct: "b"
        },
        {
            question: "Qaysi biri doimo kelajakda bo'ladi, lekin hech qachon hozirgi yoki o'tmishda emas?",
            a: "Ertaga",
            b: "Bugun",
            c: "Kecha",
            d: "Yillar",
            correct: "a"
        },
        {
            question: "Bu nima: Men suzaman, lekin suv emasman; uchaman, lekin qush emasman; hayot kechiraman, lekin hayvon emasman?",
            a: "Kapalak",
            b: "Qush",
            c: "Bulut",
            d: "Birovning orzusi",
            correct: "c"
        },
        {
            question: "Qaysi biri to'rtta burchakka ega, ammo hech qanday burchakda burchaklar mavjud emas?",
            a: "Uchburchak",
            b: "To'rtburchak",
            c: "Aylana",
            d: "Kub",
            correct: "c"
        },
        {
            question: "Bu nima: Ko'z bilan ko'rinmaydi, og'iz bilan tatib bo'lmaydi, lekin his qilish mumkin?",
            a: "Yangi hid",
            b: "Qiyin so'z",
            c: "Havo",
            d: "Sevgi",
            correct: "d"
        },
        {
            question: "Qaysi yo'ldan o'tganingda orqaga qayta olmaysan?",
            a: "Shosse",
            b: "Oqim",
            c: "O'tgan kun",
            d: "Do'kon",
            correct: "c"
        },
        {
            question: "Agar sizda bo’lsa, uni baham ko’rishni xohlaysiz. Agar baham ko’rgan bo’lsangiz, endi sizda yo’q. Nimaligini toping?",
            a: "Pul",
            b: "Sir",
            c: "Bilim",
            d: "Uy",
            correct: "b"
        },
        {
            question: "Bir hovuch suvni qanday ushlab tursangiz, u sizdan oqib ketmaydi?",
            a: "Qo'l bilan",
            b: "Muzga aylantirib",
            c: "Stakanga quyib",
            d: "Shlang bilan",
            correct: "b"
        },
        {
            question: "Agar bitta olmani ikkiga bo'lsangiz, u nima bo'ladi?",
            a: "To'liq olmaga aylanadi",
            b: "Ikkita bo'lak bo'ladi",
            c: "Kamayadi",
            d: "Olmani bir xil bo'lakka bo'lasiz",
            correct: "b"
        },
        {
            question: "Bir kishi orqaga qadam tashlasa, u oldinga yurayotganida nimani yo'qotadi?",
            a: "Vaqt",
            b: "Yoqtirgan yo'lni",
            c: "Qadamini",
            d: "Unga bog'liq bo'lgan narsani",
            correct: "a"
        },
        {
            question: " Bu nima: Har yili bir marta keladi, lekin o'sha yil oxirida tugaydi?",
            a: "Tug'ilgan kun",
            b: "Yangi yil",
            c: "Dekabr",
            d: "Rojdestvo",
            correct: "b"
        },
        {
            question: "Bir ot minglab qadam tashlaydi, ammo hech qachon joyidan siljimaydi. Bu qanday ot?",
            a: "Shaxmat oti",
            b: "Savatli ot",
            c: "Yelvizak",
            d: "Plastik ot",
            correct: "a"
        },
        {
            question: "Qaysi narsa xonasiz uyga ega bo'lishi mumkin?",
            a: "Qovoq",
            b: "Kitob",
            c: "Qopqoq",
            d: "Daraxt",
            correct: "d"
        },
        {
            question: "Biror kishi bitta ko'zini yuma oladi, lekin boshqa ko'zini yuma olmasa, nima bo'ladi?",
            a: "Ko'rolmaydi",
            b: "Ko'rishni davom ettiradi",
            c: "Yaxshi ko'rishni boshlaydi",
            d: "Ko'r bo'lib qoladi",
            correct: "b"
        },
        {
            question: "Bir odam tog'dan pastga tushayotganda 100 marta yiqiladi. Nega u biror marta shikastlanmaydi?",
            a: "U yostiq olib yuradi",
            b: "U tushayotganiga o'xshamaydi",
            c: "U har safar sakrab tushadi",
            d: "U pastda suzadi",
            correct: "b"
        },
        {
            question: "Bu nima: Sizni har doim ta'qib qiladi, lekin siz uni tutolmaysiz?",
            a: "Soyangiz",
            b: "Yaxshi qarindosh",
            c: "Yomon kayfiyat",
            d: "Oyoq izingiz",
            correct: "a"
        },
        {
            question: "Bu nima: Agar siz undan foydalanmasangiz, u o'likdek bo'ladi, lekin undan foydalanishingiz bilan u tiriladi?",
            a: "Elektr chiroq",
            b: "Boshqotirma",
            c: "Radiatsiya",
            d: "Qalam",
            correct: "d"
        },
        {
            question: "Qaysi biri ko'proq gapiradi: til yoki og'iz?",
            a: "Til",
            b: "Og'iz",
            c: "Gapiruvchi odam",
            d: "To'g'ri javob yo'q",
            correct: "c"
        },
        {
            question: "Yerdan osonlikcha ko’tarish mumkin, lekin uni uzoqqa otib bo’lmaydi. Bu nima?",
            a: "Qum",
            b: "Pat",
            c: "Tosh",
            d: "G'isht",
            correct: "c"
        }
    ];


    const quiz = document.getElementById('quiz'),
        quizStartBtn = document.getElementById('quiz-start'),
        checkAns = document.getElementById('check-ans');

    // Random 5ta savol oladigan function
    function getRandomElements(arr, count) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    const randomElements = getRandomElements(quizData, 5);

    // Random 5ta savolni oldin test yechkanmi yoki yoqmi shunga qarab chiqarish
    if (activeTest == null) {
        quiz.classList.remove('d-none');
        randomElements.forEach((item, index) => {
            quiz.innerHTML += `
                <div class="question">
                    <p class="mb-1 fs-4 fw-semibold fst-italic">${index + 1}. ${item.question}</p>
                    <input type="radio" required id="q${index}_a" name="q${index}" value="a">
                    <label class="" for="q${index}_a">${item.a}</label><br>
                    <input type="radio" required id="q${index}_b" name="q${index}" value="b">
                    <label class="" for="q${index}_b">${item.b}</label><br>
                    <input type="radio" required id="q${index}_c" name="q${index}" value="c">
                    <label class="" for="q${index}_c">${item.c}</label><br>
                    <input type="radio" required id="q${index}_d" name="q${index}" value="d">
                    <label class="" for="q${index}_d">${item.d}</label>
                </div>
            `;
        });
    }

    // User test yechkanmi yoki yoq tekshirib savolni jo'natadigan btn chiqarish
    if (activeTest === 'active') {
        checkAns.classList.add('d-none')
    }

    // User test natijasini olish
    checkAns.addEventListener('click', () => {
        let score = 0;
        // User test natijasini tekshirish
        randomElements.forEach((item, index) => {
            const answer = document.querySelector(`input[name="q${index}"]:checked`);
            if (answer && answer.value === item.correct) {
                score++;
            }
        });
        // User test natijasini 3tadan ko'p bolganida promo berish va localga saqlash
        if (score >= 3) {
            document.querySelector('.promo').classList.remove('d-none');
            document.querySelector('.promo span').innerText = randomElement.name;
            localStorage.setItem('promo', JSON.stringify(randomElement));
        }
        // User test natijasini 1tadan ko'p bolganida pageni yangilash
        if (score >= 1) {
            setTimeout(function () {
                location.reload();
            }, 2700);
            document.getElementById('countdown').classList.add('d-none');
        }
        // User test natijinni bilganda localga yozib qoyish
        localStorage.setItem('test', 'active');
        localStorage.setItem('score', score);
        document.getElementById('result').innerText = `Siz ${randomElements.length} ta savoldan ${score} ta topdingiz`;
    });

    // User test boshlash knopkasi
    quizStartBtn.addEventListener('click', () => {
        document.querySelector('#quiz-block').classList.remove('d-none');
        quizStartBtn.classList.add('d-none');
        document.getElementById('countdown').classList.remove('d-none');
        document.getElementById('warning-text').classList.remove('d-none');
        countdown();
    });

    // User test boshlagandagi countdown function
    function countdown() {
        // 1.5 minut (90 soniya)
        let timeLeft = 120;

        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;

            document.querySelector('.minutes').innerText = `${minutes < 10 ? '0' : ''}${minutes}`;
            document.querySelector('.seconds').innerText = `${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeLeft > 0) {
                timeLeft--;
            } else {
                clearInterval(timerId);
                document.getElementById('countdown').innerText = "Vaqt tugadi!";
                setTimeout(function () {
                    location.reload();
                }, 1500);
                localStorage.setItem('test', 'active');
                localStorage.setItem('touch', 'inactive');
            }
        }

        // Taymerni har 1 soniyada yangilab turish
        const timerId = setInterval(updateTimer, 1000);
    }
}