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
  // Deletes the event with the given id
  deleteEvent: function (id) {
   return axios.delete("/api/events/" + id);
    },
  // Gets the event with the given id
  getEvent: function (id) {
    return axios.get("/api/events/" + id);
  }
};
