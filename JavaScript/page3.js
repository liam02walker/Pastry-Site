function rateTest() {
    let rate = prompt("Rate me 1-5")

    while (rate <= 5 & rate > 0) {
        document.write(rate)
        rate = 0
    }
}