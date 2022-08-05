
const Engineer = require('../lib/Engineer');

test('Create a new engineer object', () => {
    const engineer = new Engineer ('Mike', '2', 'gmail2', 'mikegithub');
    expect(engineer.name).toBe('Mike');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('gmail2');


});


