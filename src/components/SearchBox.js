import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function SearchBox({
    title,
    options,
    onChange
}) {
    SearchBox.propTypes = {
    title: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func
}
  return (
    <>
        <div className='font-bold'>{title}:</div>
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options.map(option => ({ value: option.id, label: option.name }))}
            onChange={onChange}
        />
    </>
  );
}
