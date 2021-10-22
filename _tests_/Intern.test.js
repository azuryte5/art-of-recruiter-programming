const { expect } = require('@jest/globals');
const Intern  = require('../lib/Intern.js')

test('creates an intern with a school', () => {
    const padawan = new Intern ("Luke Skywalker", 1, "chosenOne@lightside.com", "Jedi Academy");
  
    expect(padawan.name).toEqual(expect.any(String));
    expect(padawan.id).toEqual(expect.any(Number));
    expect(padawan.email).toEqual(expect.any(String));
    expect(padawan.school).toEqual(expect.any(String));
    console.log(padawan);
  });

  test('Intern role is updated correctly' ,() =>{
    const padawan = new Intern ("Luke Skywalker", 1, "chosenOne@lightside.com", "Jedi Academy");
    padawan.getRole()
    expect(padawan.role).toEqual("Intern")
  } )