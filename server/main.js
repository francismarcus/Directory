import { Meteor } from "meteor/meteor";
import { Info } from "../imports/collections/collection";
import { image, helpers } from "faker";

Meteor.startup(() => {
  // Generate faker data if empty
  const numberRecords = Info.find({}).count();

  if (!numberRecords) {
    // var times = 20;
    // for (var i = 0; 1 < times; i++) {
    _.times(20, () => {
      const { name, email, phone, address } = helpers.createCard();
      Info.insert({
        name,
        email,
        phone,
        address,
        avatar: image.avatar()
      });
    });
  }
  console.log(numberRecords);

  // Limit meteor publications,TODO: add load more.
  Meteor.publish("Info", function() {
    return Info.find({}, { limit: 20 });
  });
});
