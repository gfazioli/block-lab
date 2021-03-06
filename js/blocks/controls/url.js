import classNames from 'classnames';

const { TextControl } = wp.components;

const BlockLabURLControl = ( props, field, block ) => {
	const { setAttributes } = props;
	const attr = { ...props.attributes };

	/**
	 * Sets the Error Class for the Text Control.
	 *
	 * @param {string} element The HTML element.
	 *
	 * @return {void}
	 */
	const setErrorClass = ( element, valid ) => {
		element.className = classNames( 'components-text-control__input', {
			'text-control__error': valid
		} );
	}

	return (
		<TextControl
			type="url"
			label={field.label}
			placeholder={field.placeholder || ''}
			help={field.help}
			defaultValue={field.default}
			value={attr[ field.name ]}
			onChange={urlControl => {
				attr[ field.name ] = urlControl
				setAttributes( attr )
			}}
			onFocus={ event => {
				setErrorClass( document.activeElement, false );
				event.target.reportValidity()
			}}
			onBlur={ event => {
				setErrorClass( event.target, ! event.target.checkValidity() );
			}}
		/>
	)
}

export default BlockLabURLControl
