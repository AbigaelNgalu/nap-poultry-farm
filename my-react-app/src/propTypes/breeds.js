import PropTypes from 'prop-types'

export const breedShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  averageWeight: PropTypes.string,
  eggsPerYear: PropTypes.number,
  price: PropTypes.string,
})

export const breedsArrayPropType = PropTypes.arrayOf(breedShape)

export default {
  breedShape,
  breedsArrayPropType,
}
