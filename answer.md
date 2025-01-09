첫 번째 질문은 변수의 범위(Scope) 관련한 질문입니다. 대부분의 언어에서는 함수 내부의 변수는 함수 내부에서만 참조가 가능합니다. 다시말해, 함수 외부에서는 함수 내부에 선언된 변수를 참조할 수 없습니다. 함수 내부에 선언한 변수는 지역변수(Local Variable)이라고 부릅니다.

두 번째 질문은 JavaScript 언어는 Interpreter Language 이고, JS는 Hoisting 이라는 신기한 짓을 하기 때문에 발생하는 문제라고 생각됩니다.

['Hoisting'](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)은 함수의 선언과, 변수의 선언이 Interpreter가 코드를 실행할 때 가장 먼저 ( 코드의 최상단에서 ) 수행하는 것처럼 만들어주는 굉장히 이상한 특성입니다.

```javascript
const savedUsername = localStorage.getItem("username");

function paintGreeting() {
  greeting.textContent = `Hello ${savedUsername}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}
```

작성자분이 사용하신 코드를 보면, savedUsername 이라는 변수를 선언하셨고, 다음으로 paintGreeting 이라는 function 을 선언하셨습니다. 그리고 강의에서 사용한 것처럼 loginForm에서 submit value 를 받아오는 코드도 존재할겁니다. 이때, JS에서는 Hoisting 특성때문에 우리들의 코드를 지멋대로 읽어댈겁니다. 변수와 함수를 먼저 선언하는 방식으로 말이죠.

```javascript
const savedUsername = localStorage.getItem("username");
```

맨 처음에 해당 변수가 선언될 때, 웹 브라우저의 local Strorage에서는 key도, value도 찾을 수 없습니다. 하지만 JS의 인터프리터는 Hoisting을 통해서 변수를 선언하는 과정이 필요하므로 해당 변수명(savedUsername)을 선언할 수 있습니다. 하지만 여전히 localStorge에서는 key도 value도 없습니다. 즉, '없다' 에 해당하는 'null' 이 savedUsername에 선언됩니다.

```javascript
function paintGreeting() {
  greeting.textContent = `Hello ${savedUsername}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}
```

이후 작성자분이 input form에 Rose를 넣고 submit 하시게 되면 웹브라우저의 localStroage에 Key:username | Value:Rose 가 저장됩니다. 하지만 그 전에 이미 savedUsername는 null이 선언되었기 때문에 paintGreeting() 함수에서 greeting.textContent = 'Hello null' 으로 값이 변경됩니다. 따라서 웹페이지에는 'Hello null' 이 출력됩니다.

그 다음으로 작성자분이 웹브라우저를 Refresh 하면, JS를 컴파일한 파일로 해석하게 됩니다. 이때 인터프리터가 Hoisting을 통해 선언한 것처럼 savedUsername을 다시 선언합니다. 그런데 이번에는 localStorage에 Key:username 이 존재하고, 그 값 Value:Rose 가 존재합니다.

따라서 savedUsername = "Rose" 로 변수가 선언됩니다. 마찬가지로 이제는 paintGreeting()에서도 정상적으로 'Hello Rose' 으로 값을 변경해줄 수 있습니다. 그렇기 때문에 웹페이지에는 'Hello Rose' 가 정상적으로 출력됩니다.

만약 우리가 변수를 선언할 때 = 이후의 것을 적지 않았더라면 해당 값은 'Undefined' 가 출력될 것입니다. 물론 그렇게 선언하면 우리가 원하는 submit value를 받아오는 동작이 수행되지 않아 계속 'Undefined'가 출력될겁니다.
