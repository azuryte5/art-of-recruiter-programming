const { test, expect } = require('@jest/globals');
const { number } = require('yargs');
const Employee = require('../lib/Employee.js')

test('creates a employee object', () => {
    const employee = new Employee('Anakin', 66, "darth@vader.com");
    //is an object?
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('Get role of Employee added', () => {
    const employee = new Employee('Obi-wan', 2,"kenobi@jedi.com");
    expect(employee.getRole()).toEqual(expect.stringMatching('Employee'));
});

test('GetId method added', () => {
    const employee = new Employee('Obi-wan', 2,"kenobi@jedi.com");
    expect(employee.getId()).toBe(employee.id);
});
test('GetEmail method added', () => {
    const employee = new Employee('Obi-wan', 2,"kenobi@jedi.com");
    expect(employee.getEmail()).toBe(employee.email);
});
test('ask for employee name', () => {
    const employee = new Employee('Anakin', 66, "darth@vader.com")
    expect(employee.getName()).toBe(employee.name);
});