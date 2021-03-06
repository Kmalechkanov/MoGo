window.addEventListener("load", function () {
    let quotes = document.querySelectorAll('.quote')

    const slideTimer = 5 * 1000
    let interval = setInterval(slideQuote, slideTimer)

    quotes.forEach(quote => {
        quote.addEventListener('click', (e) => {
            let btnLeft = e.target.parentElement.firstElementChild
            let btnRight = e.target.parentElement.lastElementChild
            if (e.target.nodeName == 'I') {
                resetInterval()

                let children = e.target.parentElement.children
                let childCount = e.target.parentElement.childElementCount
                let way = 0
                if (btnLeft == e.target) {
                    way = -1
                }
                else if (btnRight == e.target) {
                    way = +1
                }

                if (!children[1].classList.contains('unactive') && way == -1
                    || !children[childCount - 2].classList.contains('unactive') && way == +1) {
                    children[1].classList.toggle('unactive')
                    children[childCount - 2].classList.toggle('unactive')

                    children[childCount - 2].classList.add('fadein')
                    children[1].classList.add('fadein')

                    setTimeout(function () {
                        children[childCount - 2].classList.remove('fadein')
                        children[1].classList.remove('fadein')
                    }, 1500);
                    return
                }
                for (let i = 1; i < childCount - 1; i++) {
                    if (!children[i].classList.contains('unactive')) {
                        children[i].classList.toggle('unactive')
                        children[i + way].classList.toggle('unactive')

                        children[i + way].classList.add('fadein')
                        setTimeout(function () {
                            children[i + way].classList.remove('fadein')
                        }, 1500);
                        return
                    }
                    else {
                        children[i].classList.remove('fadein')
                    }
                }
            }
        })
    })

    function resetInterval() {
        clearInterval(interval)
        interval = setInterval(slideQuote, slideTimer)
    }

    function slideQuote() {
        quotes.forEach(quote => {
            quote.lastElementChild.click()
        })
    }
})