* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  color: #222;
  background-color: #f9f9f9;
  line-height: 1.6;
}

header {
  background: #111;
  color: #fff;
  padding: 1rem 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #00adb5;
}

.hero {
  text-align: center;
  padding: 5rem 1rem;
  background: #00adb5;
  color: white;
}

.hero h1 span {
  color: #ffdd57;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.7rem 1.2rem;
  background: #111;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.3s;
}

.btn:hover {
  background: #333;
}

section {
  padding: 3rem 2rem;
  text-align: center;
}

.skills-container, .projects-container {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 1rem;
}

.skill, .project-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

footer {
  background: #111;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }
}
