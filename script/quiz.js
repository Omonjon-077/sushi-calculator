activeTest = localStorage.getItem('test') ? localStorage.getItem('test') : null;
activePromo = JSON.parse(localStorage.getItem('promo')) ? JSON.parse(localStorage.getItem('promo')) : null;
userScore = localStorage.getItem('score') ? localStorage.getItem('score') : null;
if ($('.questions-page').length) {
    if (activeTest === 'active') {
        document.querySelector('.test-box').classList.add('d-none');
        document.querySelector('.header').classList.add('d-none');
        document.querySelector('.warning-block').classList.remove('d-none');
        document.querySelector('.result').innerText = `Siz 5 ta savoldan ${userScore} tasini topgansiz`;
    } else {
        document.querySelector('.warning-block').classList.add('d-none');
    }
    if (activePromo) {
        document.querySelector('.have-promo').classList.remove('d-none');
        document.querySelector('.have-promo span').innerText = activePromo.name;
    }

    const quizData = [
        {
            question: "Qaysi rangni yoqtiradi ?",
            a: "Sariq",
            b: "Oq",
            c: "Yashil",
            d: "Qora",
            correct: "b"
        },
        {
            question: "Qaysi mobil o'yinni sevib o'ynaydi?",
            a: "Mobile Legends",
            b: "PUBG",
            c: "UNO",
            d: "Brawl Stars",
            correct: "b"
        },
        {
            question: "Nechanchi maktabda o'qigan?",
            a: "26",
            b: "40",
            c: "1",
            d: "2",
            correct: "c"
        },
        {
            question: "Qaysi kinoni yoqtiradi?",
            a: "Interstellar",
            b: "Muhabbat masofasi",
            c: "Jon Uik",
            d: "Uzuklar hukumdori",
            correct: "b"
        },
        {
            question: "Qaysi kino kompaniyani yoqtiradi?",
            a: "MARVEL",
            b: "DC",
            c: "20th century fox",
            d: "Paramount Pictures",
            correct: "a"
        },
        {
            question: "Qaysi multfilmni yoqtiradi yoqtiradi?",
            a: "Hayvonlar shahri",
            b: "Kung Fu Panda",
            c: "Tom and Jerry",
            d: "Shrek",
            correct: "a"
        },
        {
            question: "Qaysi davlatga sayohat qilishni hohlaydi?",
            a: "AQSH",
            b: "Yaponiya",
            c: "Italiya",
            d: "Angliya",
            correct: "b"
        },
        {
            question: "Qaysi telefon ishlab chiqaradigan kompaniyani yoqtiradi?",
            a: "Apple",
            b: "Samsung",
            c: "Xiaomi",
            d: "Oppo",
            correct: "a"
        },
        {
            question: "Qaysi kompaniyani notebookini ishlatadi?",
            a: "Apple",
            b: "Asus",
            c: "HP",
            d: "Acer",
            correct: "b"
        },
        {
            question: "Qaysi taxallus bilan ko'p o'zini ataydi?",
            a: "SooM",
            b: "Gidra",
            c: "Pandora",
            d: "Sayfer",
            correct: "d"
        },
        {
            question: "Kitob o'qishni yoqtiradimi?",
            a: "Yo'q",
            b: "Ha",
            c: "Bilmadim",
            d: "Ajoyib savol",
            correct: "b"
        },
        {
            question: "Qaysi mashina kompaniyasini yoqtiradi?",
            a: "BMW",
            b: "Mercedes-Benz",
            c: "Porsche",
            d: "Audi",
            correct: "b"
        },
        {
            question: "Qaysi fudbol o'yinchisini yoqtiradi?",
            a: "Ronaldo",
            b: "Messi",
            c: "Mpabbe",
            d: "Neymar",
            correct: "a"
        },
        {
            question: "Qaysi fudbol klubini yoqtiradi?",
            a: "Barcelona",
            b: "Manchester City",
            c: "Manchester United",
            d: "Real Madrid",
            correct: "d"
        },
        {
            question: "Telefon raqamining oxiri nechi?",
            a: "82-84",
            b: "82-83",
            c: "83-82",
            d: "84-82",
            correct: "d"
        },
        {
            question: "Hozirda telefon rusumi qanday?",
            a: "iPhone15ProMax",
            b: "iPhone15Pro",
            c: "iPhone14ProMax",
            d: "iPhone14Pro",
            correct: "d"
        },
        {
            question: "1 chi farzandi kim bo'lishini hohlagan bo'lardi?",
            a: "O'g'il",
            b: "Qiz",
            c: "Egizaklar",
            d: "Aniqlashtirmagan",
            correct: "b"
        },
        {
            question: "Qaysi Universitetda o'qiydi?",
            a: "TATU",
            b: "TDPU",
            c: "TAQU",
            d: "WEST",
            correct: "c"
        },
        {
            question: "Hozirda kim bo'lish ishlaydi?",
            a: "Programmer",
            b: "Video maker",
            c: "Photographer",
            d: "Project manager",
            correct: "c"
        },
        {
            question: "Hozirda qaysi kompaniyada ishlaydi?",
            a: "Trigger",
            b: "Samsung",
            c: "Safouz",
            d: "Barchasi",
            correct: "d"
        }
    ];

    const quiz = document.getElementById('quiz');

    function getRandomElements(arr, count) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    const randomElements = getRandomElements(quizData, 5);

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

    function submitQuiz() {
        let score = 0;
        randomElements.forEach((item, index) => {
            const answer = document.querySelector(`input[name="q${index}"]:checked`);
            if (answer && answer.value === item.correct) {
                score++;
            }
        });
        if (score >= 3) {
            document.querySelector('.promo').classList.remove('d-none');
            document.querySelector('.promo span').innerText = randomElement.name;
            localStorage.setItem('promo', JSON.stringify(randomElement));
        }
        if (score >= 1) {
            setTimeout(function () {
                location.reload();
            }, 3000);
            localStorage.setItem('test', 'active');
            localStorage.setItem('score', score)
        }
        document.getElementById('result').innerText = `Siz ${randomElements.length} ta savoldan ${score} ta topdingiz`;
    }
}