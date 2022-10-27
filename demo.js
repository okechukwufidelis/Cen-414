var events = [
  {'Date': new Date(2023, 8, 7), 'Title': 'My Birthday'},
  {'Date': new Date(2023, 4, 5), 'Title': "Dad's Birthday"},
  {'Date': new Date(2023, 7, 11), 'Title': "Mom's Birthday"},
  {'Date': new Date(2023, 11, 25), 'Title': "Christmas Day"},
  {'Date': new Date(2023, 0, 1), 'Title': "New Year's Day"},
  {'Date': new Date(2023, 9, 1), 'Title': "Nigeria's Independence Day"},
  {'Date': new Date(2022, 9, 1), 'Title': "Nigeria's Independence Day"},
  {'Date': new Date(2023, 5, 12), 'Title': "Democracy Day"},
  {'Date': new Date(2023, 4, 27), 'Title': "Children's Day"},
  {'Date': new Date(2023, 3, 22), 'Title': "Eid El Fitr"},
  {'Date': new Date(2023, 3, 23), 'Title': "Eid El Fitr Holiday"},
  {'Date': new Date(2023, 5, 28), 'Title': "Eid El Kabir"},
  {'Date': new Date(2023, 5, 28), 'Title': "Eid El Kabir Holiday"},
  {'Date': new Date(2023, 4, 1), 'Title': "Worker's Day"},
  {'Date': new Date(2023, 8, 28), 'Title': "Eid El Maloud"},
  {'Date': new Date(2023, 3, 11), 'Title': "Easter Monday"},
  {'Date': new Date(2023, 3, 7), 'Title': "Good Friday"},
  {'Date': new Date(2023, 11, 26), 'Title': "Boxing Day"},
  {'Date': new Date(2022, 11, 26), 'Title': "Boxing Day"},
  {'Date': new Date(2022, 11, 25), 'Title': "Christmas Day"},

];

var settings = {
  Color: "#999129",
  LinkColor: "#97343b" 
};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
