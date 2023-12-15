// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"],
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"],
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"],
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"],
  },
];

const findFriend = (contacts, name, someKey) => {
  const contactPresent = contacts.find((contact) => contact.name === name);

  if (contactPresent && contactPresent[someKey]) {
    const output = {
      name: contactPresent.name,
      [someKey]: contactPresent[someKey],
    };
    return console.log(output);
  } else {
    return console.log("Not Found");
  }
};

findFriend(contacts, "Abbott", "phone");
findFriend(contacts, "Costello", "birthday");

// findFriend(contacts, "Abbott", "phone") should return { name: "Costello", phone: "767 676 7676" }
// findFriend(contacts, "Buster", "email") should return { name: "Hardy", email: "hardy@hardyharhar.com" }
// findFriend(contacts, "Bob", "phone") should return "Not found"
// findFriend(contacts, "Costello", "birthday") should return "Not found" (but if Costello's first friend, Abbott, did have a birthday field, then it should work and return that their name and birthday information)
