// prompt로 입력 받은 문자열을 Number타입으로 형변환 해준다.
const number = Number(prompt("참가자는 몇 명인가요?"));
const $input = document.querySelector('input');
const $btn = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
// 현재 단어
let newWord;
// 제시어
let word;
const onInput = (event) => {
    // 이벤트가 발생한 곳의 값을 newWord에 넣어준다.
    newWord = event.target.value;
};
const onClickButton = () => {
    // 제시어가 없는 경우 && 입력한 단어가 맞는 단어인지
    if(!word || word.at(-1) === newWord[0]) {
        word = newWord;
        $word.textContent = word;
        const order = Number($order.textContent);
        if(order + 1 > number) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
    } 
    // 제시어가 있는 경우 -> 끝말잇기가 성립하는지 확인
    else {
            alert('틀린 단어입니다!');
            $word.textContent = '';
            $order.textContent = 1;
    }
    $input.value = '';
    $input.focus();
};
// 이벤트 함수를 변수에 연결
$input.addEventListener('input', onInput);
$btn.addEventListener('click', onClickButton);