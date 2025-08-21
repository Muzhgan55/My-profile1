export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://github.com/Muzhgan55" target="_blank">🐙 GitHub</a>
        <a href="https://linkedin.com/in/Muzhgan" target="_blank">💼 LinkedIn</a>
        <a href="https://twitter.com/Muzhgan122" target="_blank">🐦 Twitter</a>
      </div>
      <p>© {new Date().getFullYear()} Muzhgan Rahimi</p>
    </footer>
  );
}