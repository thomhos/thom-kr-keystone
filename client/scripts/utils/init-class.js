export default (selector, constructor, opt_arguments) => {
	// grab all the module elements
	const moduleElements 	= document.querySelectorAll( selector );
	const moduleInstances 	= [];

	for ( var i = 0, leni = moduleElements.length; i < leni; i++ ) {

		let element = moduleElements[i];

		if( !opt_arguments ) {
			// create new module and save it into the Array
			moduleInstances.push( new constructor( element ) );
		} else {

			// if an Array with extra arguments have been given, push them into an arguments array
			// the first argument will the context for the function, can be null because the context will be reset by the new operator
			// the seconds argument is actually the first argument to be passed onto the constructor, so in this case the HTMLElement.
			let constructorArguments = [ null, element ];
			Array.prototype.push.apply( constructorArguments, opt_arguments );

			// create new module with the arguments and save it into the Array
			// @see: http://stackoverflow.com/questions/1606797/use-of-apply-with-new-operator-is-this-possible
			moduleInstances.push( new ( constructor.bind.apply( constructor, constructorArguments ) )() );

		}
	}
}