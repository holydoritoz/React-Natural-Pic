import PropTypes from 'prop-types'

const IconHeart = ({ filled }) => {
    return (
        <svg
        width="40px"
        viewBox="0 0 24 24"
      >
        <path
          fill={filled ? "red" : "white"}
          // d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2,8.5C2 5.41 4.XMR18.6 15.36 13.45 20.03L12 21.35Z"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    );
};
  export default IconHeart;

	IconHeart.propTypes = {
		filled: PropTypes.bool,
	};

