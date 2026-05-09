const questions = [
    {
        question: "เวลาอยู่ในกลุ่มเพื่อน คุณมักจะเป็นคนแบบไหน?",
        categoryHint: "พฤติกรรมทางสังคม",
        options: [
            { text: "คนตัดสินใจเลือกร้านอาหารหรือที่เที่ยว", points: { seme: 2, uke: 0 } },
            { text: "คอยฟังคนอื่นและตอบรับตามเสียงส่วนใหญ่", points: { seme: 0, uke: 2 } },
            { text: "คนที่คอยดูแลความเรียบร้อยของทุกคน", points: { seme: 1, uke: 1 } },
            { text: "คนที่สร้างบรรยากาศสนุกสนาน", points: { seme: 1, uke: 1 } }
        ]
    },
    {
        question: "ถ้าคนรักของคุณกำลังเศร้า คุณจะทำอย่างไร?",
        categoryHint: "ความสัมพันธ์",
        options: [
            { text: "กอดเขาไว้เงียบๆ และบอกว่าไม่เป็นไรนะ", points: { seme: 2, uke: 0 } },
            { text: "เข้าไปอ้อนให้เขาคลายเศร้า", points: { seme: 0, uke: 2 } },
            { text: "พยายามวิเคราะห์ปัญหาและหาทางแก้ให้", points: { seme: 2, uke: 0 } },
            { text: "นั่งร้องไห้เป็นเพื่อนเขา", points: { seme: 0, uke: 2 } }
        ]
    },
    {
        question: "คุณชอบเวลาที่มีคนมา 'ปกป้อง' คุณหรือไม่?",
        categoryHint: "ความรู้สึกส่วนตัว",
        options: [
            { text: "ชอบมาก รู้สึกปลอดภัยและอบอุ่น", points: { seme: 0, uke: 3 } },
            { text: "เฉยๆ ฉันดูแลตัวเองได้", points: { seme: 2, uke: 0 } },
            { text: "ฉันชอบเป็นฝ่ายปกป้องคนอื่นมากกว่า", points: { seme: 3, uke: 0 } },
            { text: "แล้วแต่สถานการณ์", points: { seme: 1, uke: 1 } }
        ]
    },
    {
        question: "ในวันหยุด คุณอยากทำอะไรกับคนพิเศษ?",
        categoryHint: "ไลฟ์สไตล์",
        options: [
            { text: "ทำอาหารให้เขาทานที่บ้าน", points: { seme: 1, uke: 1 } },
            { text: "ให้เขาพาไปเที่ยวที่ไหนก็ได้ตามใจเขา", points: { seme: 0, uke: 2 } },
            { text: "วางแผนทริปเซอร์ไพรส์เขา", points: { seme: 2, uke: 0 } },
            { text: "นอนดูหนังซบไหล่กันเงียบๆ", points: { seme: 0, uke: 1 } }
        ]
    },
    {
        question: "เมื่อเกิดการโต้แย้ง คุณมักจะ...",
        categoryHint: "การจัดการปัญหา",
        options: [
            { text: "ใช้เหตุผลและคุมสถานการณ์ให้ใจเย็นลง", points: { seme: 2, uke: 0 } },
            { text: "ยอมขอโทษก่อนเพื่อให้เรื่องจบ", points: { seme: 0, uke: 2 } },
            { text: "เงียบและรอให้อีกฝ่ายมาง้อ", points: { seme: 0, uke: 2 } },
            { text: "ชี้แจงความผิดถูกอย่างชัดเจน", points: { seme: 2, uke: 0 } }
        ]
    },
    {
        question: "คุณชอบคำชมแบบไหนมากกว่ากัน?",
        categoryHint: "ความภาคภูมิใจ",
        options: [
            { text: "เธอนี่ดูพึ่งพาได้จริงๆ เลยนะ", points: { seme: 3, uke: 0 } },
            { text: "วันนี้เธอดูใจดีและอ่อนโยนจัง", points: { seme: 0, uke: 2 } },
            { text: "เธอน่ารักจนฉันอยากดูแลตลอดไป", points: { seme: 0, uke: 3 } },
            { text: "เธอเก่งมากที่ทำเรื่องนี้สำเร็จ", points: { seme: 2, uke: 0 } }
        ]
    },
    {
        question: "สีที่คุณรู้สึกว่าบ่งบอกความเป็นคุณที่สุด?",
        categoryHint: "จิตวิทยาสี",
        options: [
            { text: "สีน้ำเงินเข้ม หรือ สีดำ (มั่นคง/ลึกลับ)", points: { seme: 2, uke: 0 } },
            { text: "สีพาสเทล หรือ สีขาว (บริสุทธิ์/อ่อนน้อม)", points: { seme: 0, uke: 2 } },
            { text: "สีแดง หรือ สีส้ม (ร้อนแรง/มั่นใจ)", points: { seme: 2, uke: 0 } },
            { text: "สีเขียว หรือ สีเหลือง (เป็นมิตร/ขี้เล่น)", points: { seme: 1, uke: 1 } }
        ]
    },
    {
        question: "คุณรู้สึกอย่างไรกับคำว่า 'ความเป็นผู้นำ'?",
        categoryHint: "ทัศนคติ",
        options: [
            { text: "เป็นสิ่งที่ฉันถนัดและชอบทำ", points: { seme: 3, uke: 0 } },
            { text: "เหนื่อยเกินไป ขอเป็นผู้ตามดีกว่า", points: { seme: 0, uke: 3 } },
            { text: "ทำได้ถ้าจำเป็น แต่ชอบสนับสนุนคนอื่น", points: { seme: 1, uke: 2 } },
            { text: "ชอบทำงานคนเดียวมากกว่า", points: { seme: 1, uke: 1 } }
        ]
    },
    {
        question: "ถ้าต้องเลือกของขวัญให้คนพิเศษ คุณจะเลือกอะไร?",
        categoryHint: "การแสดงออก",
        options: [
            { text: "ของที่เขาบ่นว่าอยากได้มานาน (ใส่ใจรายละเอียด)", points: { seme: 2, uke: 0 } },
            { text: "ของแฮนด์เมดที่ทำด้วยใจ (แสดงความรัก)", points: { seme: 0, uke: 2 } },
            { text: "เครื่องประดับหรือของหรูหรา (แสดงฐานะ/การปกป้อง)", points: { seme: 2, uke: 0 } },
            { text: "ดอกไม้สวยๆ สักช่อ (ความโรแมนติก)", points: { seme: 0, uke: 2 } }
        ]
    },
    {
        question: "เวลาดูหนังเศร้าด้วยกัน คุณมักจะ...",
        categoryHint: "การตอบสนองทางอารมณ์",
        options: [
            { text: "ยื่นทิชชู่ให้เขาแล้วปลอบใจ", points: { seme: 2, uke: 0 } },
            { text: "ซบไหล่เขาแล้วร้องไห้ไปด้วยกัน", points: { seme: 0, uke: 2 } },
            { text: "แอบเช็ดน้ำตาเงียบๆ ไม่ให้ใครเห็น", points: { seme: 1, uke: 1 } },
            { text: "ชวนคุยเรื่องอื่นเพื่อให้บรรยากาศดีขึ้น", points: { seme: 2, uke: 0 } }
        ]
    }
];

