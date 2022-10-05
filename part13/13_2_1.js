document.addEventListener("DOMContentLoaded",
function(e){
    let input = document.querySelector("input",)
    input.addEventListener("click",
        function(e){
            console.log(e.target.getAttribue("type"))
        }
    )
}
)

// type 속성을 확인하고 있다. <input> 태그의 type 속성인 'button'이 콘솔에 출력되고 있다.