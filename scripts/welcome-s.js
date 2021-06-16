window.addEventListener('load', function () {
    let tabs = document.querySelectorAll('#welcome-s .title-s')
    let buttons = document.querySelectorAll('#welcome-s .va-bottom>div')
    let bars = document.querySelectorAll('#welcome-s .va-bottom>div progress')

    const slideTimer = 4 * 1000
    let interval = setInterval(slide, slideTimer)

    bars.forEach(b => console.log(b.value))
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            resetInterval()
            for (let i = 0; i < tabs.length; i++) {
                if (buttons[i] == e.target ||
                    isDescendant(buttons[i], e.target)) {
                    buttons[i].classList.remove('unactive')
                    tabs[i].classList.remove('unactive')
                    bars[i].value = (i + 1) * 0.25
                }
                else {
                    tabs[i].classList.add('unactive')
                    buttons[i].classList.add('unactive')
                    bars[i].value = 0
                }
            }
        })
    })

    function isDescendant(parent, child) {
        var node = child.parentNode

        while (node != null) {
            if (node == parent) {
                return true
            }
            node = node.parentNode
        }
        return false
    }

    function resetInterval() {
        clearInterval(interval)
        interval = setInterval(slide, slideTimer)
    }

    function slide() {
        for (let i = 0; i < tabs.length; i++) {
            if (!tabs[i].classList.contains('unactive')) {
                if (i == tabs.length - 1) {
                    buttons[0].click()
                    return
                }
                buttons[i + 1].click()
                return
            }
        }
    }
})