let currentQuestion = 0;
let scores = { seme: 0, uke: 0 };
let shuffledQuestions = [];

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const categoryHint = document.getElementById('category-hint');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    // Shuffle questions at the start
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    showQuestion();
}

function showQuestion() {
    const q = shuffledQuestions[currentQuestion];
    questionText.innerText = q.question;
    categoryHint.innerText = q.categoryHint;
    
    // Update progress
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.innerText = `ข้อที่ ${currentQuestion + 1}/${shuffledQuestions.length}`;

    optionsContainer.innerHTML = '';
    // Shuffle options as well
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = "w-full text-left p-4 rounded-2xl border-2 border-gray-100 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-200";
        button.innerText = option.text;
        button.onclick = () => selectOption(option.points);
        optionsContainer.appendChild(button);
    });
}

function selectOption(points) {
    scores.seme += points.seme;
    scores.uke += points.uke;
    
    currentQuestion++;
    
    if (currentQuestion < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    let title = "";
    let description = "";
    
    const total = scores.seme + scores.uke;
    const semeRatio = scores.seme / total;

    if (semeRatio > 0.7) {
        title = "The Strong Protector (Seme)";
        description = "คุณมีบุคลิกความเป็นผู้นำสูง มั่นใจในตัวเอง และชอบที่จะเป็นฝ่ายดูแลปกป้องผู้อื่น ในความสัมพันธ์คุณมักจะเป็นคนที่คอยตัดสินใจและเป็นที่พึ่งพาที่แข็งแกร่งเสมอ";
    } else if (semeRatio > 0.4) {
        title = "The Versatile Soul (Reversible)";
        description = "คุณเป็นคนยืดหยุ่นและมีความสมดุลในตัวเองสูง สามารถเป็นได้ทั้งผู้นำและผู้ตามตามสถานการณ์ คุณเข้าใจความรู้สึกของคนรอบข้างได้ดีและรู้วิธีการปรับตัวเข้ากับคู่ของคุณได้อย่างลงตัว";
    } else {
        title = "The Sweet Heart (Uke)";
        description = "คุณมีบุคลิกที่อ่อนโยน อ่อนหวาน และน่าทะนุถนอม คุณชอบการถูกดูแลและเอาใจใส่ ความละเอียดอ่อนของคุณทำให้คนรอบข้างรู้สึกอยากปกป้องและอยู่ใกล้ๆ เสมอ";
    }
    
    resultTitle.innerText = title;
    resultDescription.innerText = description;
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { seme: 0, uke: 0 };
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}

function shareResult() {
    const title = resultTitle.innerText;
    const description = resultDescription.innerText;
    const url = window.location.href;
    
    // Create a more attractive share message
    const shareText = `✨ ค้นพบตัวตนที่ซ่อนอยู่! ✨\n\n` +
                      `💖 ผลลัพธ์ของฉันคือ: ${title}\n` +
                      `📝 ${description.substring(0, 100)}...\n\n` +
                      `มาลองทำแบบทดสอบกันว่าคุณเป็นสายไหน! 👇`;

    if (navigator.share) {
        navigator.share({
            title: 'แบบทดสอบบุคลิกภาพที่ซ่อนอยู่ 💖',
            text: shareText,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        const textArea = document.createElement("textarea");
        textArea.value = `${shareText}\n${url}`;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            alert('คัดลอกผลลัพธ์ที่สวยงามลงในคลิปบอร์ดแล้ว! ✨ ส่งให้เพื่อนได้เลย');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
}
