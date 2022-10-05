document.addEventListener("DOMContentLoaded",
    function(e){
        let keydonwn = document.querySelector("#keydown")
        keydonwn.addEventListener("keydown",
        function(e){
            console.log(e.target.value)
        }
        )
        let change = document.querySelector("#change")
        keydonwn.addEventListener("change",
        function(e){
            console.log(e.target.value)
        }
        )

        let input = document.querySelector("#input")
        keydonwn.addEventListener("input",
        function(e){
            console.log(e.target.value)
        }
        )
    }
    )