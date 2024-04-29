const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
    }
  });
});

export default observer;
