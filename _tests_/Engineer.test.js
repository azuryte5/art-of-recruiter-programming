const Engineer = require('../lib/Engineer.js')

test('creates an Engineer with github account', () => {
    const ensign = new Engineer ("Geordi Laforge", 5, "exactly@startrek.com", "readingrainbow");
  
    expect(ensign.name).toEqual(expect.any(String));
    expect(ensign.id).toEqual(expect.any(Number));
    expect(ensign.email).toEqual(expect.any(String));
    expect(ensign.github).toEqual(expect.any(String));
  });