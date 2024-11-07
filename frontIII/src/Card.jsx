import PropTypes from 'prop-types';

function Card({ name, description }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h2>Detalles del Animal</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Descripción:</strong> {description}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
