/**
* Roc
*
* This need to be exported for something to be considered a valid Roc extension.
*/
export const roc = { // eslint-disable-line
    packages: [
        require.resolve('roc-abstract-package-base'),
    ],
};
