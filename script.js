// Select the heart element and the proposal text
const heart = document.querySelector('.heart');
const proposalText = document.getElementById('proposalText');

// Add a click event listener to the heart
heart.addEventListener('click', () => {
  // Animate the heart (a simple "pop" effect)
  gsap.to('.heart', {
    duration: 0.5,
    scale: 1.2,
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut"
  });

  // Reveal the proposal text with a fade-in animation
  gsap.to(proposalText, {
    duration: 1,
    opacity: 1,
    y: -20,  // slight upward movement
    ease: "power2.out",
    delay: 0.5
  });
});
