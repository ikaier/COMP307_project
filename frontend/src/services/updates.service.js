import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/updates");
  }

  get(id) {
    return http.get(`/updates/${id}`);
  }

  create(data) {
    return http.post("/updates", data);
  }

  update(id, data) {
    return http.put(`/updates/${id}`, data);
  }

  delete(id) {
    return http.delete(`/updates/${id}`);
  }

  deleteAll() {
    return http.delete(`/updates`);
  }
  findByTitle(title) {
    return http.get(`/updates?title=${title}`);
  }

  
}

export default new TutorialDataService();