const Manager = require('../lib/Manager.js')

test('creates an manager object with office number', () => {
    const boss = new Manager ("Palpatine", 1, "darth@sidious.com", 626);
  
    expect(boss.name).toEqual(expect.any(String));
    expect(boss.id).toEqual(expect.any(Number));
    expect(boss.email).toEqual(expect.any(String));
    expect(boss.officeNumber).toEqual(expect.any(Number));
  });