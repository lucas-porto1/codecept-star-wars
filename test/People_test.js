require("tls").DEFAULT_ECDH_CURVE = "auto"
const expect = require('chai').expect;
const assert = require('chai').assert; 
const {I} = inject();

Feature('People tests');

Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest('/api/people/1');
	console.log(res.data);
	expect(res.status).to.eql(200);
});

Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/api/people/266');
	expect(res.status).to.eql(404);
});

// Coloquei as validações(expect) em um cenário só para não deixar a leitura extensa.

Scenario('Verify the fields', async () => {
	const res = await I.sendGetRequest('/api/people/1');
	expect(res.data.name).to.eql("Luke Skywalker");
	expect(res.data.height).to.eql("172");
	expect(res.data.mass).to.eql("77");
	expect(res.data.hair_color).to.eql("blond");
	expect(res.data.skin_color).to.eql("fair");
	expect(res.data.eye_color).to.eql("blue");
	expect(res.data.birth_year).to.eql("19BBY");
	expect(res.data.gender).to.eql("male");

});

Scenario('Verify different fields', async () => {
	const res = await I.sendGetRequest('/api/people/1');
	expect(res.data.name).to.not.eql("Luske");
	expect(res.data.height).to.not.eql("173");
	expect(res.data.mass).to.not.eql("78");
	expect(res.data.hair_color).to.not.eql("blondd");
	expect(res.data.skin_color).to.not.eql("fairr");
	expect(res.data.eye_color).to.not.eql("bluee");
	expect(res.data.birth_year).to.not.eql("19XXY");
	expect(res.data.gender).to.not.eql("female");

});

Scenario('Verify data structure', async () => {
	const res = await I.sendGetRequest('/api/people/1');
    assert.isObject(res.data);
    assert.isString(res.data.name);
    assert.isString(res.data.height);
	assert.isString(res.data.mass);
	assert.isString(res.data.hair_color);
	assert.isString(res.data.skin_color);
	assert.isString(res.data.eye_color);
	assert.isString(res.data.birth_year);
	assert.isString(res.data.gender);

});