import PropTypes from 'prop-types';

const junkShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  itemDescription: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { junkShape };
