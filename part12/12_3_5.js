// document 객체를 대상으로 이벤트 리스너를 추가합니다.
// 이벤트 종류는 "DOMContentLoaded"입니다.
document.addEventListener("DOMContentLoaded",
// 이벤트 핸들러
// HTML 코드가 로딩된 다음 비동기적으로 수행할 작업들입니다.    
    function(e){
        let button = document.querySelector("input")
        button.addEventListener("input",
        function(e){
            // 콘솔에 입력창의 값을 출력합니다.
            console.log(e.target.value)
            }
        )
    }
)

function hi(){
    alert("hi")
}