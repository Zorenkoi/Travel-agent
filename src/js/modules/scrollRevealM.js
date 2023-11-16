import ScrollReveal from 'scrollreveal'

function scrollRevealM(){
    ScrollReveal({
        distance: '60px',
        duration: 2000
      })
      
      // ScrollReveal().reveal('.header', {
      //   origin: 'top'
      // })
      ScrollReveal({
        distance: '300px'
      }).reveal('.discover__desc', {
        origin: 'left'
      })
      ScrollReveal({
        distance: '300px'
      }).reveal('.discover__picture', {
        origin: 'right'
      })
}

export default scrollRevealM
