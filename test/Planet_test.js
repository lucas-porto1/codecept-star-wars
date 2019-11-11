require("tls").DEFAULT_ECDH_CURVE = "auto"
const expect = require('chai').expect;
const assert = require('chai').assert; 
const {I} = inject();

Feature('Planets tests');

Scenario('Verify a successful call', async () => {
    const res = await I.sendGetRequest('/api/planets/1');
    console.log(res.data);
	expect(res.status).to.eql(200);
});

Scenario('Verify a not found call', async () => {
	const res = await I.sendGetRequest('/api/planets/370');
	expect(res.status).to.eql(404);
});

// Coloquei as validações(expect) em um cenário só para não deixar a leitura extensa.

Scenario('Verify the fields', async () => {
	const res = await I.sendGetRequest('/api/planets/1');
    expect(res.data.name).to.eql("Tatooine");
    expect(res.data.rotation_period).to.eql("23");
    expect(res.data.orbital_period).to.eql("304");
    expect(res.data.diameter).to.eql("10465");
    expect(res.data.climate).to.eql("arid");
    expect(res.data.gravity).to.eql("1 standard");
    expect(res.data.terrain).to.eql("desert");
    expect(res.data.surface_water).to.eql("1");
    expect(res.data.population).to.eql("200000");

});

Scenario('Verify the different fields', async () => {
	const res = await I.sendGetRequest('/api/planets/1');
    expect(res.data.name).to.not.eql("Tatooinee");
    expect(res.data.rotation_period).to.not.eql("24");
    expect(res.data.orbital_period).to.not.eql("305");
    expect(res.data.diameter).to.not.eql("10467");
    expect(res.data.climate).to.not.eql("ariid");
    expect(res.data.gravity).to.not.eql("1 standardd");
    expect(res.data.terrain).to.not.eql("deseert");
    expect(res.data.surface_water).to.not.eql("2");
    expect(res.data.population).to.not.eql("200030");

});

Scenario('Verify data structure', async () => {
	const res = await I.sendGetRequest('/api/planets/1');
    assert.isObject(res.data);
    assert.isString(res.data.name);
    assert.isString(res.data.rotation_period);
    assert.isString(res.data.orbital_period);
    assert.isString(res.data.diameter);
    assert.isString(res.data.climate);
    assert.isString(res.data.gravity);
    assert.isString(res.data.terrain);
    assert.isString(res.data.surface_water);
    assert.isString(res.data.population);
});