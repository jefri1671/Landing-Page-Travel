function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  });
  