export const EventCard = ({ name, imageLinks, description }) => {
  return (
    <div class="card" role="button">
      <span class="glow">{name}</span>
      <div class="inner">
        <img src={imageLinks} />
        <p>{description}</p>
      </div>
    </div>
  );
};
