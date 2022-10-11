

// 세가지 기능만 추가해보자.
// 1. 계정명 수정
// 2. 프로필 편집
// 3. 프로필 사진 변경

document.addEventListener("DOMContentLoaded",
    function(e){
        let configID = document.querySelector("#id i")
        let idText = document.querySelector("#id span")

        configID.addEventListener("click",
            function(e){
                idText.textContent = prompt("새로운 아이디를 입력하세요")
            }
        )
    }
)