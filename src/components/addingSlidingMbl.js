import { useEffect } from "react"

const useSliding = () => {


    let touchStartX = 0;
    let touchEndX = 0;
    useEffect(() => {
        document.getElementById('carouselExampleIndicators').addEventListener('touchstart', (e) => {

            touchStartX = e.touches[0].clientX;
        })

        document.getElementById('carouselExampleIndicators').addEventListener('touchmove', (e) => {

            touchEndX = e.touches[0].clientX;
        })

        document.getElementById('carouselExampleIndicators').addEventListener('touchend', (e) => {
            if (touchEndX < touchStartX) {
                // swipe left
                console.log('swipe left');
                document.getElementById('swipeL').click()
            } else if (touchEndX > touchStartX) {
                // swipe right
                console.log('swipe right');
                document.getElementById('swipeR').click()
            }
            // reset touch variables
            touchStartX = 0;
            touchEndX = 0;
        })
    })
}

export default useSliding;