import assert from 'assert';
import BarcodeFormat from './BarcodeFormat.js';

//"test": "node --experimental-modules --harmony src/run-tests.mjs",
export default function BarcodeFormatUnitTests() {
    console.log(BarcodeFormat);
    //the enum cannot be changed
    assert.throws(
        () => {
            //throw err;
            const object2 = BarcodeFormat;
            object2.AZTEC = 'CETZA';

            assert.strictEqual(object2.AZTEC, BarcodeFormat.AZTEC);
        },
        {
            name: 'TypeError',
            message: 'Cannot assign to read only property \'AZTEC\' of object \'#<Object>\''
        }
    );

    

    //you can get the sting value
    assert.deepStrictEqual(BarcodeFormat.PDF_417, 'PDF_417');

    //you can get an array of the string values
    const expectedArrayOfValues = [
        'AZTEC',
        'CODABAR',
        'CODE_39',
        'CODE_93',
        'CODE_128',
        'DATA_MATRIX',
        'EAN_8',
        'EAN_13',
        'ITF',
        'MAXICODE',
        'PDF_417',
        'QR_CODE',
        'RSS_14',
        'RSS_EXPANDED',
        'UPC_A',
        'UPC_E',
        'UPC_EAN_EXTENSION'
    ];

    assert.deepStrictEqual(Object.values(BarcodeFormat), expectedArrayOfValues);

}

BarcodeFormatUnitTests();
