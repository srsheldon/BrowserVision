import assert from 'assert';


export default function browserVisionComponentUnitTests() {
    const obj1 = {
        a: {
            b: 1
        }
    };
    console.log('running assertion...');
    assert.deepEqual(obj1, obj1);
}

