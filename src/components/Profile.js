export default function Profile({ name, title, bio, image }) {
  return (
    <section className="profile">
      {/* Profile picture */}
      <img src={image} alt={name} className="profile-pic" />

      {/* Name and Title */}
      <h2>{name}</h2>
      <h4>{title}</h4>

      {/* Short Bio */}
      <p>{bio}</p>
    </section>
  );
}