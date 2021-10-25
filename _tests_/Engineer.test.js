const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js')

test('creates an Engineer with github account', () => {
    const ensign = new Engineer ("Geordi Laforge", 5, "exactly@startrek.com", "readingrainbow");
  
    expect(ensign.name).toEqual(expect.any(String));
    expect(ensign.id).toEqual(expect.any(Number));
    expect(ensign.email).toEqual(expect.any(String));
    expect(ensign.github).toEqual(expect.any(String));
  });

test('Engineer role is updated correctly' ,() =>{
    const ensign = new Engineer ("Geordi Laforge", 5, "exactly@startrek.com", "readingrainbow");
    ensign.getRole();
    expect(ensign.role).toEqual("Engineer");
  });
test('Engineers get getGithub method', () =>{
    const ensign = new Engineer ("Geordi Laforge", 5, "exactly@startrek.com", "readingrainbow")
    expect(ensign.getGithub("coolGlasses")).toBe(ensign.github);
});
