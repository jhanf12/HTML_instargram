document.addEventListener("DOMContentLoaded",
    function(e){
        document.addEventListener("keydown",
        function(e){
            console.log(e.key)
            if (e.key=="q"){    
                alert("this is Q!")
            }
        }
        )

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