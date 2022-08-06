
const Intern = require('../lib/Intern');



test('Create a new Intern object', () => {
    const intern = new Intern ('Mike', '2', 'gmail2', 'school', 'Intern');
    expect(intern.name).toBe('Mike');
    expect(intern.id).toBe('2');
    expect(intern.email).toBe('gmail2');
    expect(intern.school).toBe('school');
    expect(intern.getRole()).toBe('Intern');

});