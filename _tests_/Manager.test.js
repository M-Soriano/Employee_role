
const Manager = require('../lib/Manager');



test('Create a new Manager object', () => {
    const manager = new Manager ('Mike', '2', 'gmail2', '123', 'Manager');
    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe('2');
    expect(manager.email).toBe('gmail2');
    expect(manager.officenumber).toBe('123');
    expect(manager.getRole()).toBe('Manager');

});
