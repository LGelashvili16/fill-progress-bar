// ყველა პროგრეს ბარის ნოუდლისტი.
const progressBars = document.querySelectorAll('.progress-bar');

const section = document.getElementById('section');

// Intersection Observer-ის ოფციები.
// ამ შემთხვევაში როდესაც სექციის 50% გამოჩნდება მაშინ შესრულდეს ის ფუნქცია რომელსაც გადავცემთ ობსერვერს.
const options = {
  threshold: 0.5,
};

// ობსერვერის ქოლბექ ფუნქცია
const whileObserving = (entries) => {
  if (entries[0].isIntersecting) {
    progressBars.forEach((bar) => (bar.style.width = `${bar.dataset.fill}%`));
  }
};

// Intersection observer-ის შექმნა და მასზე დაკვირვება.
const observer = new IntersectionObserver(whileObserving, options);
observer.observe(section);
