import axios from "axios";

export default {
// EVENT API ROUTES
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
  },

// TODO API ROUTES
  // Gets all events
  getTodos: function () {
    return axios.get("/api/todo");
  },
  // Saves a todo to the database
  saveTodo: function (todoData) {
    return axios.post("/api/todo", todoData);
  },
  // Deletes the todo with the given id
  deleteTodo: function (id) {
   return axios.delete("/api/todo/" + id);
    },
  // Gets the todo with the given id
  getTodo: function (id) {
    return axios.get("/api/todo/" + id);
  },

};
