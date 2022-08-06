const Employee = require('../lib/Employee');




test('Creating new Employee Object',() => {
    const employee = new Employee('Miguel','1','gmail');

    expect(employee.name).toBe('Miguel');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('gmail');

});