// index.js
module.exports = () => {
  const data = {
    associates: [],
    trainers: [
      "Ryan",
      "Mehrab",
      "Yuvi",
      "William",
      "Peter",
      "Richard",
      "Nick E.",
      "Nick J.",
      "Genesis",
      "Steve",
      "Matt",
      "Wezley",
      "Blake",
      "Mitch",
      "Emily",
      "Carolyn",
      "August"
    ],
    batches: [],
    clients: []
  }
  let firstNames = ["John","Alex","Mike","Bob","Alexandro","Jesus","Patrick"];
  let lastNames = ["Smith","Johnson","Williams","Jones","Brown","Miller","Wilson"];
  let totAssociates = firstNames.length*lastNames.length;
  let locations = ["Reston","USF","UTA","WVU","CUNY","Online"];
  let skills = ["Java","JTA","Salesforce","PEGA","Dynamics","BA","SysAdmin"];
  let clients = ["InfoSys","Cognizant","Accenture","Deloitte","TechMahindra"];
  // create clients
  for (let i = 0; i < clients.length; i++) {
    data.clients.push({
      id: i+1,
      name: clients[i]
    })
  }
  // Create batches
  for (let i = 0; i < 5; i++) {
    data.batches.push({
      id: i+1,
      name: "1804Apr04JTA",
      location: locations[Math.floor(Math.random()*locations.length)],
      skill: "JTA",
      trainerId: Math.floor(Math.random()*data.trainers.length),
      startDate: null,
      endDate: null
    });
  }
  // Create associates
  for (let i = 0; i < totAssociates; i++) {
    data.associates.push({
      selected: false,
      id: i+1,
      firstName: firstNames[i % firstNames.length], // loop through first names first
      lastName: lastNames[Math.floor(i / firstNames.length)], // match every first name to every last name
      absent: Math.random() > 0.5 ? true : false, // randomly assign
      trainerName: data.trainers[i % data.trainers.length],
      batchName: "1804Apr04JTA",
      location: locations[i % locations.length],
      skill: "JTA",
      marketingStartDate: null,
      stagingStartDate: "05/31/2018",
      confirmationDate: null,
      projectStartDate: null,
      stagingEndDate: null,
      numberInterviews: i % 4,
      repanelCount: (i+1) % 5,
      clientName: clients[i % clients.length]
    })
  }
  return data;
}
