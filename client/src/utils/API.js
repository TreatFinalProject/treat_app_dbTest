import axios from "axios";

export default {
  // Gets all events
  getEvents: function () {
    return axios.get("/api/events");
  },
  // Saves an event to the database
  saveEvent: function (eventData) {
    return axios.post("/api/events", eventData);
  },
  // Gets the event with the given id
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  }
};
