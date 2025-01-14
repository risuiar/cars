import PropTypes from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const colourOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

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
            defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={options.map(option => ({ value: option.name, label: option.name }))}
        />
    </>
  );
}
