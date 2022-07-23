var reg = /^\d{4}-\d{2}-\d{2}$/

console.log(reg.test("2022-06-01") && reg.test("2022-06-29"));