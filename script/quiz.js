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
            question: "5 + 7 * 2 - 3 = ?",
            a: "12",
            b: "16",
            c: "18",
            d: "21",
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
            question: "Jahondagi eng katta cho'l qaysi?",
            a: "Kalahari cho'li",
            b: "Qizilqum cho'li",
            c: "Sahroyi Kabir",
            d: "Gobi cho'li",
            correct: "c"
        },
        {
            question: "Buyuk Ipak Yo'li qaysi hududlardan o'tgan?",
            a: "Afrika va Yevropa",
            b: "Osiyo va Afrika",
            c: "Osiyo va Yevropa",
            d: "Shimoliy Amerika va Janubiy Amerika",
            correct: "c"
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
            question: "Qaysi daryo Yevropaning eng uzun daryosi hisoblanadi?",
            a: "Volga",
            b: "Ren",
            c: "Dunay",
            d: "Elba",
            correct: "a"
        },
        {
            question: "Bir hovuch suvni qanday ushlab tursangiz, u sizdan oqib ketmaydi?",
            a: "Qo'l bilan",
            b: "Muzga aylantirib",
            c: "Hech qanday",
            d: "Shlang bilan",
            correct: "b"
        },
        {
            question: "Quyosh sistemasidagi eng katta sayyora qaysi?",
            a: "Neptun",
            b: "Mars",
            c: "Yupiter",
            d: "Saturn",
            correct: "c"
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
            question: "Yorug'lik tezligi qanday?",
            a: "300 000 km/soat",
            b: "300 000 km/soniya",
            c: "150 000 km/soniya",
            d: "100 000 km/soniya",
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
            question: "Dunyo okeanidagi eng chuqur joy qaysi?",
            a: "Challenger chuqurligi",
            b: "Tonga chuqurligi",
            c: "Mariana chuqurligi",
            d: "Java chuqurligi",
            correct: "c"
        },
        {
            question: "Kompyuterning markaziy protsessori qanday qisqacha ataladi?",
            a: "GPU",
            b: "RAM",
            c: "CPU",
            d: "SSD",
            correct: "c"
        },
        {
            question: "12 + (6 / 2) * 3 = ?",
            a: "30",
            b: "25",
            c: "27",
            d: "21",
            correct: "d"
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
            question: "Qaysi qit'a eng katta?",
            a: "Yevropa",
            b: "Afrika",
            c: "Osiyo",
            d: "Shimoliy Amerika",
            correct: "c"
        },
        {
            question: "Quyosh sistemasida qaysi sayyora Yerdan eng yaqin bo‘ladi?",
            a: "Venera",
            b: "Mars",
            c: "Merkuri",
            d: "Saturn",
            correct: "c"
        },
        {
            question: "Yerdan osonlikcha ko’tarish mumkin, lekin uni uzoqqa otib bo’lmaydi. Bu nima?",
            a: "Qum",
            b: "Pat",
            c: "Tosh",
            d: "G'isht",
            correct: "b"
        },
        {
            question: "Qaysi organizm fotosintez jarayonini amalga oshiradi?",
            a: "Bakteriya",
            b: "Hayvon",
            c: "Qo‘ziqorin",
            d: "O‘simlik",
            correct: "d"
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
                <div class="question rounded-4 bg-white primary-shadow p-3">
                    <p class="mb-1 fs-6 fw-semibold fst-italic no-copy">${index + 1}. ${item.question}</p>
                    <input type="radio" required id="q${index}_a" name="q${index}" value="a">
                    <label class="fs-7" for="q${index}_a">${item.a}</label><br>
                    <input type="radio" required id="q${index}_b" name="q${index}" value="b">
                    <label class="fs-7" for="q${index}_b">${item.b}</label><br>
                    <input type="radio" required id="q${index}_c" name="q${index}" value="c">
                    <label class="fs-7" for="q${index}_c">${item.c}</label><br>
                    <input type="radio" required id="q${index}_d" name="q${index}" value="d">
                    <label class="fs-7" for="q${index}_d">${item.d}</label>
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
        localStorage.setItem('score', score);
        document.getElementById('result').innerText = `Siz ${randomElements.length} ta savoldan ${score} ta topdingiz`;
    });

    // User test boshlash knopkasi
    quizStartBtn.addEventListener('click', () => {
        document.querySelector('#quiz-block').classList.remove('d-none');
        quizStartBtn.classList.add('d-none');
        localStorage.setItem('test', 'active');
        document.getElementById('countdown').classList.remove('d-none');
        document.getElementById('warning-text').classList.remove('d-none');
        countdown();
    });

    // User test boshlagandagi countdown function
    function countdown() {
        // 2 minut (120 soniya)
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