let record = [
    { Name: "Gibo", Age: 16, SkillSet: [{ Skill: "SAP UI5" }, { Skill: "SAP HANA" }] },
    { Name: "Patrick", Age: 22, SkillSet: [{ Skill: "SAP UI5" }, { Skill: "SAP HANA" }, { Skill: "SAP ABAP" }] },
    { Name: "MJ", Age: 24, SkillSet: [{ Skill: "SAP HANA" }] }
];

let maxPerson = record.reduce((prev, curr) => (curr.SkillSet.length > prev.SkillSet.length ? curr : prev));
console.log(`Name: ${maxPerson.Name}\nAge: ${maxPerson.Age}`);
