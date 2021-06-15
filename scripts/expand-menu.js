window.addEventListener("load",function(){ 
    let foldable = document.getElementById("foldable-1")
    let height = foldable.parentNode.children[0].children[0].height

    let coll = document.querySelectorAll("#foldable-1 .collapsible")
    let i

    let foldHeight = height
        - coll.length * foldable.children[0].children[0].offsetHeight
        - 10 * coll.length - 10 + "px"   
        console.log(height)
        console.log(foldHeight)
    for (i = 0; i < coll.length; i++) {
        if (i != 0) {
            coll[i].nextElementSibling.style.display = "none"
        }
        coll[i].nextElementSibling.style.height = foldHeight

        coll[i].addEventListener("click", function () {
            coll.forEach((e => {
                if (!e.classList.contains("active")) {
                    e.nextElementSibling.style.display = "none"
                    e.classList.add("active")
                }
            }))
            this.classList.toggle("active")

            var content = this.nextElementSibling
            if (content.style.display === "block") {
                content.style.display = "none"
            } else {
                content.style.display = "block"
            }
        })
    }
})